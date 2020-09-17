<template>
  <div style="width:100%">
    <b-row class="registerC" align-h="center">
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
                <strong>Halo, Pewpeople</strong>
              </h3>
              <h5>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio,
                tempore.
              </h5>
              <b-form style="color:grey;">
                <b-form-group label="Nama">
                  <b-input
                    type="text"
                    v-model="form.user_name"
                    placeholder="Masukkan nama panjang"
                  />
                </b-form-group>
                <b-form-group label="Email">
                  <b-input
                    type="email"
                    v-model="form.user_email"
                    placeholder="Masukkan alamat email"
                  />
                </b-form-group>
                <b-form-group label="No. Handphone">
                  <b-input
                    type="number"
                    v-model="form.user_phone"
                    placeholder="Masukkan nomer handphone"
                  />
                </b-form-group>
                <b-form-group label="Password">
                  <b-input
                    type="password"
                    v-model="form.user_password"
                    placeholder="Masukkan kata sandi"
                  />
                </b-form-group>
                <b-form-group label="Konfirmasi kata sandi">
                  <b-input
                    type="password"
                    v-model="form.user_confirmPassword"
                    placeholder="Masukkan konfirmasi kata sandi"
                  />
                </b-form-group>
                <b-row>
                  <b-col>
                    <b-button
                      block
                      style="color:white;"
                      variant="warning"
                      type="submit"
                      class="my-3"
                    >Masuk</b-button>
                  </b-col>
                </b-row>
                <b-row class="text-center">
                  <b-col>
                    Anda sudah punya akun?
                    <router-link to="/login">
                      <span>Masuk disini</span>
                    </router-link>
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
  name: 'RegisterC',
  data() {
    return {
      form: {
        user_name: '',
        user_email: '',
        user_password: '',
        user_phone: '',
        user_confirmPassword: ''
      }
    }
  },
  computed: {},
  methods: {}
}
</script>

<style scoped>
.registerC {
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
