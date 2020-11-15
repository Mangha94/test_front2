<template>

  <div>
    <el-button>부서관리</el-button>
    <el-button @click="setValueType('SPOT')">직위관리</el-button>
    <el-button @click="setValueType('POSITION')">직책관리</el-button>
    <el-button>사원정보관리</el-button>
    <el-button>접근권한그룹</el-button>

    <BusinessValueTable :valueType.sync="valueType" ref="businessValue"/>
  </div>

</template>

<script>
import BusinessValueTable from './businessValue/BusinessValueTable'
export default {
  name: 'main',
  data () {
    return {
      valueType: 'SPOT'
    }
  },
  methods: {
    setValueType (type) {
      this.valueType = type
      setTimeout(() => {
        this.$refs.businessValue.listData()
      }, 100)
    }
  },
  components: {BusinessValueTable}
}
</script>

<style scoped>

</style>
