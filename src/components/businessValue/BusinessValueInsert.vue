<template>
  <div>
    <table class="center">
      <colgroup>
        <col width="10%"></col>
        <col width="85%"></col>
        <col width="5%"></col>
      </colgroup>
      <td>
        <el-input
        placeholder="Please Input"
        type="tel"
        v-model="seq">
        </el-input>
      </td>
      <td>
        <el-input
        placeholder="Please Input"
        type="text"
        v-model="name">
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
  name: 'BusinessValueInsert',
  created () {
    this.isUpdate = false
  },
  props: {
    businessValue: {},
    isUpdate: Boolean
  },
  data () {
    return {
      seq: '',
      name: ''
    }
  },
  methods: {
    setData () {
      this.seq = this.businessValue.seq
      this.name = this.businessValue.name
    },
    act () {
      if (this.businessValue === null) {
        this.$emit('insertValue', this.seq, this.name)
      } else {
        this.$emit('updateValue', this.businessValue.id, this.seq, this.name)
      }
      this.init()
    },
    init () {
      this.seq = ''
      this.name = ''
      this.businessValue = null
      this.isUpdate = false
    }
  }
}
</script>

<style scoped>
.center {
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>
