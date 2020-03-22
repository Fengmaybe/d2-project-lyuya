<template>
  <d2-container>
    <template slot="header">Page 2 header

      <p v-for="(item,index) in [1,2,3]" :key="index">我的内容{{item}}</p>
    </template>
    Hello World 2
     <p v-for="(item,index) in [1,2,3,3,3,3,3,3]" :key="index">主体滑动{{item}}</p>
  </d2-container>
</template>

<script>
export default {
  name: 'page2'
}
</script>
