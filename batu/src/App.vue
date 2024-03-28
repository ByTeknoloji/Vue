<template>
  <body
    class="bg-white h-[100svh] flex flex-col dark:bg-gray-800 dark:text-white"
  >
  
    <Nav />
    <Sidebar />
    <home-view />
    <h1 class="text-red-500">asdasd</h1>
    <router-view />
  </body>
</template>
<script>
import Nav from "./components/Nav";
import Sidebar from "./components/Side-bar.vue";

export default {
  name: "App",
  components: {
    Nav,
    Sidebar,
  },
  methods: {},
};
</script>

<style></style>
