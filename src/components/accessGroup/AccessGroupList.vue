<template>
  <div>
    <el-table
      :data="AccessGroups" style="width: 50%;" class="center">
      <el-table-column
        prop="seq"
        label="순서"
        width="180" class="centerText">
      </el-table-column>
      <el-table-column
        prop="name"
        label="그룹명"
        width="450">
      </el-table-column>
      <el-table-column
        prop="name"
        label="그룹설명"
        width="450">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="관리"
        width="120">
        <template slot-scope="scope">
          <el-button @click.native.prevent="setValue(scope.$index)" type="text" size="small">Edit</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="centerButton">
      <el-button style="float: right">추가</el-button>
    </div>

    <AccessGroupInput/>

  </div>
</template>

<script>
import serverSv from '../../common/sv/serverSv'
import AccessGroupInput from './AccessGroupInput'

export default {
  name: 'AccessGroupList',
  components: {AccessGroupInput},
  created () {
    this.listData()
  },
  data () {
    return {
      AccessGroups: [],
      AccessGroup: {},
      searchData: {
      },
      isShow: false
    }
  },
  methods: {
    async listData () {
      this.isShow = false
      const res = await serverSv.post('/accessGroup/list', this.searchData)
      this.AccessGroups = res.data.data
    },
    setValue () {
    }
  }
}
</script>

<style scoped>
.center {
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  width: 50%;
}
.centerButton {
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  width: 50%;
}
</style>
