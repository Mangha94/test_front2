<template>
  <div>
    <el-table
      :data="businessValues" style="width: 50%;" class="center">
      <el-table-column
        prop="seq"
        label="우선순위"
        width="180" class="centerText">
      </el-table-column>
      <el-table-column
        v-if="valueType === 'SPOT'"
        prop="name"
        label="직위명"
        width="900">
      </el-table-column>
      <el-table-column
        v-if="valueType === 'POSITION'"
        prop="name"
        label="직책명"
        width="900">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="관리"
        width="120">
        <template slot-scope="scope">
          <el-button @click.native.prevent="deleteValue(scope.$index)" type="text" size="small">Delete</el-button>
          <el-button @click.native.prevent="setValue(scope.$index)" type="text" size="small">Edit</el-button>
        </template>
      </el-table-column>
    </el-table>

    <business-value-insert @insertValue="insertValue" @updateValue="updateValue" :isUpdate="isUpdate" :businessValue="businessValue" ref="businessValueInsert"/>
  </div>
</template>

<script>

import serverSv from '../../common/sv/serverSv'
import BusinessValueInsert from './BusinessValueInsert'

export default {
  name: 'BusinessValueTable',
  props: {
    valueType: String
  },
  data () {
    return {
      businessValues: [],
      businessValue: {},
      searchData: {
        valueType: ''
      },
      registBusinessValue: {},
      isUpdate: false
    }
  },
  created () {
    this.listData()
  },
  methods: {
    async listData () {
      this.searchData.valueType = this.valueType
      const res = await serverSv.post('/businessValue/list', this.searchData)
      this.businessValues = res.data.data
    },
    async insertValue (seq, name) {
      this.registBusinessValue.seq = seq
      this.registBusinessValue.name = name
      this.registBusinessValue.valueType = this.valueType
      const res = await serverSv.post('/businessValue/insert', this.registBusinessValue)
      if (res.data.success) {
        this.listData()
      }
    },
    async deleteValue (index) {
      const res = await serverSv.delete('/businessValue/delete/' + this.businessValues[index].id, null)
      if (res.data.success) {
        alert(res.data.message)
        this.listData()
      }
    },
    setValue (index) {
      this.businessValue = this.businessValues[index]
      this.isUpdate = true
      setTimeout(() => {
        this.$refs.businessValueInsert.setData()
      }, 100)
    },
    async updateValue (id, seq, name) {
      this.registBusinessValue.seq = seq
      this.registBusinessValue.name = name
      this.registBusinessValue.valueType = this.valueType
      const res = await serverSv.post('/businessValue/update/' + id, this.registBusinessValue)
      if (res.data.success) {
        alert(res.data.message)
        this.isUpdate = false
        this.listData()
      }
    }
  },
  components: {
    BusinessValueInsert
  }
}
</script>

<style scoped>
.center {
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
}
.centerText {
  text-align: center;
}
</style>
