<template>
  <div class="register">
    <div class="register-card">
      <h1>Register</h1>
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
        <button @click.prevent="doRegister">Submit</button>
      </form>
      <p>
        Already have an account?
        <span @click.prevent="changePageLogin">Login Here</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    changePageLogin() {
      this.$router.push({ path: "/login" });
    },
    doRegister() {
      const payload = {
        email: this.email,
        password: this.password
      };
      // console.log(payload, "<< payload in register");
      this.$store.dispatch("registerEvent", payload);
      this.email = "";
      this.password = "";
    }
  }
};
</script>

<style scoped>
.register {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 46);
}
.register-card {
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
}</style
>>
