<template>
  <div style="width:100%">
    <b-row class="confirmPass" align-h="center">
      <b-col sm="6" class="left">
        <b-row align-v="center" class="content-left">
          <b-col>
            <h2>Temukan developer berbakat &#38; terbaik di berbagai bidang keahlian</h2>
          </b-col>
        </b-row>
      </b-col>
      <b-col sm="6" class="right">
        <b-row class="content-right" align-v="center">
          <b-col>
            <div class="text-left p-3">
              <h3>
                <strong>Reset Password</strong>
              </h3>
              <p>You need to change your password to activate your account</p>
              <b-form style="color:grey;">
                <b-form-group label="Kata Sandi">
                  <b-input
                    type="password"
                    v-model="form.user_password"
                    placeholder="Masukkan kata sandi"
                  />
                </b-form-group>
                <b-form-group label="Confirmation new password">
                  <b-input
                    type="password"
                    v-model="form.user_confirmPass"
                    placeholder="Masukkan konfirmasi kata sandi"
                  />
                </b-form-group>

                <b-row>
                  <b-col>
                    <b-button
                      style="color:white"
                      block
                      variant="warning"
                      type="submit"
                      class="my-3"
                    >Reset password</b-button>
                  </b-col>
                </b-row>
              </b-form>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'ConfirmPass',
  data() {
    return {
      form: {
        user_password: '',
        user_confirmPass: ''
      }
    }
  },
  computed: {},
  methods: {}
}
</script>

<style scoped>
.confirmPass {
  text-align: center;
  width: 90%;
  margin: 30px 50px;
  height: 100vh;
  background-color: #f6f7f8;
}

.content-left {
  color: azure;
  height: 100%;
  background-image: linear-gradient(
      rgba(94, 80, 161, 0.5),
      rgba(94, 80, 161, 0.5)
    ),
    url('../../assets/bg-login2.jpg');
  background-size: cover;
}

.content-right {
  height: 100%;
}

.left {
  height: 100%;
  width: 100%;
}

.right {
  /* color: aqua; */
  height: 100%;
  width: 100%;
}

span {
  color: #fbb017;
}
</style>
