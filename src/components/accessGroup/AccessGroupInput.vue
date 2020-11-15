<template>
  <div class="center">
    <table >
      <colgroup>
        <col width="20%"></col>
        <col width="80%"></col>
      </colgroup>
      <td>
        <el-input
          placeholder="그룹명"
          type="tel"
          v-model="name">
        </el-input>
      </td>
      <td>
        <el-input
          placeholder="그룹설명"
          type="text"
          v-model="memo">
        </el-input>
      </td>
    </table>

    <el-tree
      :data="data"
      show-checkbox
      node-key="id"
      :default-expanded-keys="[1, 2, 3, 4]"
      :default-checked-keys="[]"
      :props="defaultProps">
    </el-tree>
  </div>
</template>

<script>
export default {
  name: 'AccessGroupInput',
  data () {
    return {
      name: '',
      memo: '',
      data: [{
        id: 1,
        label: '전자우편',
        children: [{
          id: 9,
          label: '전자우편'
        }, {
          id: 10,
          label: 'SMS'
        }, {
          id: 11,
          label: '쪽지'
        }]
      }, {
        id: 2,
        label: '일정관리',
        children: [{
          id: 5,
          label: '사내일정'
        }, {
          id: 6,
          label: '부서일정'
        }, {
          id: 12,
          label: '주소록'
        }, {
          id: 13,
          label: '회의실 예약'
        }, {
          id: 14,
          label: '방문자 예약'
        }
        ]
      }, {
        id: 3,
        label: '업무관리',
        children: [{
          id: 7,
          label: '공지사항'
        }, {
          id: 8,
          label: '근태관리'
        }, {
          id: 8,
          label: '사내정보'
        }, {
          id: 8,
          label: '프로젝트'
        }, {
          id: 8,
          label: '업무보고서'
        }, {
          id: 8,
          label: '업무지시서'
        }
        ]
      }, {
        id: 1,
        label: '전자결재',
        children: [{
          id: 9,
          label: '일반'
        }, {
          id: 10,
          label: '대외문'
        }, {
          id: 11,
          label: '지출결의서'
        }, {
          id: 11,
          label: '공문'
        }]
      }, {
        id: 1,
        label: '지식관리'
      }, {
        id: 1,
        label: '커뮤니티'
      }, {
        id: 1,
        label: '제안관리'
      }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  }
}
</script>

<style scoped>

</style>
