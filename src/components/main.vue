<template>

  <div>
    <el-button @click="setViewType('department')">부서관리</el-button>
    <el-button @click="setValueType('SPOT')">직위관리</el-button>
    <el-button @click="setValueType('POSITION')">직책관리</el-button>
    <el-button>사원정보관리</el-button>
    <el-button @click="setViewType('accessGroup')">접근권한그룹</el-button>

    <BusinessValueTable :valueType.sync="valueType" ref="businessValue" v-if="viewType === 'businessValue'"/>
    <DepartmentList v-if="viewType === 'department'"/>
    <AccessGroupList v-if="viewType === 'accessGroup'"/>
  </div>

</template>

<script>
import BusinessValueTable from './businessValue/BusinessValueTable'
import DepartmentList from './department/DepartmentList'
import AccessGroupList from './accessGroup/AccessGroupList'
export default {
  name: 'main',
  data () {
    return {
      valueType: 'SPOT',
      viewType: 'department'
    }
  },
  methods: {
    setViewType (type) {
      this.viewType = type
    },
    setValueType (type) {
      this.viewType = 'businessValue'
      this.valueType = type
      setTimeout(() => {
        this.$refs.businessValue.listData()
      }, 100)
    }
  },
  components: {AccessGroupList, DepartmentList, BusinessValueTable}
}
</script>

<style scoped>

</style>
