<template>
  <div>
    <div>
      <h1>首页</h1>
    </div>
    <van-tabbar v-model="active">
    <van-tabbar-item>
      <span>首页</span>
      <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? icon.fangzi : icon.fangzi_action"
      >
    </van-tabbar-item>
    <van-tabbar-item to="borrow">
      <span>借还</span>
      <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? icon.lubiao : icon.lubiao_action"
      >
    </van-tabbar-item>
    <van-tabbar-item to="community">
      <span>社区</span >
      <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? icon.shuaxin : icon.shuaxin_action"
      >
    </van-tabbar-item>
    <van-tabbar-item to="personage">
      <span>我的</span>
      <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? icon.wode : icon.wode_action"
      >
    </van-tabbar-item>
  </van-tabbar>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        home:'/home',
        borrow:'/borrow',
        community:'/community',
        personage:'/personage',
        active: 0,
        icon: {
          fangzi: '../static/icon/foot/fangzi.png',
          fangzi_action: '../static/icon/foot_action/fangzi.png',
          lubiao: '../static/icon/foot/lubiao.png',
          lubiao_action: '../static/icon/foot_action/lubiao.png',
          shuaxin:'../static/icon/foot/shuaxin.png',
          shuaxin_action:'../static/icon/foot_action/shuaxin.png',
          wode:'../static/icon/foot/wode.png',
          wode_action:'../../static/icon/foot_action/wode.png'
        }
      }
    }
  }
</script>

<style scoped>
  span{

  }
</style>
