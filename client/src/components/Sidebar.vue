<template>
  <div class="sidebar">
    <div class="top-side">
      <h1>TrackApp</h1>
      <div class="home-nav">
        <img
          src="https://image.flaticon.com/icons/png/512/3011/3011069.png"
          alt="home"
        />
        <span>Home</span>
      </div>
    </div>
    <div class="bottom-side">
      <div class="logout-nav">
        <img
          src="https://image.flaticon.com/icons/png/512/1716/1716282.png"
          alt="logout"
        />
        <span @click.prevent="doLogout">Logout</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  methods: {
    doLogout() {
      this.$store.dispatch("logoutEvent");
    }
  }
};
</script>

<style scoped>
.sidebar {
  background-color: rgb(0, 0, 46);
  height: 100vh;
  padding: 2rem 2rem 5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0 1rem 1rem 0;
}

h1 {
  color: white;
  margin-bottom: 3rem;
}

.home-nav span,
.logout-nav span {
  color: rgb(189, 189, 255);
  font-size: 1.2rem;
}

.home-nav,
.logout-nav {
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;
}
</style>
