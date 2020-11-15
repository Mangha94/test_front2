<template>
  <div>
    <table class="center">
      <colgroup>
        <col width="20%"></col>
        <col width="35%"></col>
        <col width="35%"></col>
        <col width="10%"></col>
      </colgroup>
      <td>
        <el-input
          placeholder="부모코드"
          type="text"
          readonly
          v-model="parentCode">
        </el-input>
      </td>
      <td>
        <el-input
          placeholder="이름"
          type="text"
          v-model="name">
        </el-input>
      </td>
      <td>
        <el-input
          placeholder="코드"
          type="text"
          v-model="code">
        </el-input>
      </td>
      <td>
        <el-button @click="act">{{isUpdate ? '수정' : '등록'}}</el-button>
      </td>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DepartmentInput',
  created () {
  },
  props: {
    department: {},
    isUpdate: Boolean
  },
  data () {
    return {
      parentCode: '',
      name: '',
      code: '',
      id: ''
    }
  },
  methods: {
    act () {
      if (!this.isUpdate) {
        this.$emit('insertDepartment', this.parentCode, this.name, this.code)
      } else {
        this.$emit('updateDepartment', this.id, this.name, this.code)
      }
      this.init()
    },
    setData () {
      if (this.isUpdate) {
        this.name = this.department.parent.name
        this.code = this.department.parent.code
        this.id = this.department.parent.id
        this.parentCode = this.department.parent.parent
      } else {
        this.name = ''
        this.code = ''
        this.parentCode = this.department.parent.code
      }
    },
    init () {
      this.name = ''
      this.code = ''
      this.parentCode = ''
    }
  }
}
</script>

<style scoped>

</style>
