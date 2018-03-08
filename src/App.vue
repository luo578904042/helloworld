<template>
  <div id="app">
    <!-- <m-header></m-header> -->
    <MHeader></MHeader>
  </div>
</template>

<script type="text/ecmascript-6">
import MHeader from 'components/m-header/m-header';

export default {
  name: 'App',
  components:{// 注册组件
    MHeader
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
