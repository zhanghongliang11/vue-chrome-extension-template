<template>
    <router-view></router-view>
</template>
<script>
 import './scss/base.scss'
 import './scss/skeleton.scss'
  export default {
    data: () => ({
    }),
    computed: { },
    created () { },
    mounted () {
     },
    methods: {
      tab () {
        chrome.tabs.create({ url: 'pages/app.html' })
      }
    }
  }
</script>
<style lang="scss">
  div {
    color: blue
  }
</style>