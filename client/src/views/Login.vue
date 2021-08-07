<template>
  <div class="login">
    <div class="login-card">
      <h1>Login</h1>
      <form>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Your Email"
            v-model="email"
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Your Password"
            v-model="password"
          />
        </div>
        <button @click.prevent="doLogin">Submit</button>
      </form>
      <p>
        Don't have an account?
        <span @click.prevent="changePageRegister">Register Here</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    changePageRegister() {
      this.$router.push({ path: "/register" });
    },
    doLogin() {
      const payload = {
        email: this.email,
        password: this.password
      };
      this.$store.dispatch("loginEvent", payload);
      this.email = "";
      this.password = "";
    }
  }
};
</script>

<style scoped>
.login {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 46);
}
.login-card {
  padding: 2rem;
  border-radius: 1rem;
  background-color: rgb(255, 255, 255);
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
}

.form-group label {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

h1 {
  margin-bottom: 2rem;
}

input {
  width: 20rem;
  height: 2.5rem;
  border: none;
  background-color: rgb(214, 214, 214);
  border-radius: 0.3rem;
  padding: 0 0.5rem;
  font-size: 1rem;
}

input:focus {
  outline: none;
}

button {
  margin: 1rem 0;
}
</style>
