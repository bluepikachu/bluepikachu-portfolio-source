<template>
  <div class="grid grid-cols-12">
    <div class="sm:col-span-12 col-span-3">
      <router-link to="/" class="flex hover:underline cursor-pointer"
        >李伟伟作品集<br/>Bluepikachu‘s Portfolio</router-link
      >
    </div>
    <div class="sm:col-span-12 col-span-2"></div>
    <div class="sm:col-span-12 col-span-4">
      <nav class="flex flex-col">
        <router-link
          :to="nav.path"
          class="flex hover:underline cursor-pointer"
          v-for="nav in navs"
          :key="nav.name"
          >{{ nav.name }}</router-link
        >
      </nav>
    </div>
    <div class="sm:col-span-12 col-span-3">
      <router-link to="/information" class="flex hover:underline cursor-pointer"
        >简介及简历</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-top",
  setup() {
    const navs = [
      { name: "东田整合平台", path: "/works/DTPlatform"},
      { name: "点亮微学堂", path: "/works/MicroClass"},
      { name: "东田数字校园", path: "/works/DigitalCampus"},
      { name: "人教乐学", path: "/works/RJLX"},
      { name: "个人开发", path: "/works/Develop"},
      { name: "其他项目", path: "/works/Others"},
      { name: "动效", path: "/works/Motion"},
      { name: "插画", path: "/works/Illustrations"},
      { name: "练习", path: "/works/Practice"},
      { name: "摄影", path: "/works/Photography"},
    ];

    return {
      navs,
    };
  },
};
</script>

<style lang="postcss" scoped>
.router-link-exact-active {
    color: #db4d52;
}
</style>
