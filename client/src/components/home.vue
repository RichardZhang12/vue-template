<template>
  <div>
    <el-button @click="click1">button1</el-button>
    <el-button @click="click2">button2</el-button>
    <!-- <div>
      <i class="el-icon-edit"></i>
    </div>
    <div>
      <i class="el-icon-share"></i>
    </div>
    <div>
      <i class="el-icon-delete"></i>
    </div> -->
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
  </div>
</template>

<script>
import { getList, ModifyList } from '../../api/business'
export default {
  name: 'home',
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  data() {
    return {
      payload: {
        amount: 101
      }
    }
  },
  methods: {
    renderList() {
      getList().then(res => {
        console.log(res, 11111);
      }).catch(err => {
        console.log(err)
      });
      ModifyList().then(res => {
        console.log('xiugai')
      }).catch(err => {
        console.log(err);
      })
    },
    click1() {
      // this.$store.commit("increment", this.payload)
    },
    click2() {
      // this.$store.dispatch('increment', { amount: 1 });
      // this.$store.dispatch('promiseFoo').then(state => {
      //   console.log(state.count, 'state')
      // })
    },
    click3() {
      console.log(item)
    }
  },
  created() {
    this.renderList();
  }
}
</script>

<style lang="scss" scoped>
</style>