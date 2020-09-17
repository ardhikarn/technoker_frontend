<template>
  <b-container class="nav-grid py-4">
    <div>
      <img src="../assets/img/logo.png" alt />
    </div>
    <div class="button-login-register text-right">
      <router-link to="/login">
        <b-button class="login-btn mx-4">Login</b-button>
      </router-link>
      <router-link to="/login">
        <b-button class="register-btn">Register</b-button>
      </router-link>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
  computed: {}
}
</script>

<style scoped>
.nav-grid {
  display: flex;
  justify-content: space-between;
}

.button-login-register {
  display: flex;
  justify-content: space-evenly;
}

.login-btn {
  background-color: white;
  color: #5e50a1;
  border-color: #5e50a1;
}

.register-btn {
  background-color: #5e50a1;
  border-radius: 4px;
}

.login-btn:hover {
  background-color: #fbb017;
  border-color: #fbb017;
}

.register-btn:hover {
  background-color: #fbb017;
  border-color: #fbb017;
}
</style>
