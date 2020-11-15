<template>
  <div class="center">
    <div class="custom-tree-container">
      <div class="block">
        <el-tree
          :data="data"
          show-checkbox
          node-key="id"
          default-expand-all
          :expand-on-click-node="false">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ data.label }}</span>
        <span>
          <el-button
            type="text"
            size="mini"
            @click="() => append(data)">
            Append
          </el-button>
          <el-button
            type="text"
            size="mini"
            @click="() => update(data)">
            update
          </el-button>
          <el-button
            v-if="data.parent.level > 0"
            type="text"
            size="mini"
            @click="() => remove(data)">
            Delete
          </el-button>
        </span>
      </span>
        </el-tree>
      </div>
    </div>

    <DepartmentInput v-if="isShow"
                     :isUpdate="isUpdate" :department="department"
                     @insertDepartment="insertDepartment" @updateDepartment="updateDepartment"
                     ref="departmentInput"/>
  </div>
</template>

<script>

import serverSv from '../../common/sv/serverSv'
import DepartmentInput from './DepartmentInput'

export default {
  name: 'DepartmentList',
  components: {DepartmentInput},
  created () {
    this.listData()
  },
  data () {
    return {
      data: [],
      departments: [],
      department: {},
      searchData: {},
      isUpdate: false,
      isShow: false
    }
  },

  methods: {
    async listData () {
      this.isShow = false
      const res = await serverSv.post('/department/list', this.searchData)
      this.departments = res.data.data
      this.data = JSON.parse(JSON.stringify(this.departments))
    },
    append (data) {
      this.isShow = true
      this.isUpdate = false
      this.department = data
      setTimeout(() => {
        this.$refs.departmentInput.setData()
      }, 100)
    },
    update (data) {
      this.isShow = true
      this.isUpdate = true
      this.department = data
      setTimeout(() => {
        this.$refs.departmentInput.setData()
      }, 100)
    },
    async insertDepartment (parentCode, name, code) {
      this.isShow = false
      const registDepartment = {}
      registDepartment.parent = parentCode
      registDepartment.name = name
      registDepartment.code = code
      const res = await serverSv.post('/department/insert', registDepartment)
      if (res.data.success) {
        alert(res.data.message)
        this.listData()
      }
    },
    async updateDepartment (id, name, code) {
      this.isShow = false
      const updateDepartment = {}
      updateDepartment.id = id
      updateDepartment.name = name
      updateDepartment.code = code
      const res = await serverSv.post('/department/update', updateDepartment)
      if (res.data.success) {
        alert(res.data.message)
        this.listData()
      }
    },
    async remove (data) {
      console.log(data)
      const res = await serverSv.delete('/department/delete/' + data.parent.id, {})
      if (res.data.success) {
        alert(res.data.message)
        this.listData()
      }
    }
  }
}
</script>

<style scoped>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}

.center {
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  width: 50%;
}
</style>
