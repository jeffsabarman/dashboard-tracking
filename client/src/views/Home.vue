<template>
  <div class="home">
    <div class="two-col">
      <Sidebar></Sidebar>
      <div class="dashboard-side">
        <h1>INI dashboard</h1>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Sidebar from "../components/Sidebar.vue";

export default {
  name: "Home",
  components: {
    Sidebar
  }
};
</script>

<style scoped>
.two-col {
  display: flex;
}
</style>
