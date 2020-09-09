<template>
  <nav-top></nav-top>
  <section class="grid grid-cols-12" style="margin-top: 8rem">
    <router-view></router-view>
  </section>
  <div class="grid grid-cols-12" style="bottom:0;">
    <div class="sm:col-span-12 col-span-3">
      <p class="flex hover:underline cursor-pointer" @click="scrollToTop">返回顶部</p>
    </div>
    <div class="sm:col-span-12 col-span-2"></div>
    <div class="sm:col-span-12 col-span-4">
      <nav class="flex flex-col">
      </nav>
    </div>
    <div class="sm:col-span-12 col-span-3">
    </div>

  </div>
</template>

<script>
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    NavTop: Nav
  },
  methods:{
    scrollToTop(){
      document.documentElement.scrollTop = 0;
    }
  }

}
</script>
