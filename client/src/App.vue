<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

button {
  border: none;
  border-radius: 1.5rem;
  background: none;
  width: 20rem;
  background: rgb(0, 177, 9);
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: white;
}

button:hover,
span:hover {
  cursor: pointer;
}

span {
  color: rgb(50, 115, 255);
  font-weight: bold;
}

.swal2-popup {
  font-family: Avenir, Helvetica, Arial, sans-serif !important;
}
</style>
