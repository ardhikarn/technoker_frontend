<template>
  <div style="width:100%; background-color: #E5E5E5; position:relative;">
    <Header
      class="py-4"
      style="background-color: white; box-shadow: 0px 10px 50px rgba(132, 132, 132, 0.25); position:relative; z-index:5555;"
    />
    <div class="magenta"></div>
    <div class="page-container">
      <div class="profile-info">
        <div class="image"></div>
        <div style="padding:0 30px">
          <h4>Muhammad Naldi</h4>
          <h6>Web Developer</h6>
          <p style="color:grey;">
            <span>
              <img src="../assets/img/location.png" alt />
            </span> Medan, North Sumatera
          </p>
          <p style="color:grey;">freelancer</p>
        </div>
        <button class="btn1" block>Simpan</button>
        <button class="btn2" block>Batal</button>
      </div>
      <div class="hire-info">
        <div>
          <b-card header="Data Diri">
            <b-card-text>
              <b-form @submit="onSubmit" @reset="onReset" v-if="show" style="color:grey;">
                <b-form-group id="input-group-2" label="Nama Lengkap" label-for="input-2">
                  <b-form-input
                    type="text"
                    id="input-2"
                    v-model="form.user_name"
                    required
                    placeholder="Enter name"
                  ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-1" label="Job Desk" label-for="input-1">
                  <b-form-input
                    id="input-1"
                    v-model="form.user_jobdesk"
                    type="text"
                    required
                    placeholder="Masukkan Job desk"
                  ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-2" label="Domisili" label-for="input-2">
                  <b-form-input
                    type="text"
                    id="input-2"
                    v-model="form.user_domisili"
                    required
                    placeholder="Masukkan Domisili"
                  ></b-form-input>
                </b-form-group>
                <b-form-group label="Tempat Kerja">
                  <b-form-input
                    type="text"
                    id="input-2"
                    v-model="form.user_jobPlace"
                    required
                    placeholder="Masukkan Tempat Kerja"
                  ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-2" label="Deskripsi Singkat" label-for="textarea">
                  <b-form-textarea
                    id="textarea"
                    v-model="text"
                    placeholder="Jelaskan lebih detail"
                    rows="3"
                    max-rows="6"
                  ></b-form-textarea>
                </b-form-group>
              </b-form>
            </b-card-text>
          </b-card>
        </div>
        <!-- ========================================================= -->
        <div class="mt-3">
          <b-card header="Skill">
            <b-card-text>
              <b-form @submit="onSubmit" @reset="onReset" v-if="show" style="color:grey;">
                <b-form-group id="input-group-2" label="Nama Lengkap" label-for="input-2">
                  <b-form-input
                    type="text"
                    id="input-2"
                    v-model="form.user_name"
                    required
                    placeholder="Enter name"
                  ></b-form-input>
                </b-form-group>

                <b-button block class="mt-5 btn-hire">Hire</b-button>
              </b-form>
            </b-card-text>
          </b-card>
        </div>
        <!-- =================================================================== -->
        <div class="mt-3">
          <b-card header="Pengalaman Kerja">
            <b-card-text>
              <b-form @submit="onSubmit" @reset="onReset" v-if="show" style="color:grey;">
                <b-form-group id="input-group-2" label="Nama Lengkap" label-for="input-2">
                  <b-form-input
                    type="text"
                    id="input-2"
                    v-model="form.user_name"
                    required
                    placeholder="Enter name"
                  ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-1" label="Job Desk" label-for="input-1">
                  <b-form-input
                    id="input-1"
                    v-model="form.user_jobdesk"
                    type="text"
                    required
                    placeholder="Masukkan Job desk"
                  ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-2" label="Domisili" label-for="input-2">
                  <b-form-input
                    type="text"
                    id="input-2"
                    v-model="form.user_domisili"
                    required
                    placeholder="Masukkan Domisili"
                  ></b-form-input>
                </b-form-group>
                <b-form-group label="Tempat Kerja">
                  <b-form-input
                    type="text"
                    id="input-2"
                    v-model="form.user_jobPlace"
                    required
                    placeholder="Masukkan Tempat Kerja"
                  ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-2" label="Deskripsi Singkat" label-for="textarea">
                  <b-form-textarea
                    id="textarea"
                    v-model="text"
                    placeholder="Jelaskan lebih detail"
                    rows="3"
                    max-rows="6"
                  ></b-form-textarea>
                </b-form-group>
                <b-button block class="mt-5 btn-hire">Hire</b-button>
              </b-form>
            </b-card-text>
          </b-card>
        </div>
        <!-- ============================================================================================= -->
        <div class="mt-3">
          <b-card header="Portofolio">
            <b-card-text>
              <b-form @submit="onSubmit" @reset="onReset" v-if="show" style="color:grey;">
                <b-form-group id="input-group-2" label="Nama Lengkap" label-for="input-2">
                  <b-form-input
                    type="text"
                    id="input-2"
                    v-model="form.user_name"
                    required
                    placeholder="Enter name"
                  ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-1" label="Job Desk" label-for="input-1">
                  <b-form-input
                    id="input-1"
                    v-model="form.user_jobdesk"
                    type="text"
                    required
                    placeholder="Masukkan Job desk"
                  ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-2" label="Domisili" label-for="input-2">
                  <b-form-input
                    type="text"
                    id="input-2"
                    v-model="form.user_domisili"
                    required
                    placeholder="Masukkan Domisili"
                  ></b-form-input>
                </b-form-group>
                <b-form-group label="Tempat Kerja">
                  <b-form-input
                    type="text"
                    id="input-2"
                    v-model="form.user_jobPlace"
                    required
                    placeholder="Masukkan Tempat Kerja"
                  ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-2" label="Deskripsi Singkat" label-for="textarea">
                  <b-form-textarea
                    id="textarea"
                    v-model="text"
                    placeholder="Jelaskan lebih detail"
                    rows="3"
                    max-rows="6"
                  ></b-form-textarea>
                </b-form-group>
                <b-button block class="mt-5 btn-hire">Hire</b-button>
              </b-form>
            </b-card-text>
          </b-card>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from '../components/HeaderLogin'
import Footer from '../components/Footer'
export default {
  components: {
    Header,
    Footer
  },
  name: 'EditProfileR',
  data() {
    return {
      form: {
        email: '',
        name: '',
        checked: []
      },
      show: true
    }
  }
}
</script>

<style  scoped>
.magenta {
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  height: 250px;
  background-color: #5e50a1;
  z-index: 0;
}

.page-container {
  position: relative;
  top: -250px;
  display: grid;
  margin: 70px auto;
  width: 85%;
  grid-template-columns: 1fr 1fr;
  z-index: 1;
}

.profile-info {
  width: 400px;
  height: 400px;
  border-radius: 8px;
  background-color: white;
  position: relative;
  z-index: 2;
}

.hire-info {
  /* background-color: white; */
  border-radius: 8px;
  width: 700px;
  margin-bottom: -250px;
  position: relative;
  z-index: 2;
}

.image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: black;
  margin: 30px auto;
}

.btn1 {
  padding: 5px 0px;
  font-weight: bold;
  background: #5e50a1;
  width: 100%;
  color: white;
  border-radius: 4px;
  border: 1px solid #5e50a1;
  margin-bottom: 10px;
}
.btn1:hover {
  font-weight: bold;
  background-color: white;
  color: #5e50a1;
}

.btn2 {
  padding: 5px 0px;
  font-weight: bold;
  color: #5e50a1;
  width: 100%;
  background: white;
  border: 1px solid #5e50a1;
  border-radius: 4px;
}

.btn2:hover {
  font-weight: bold;
  background-color: #5e50a1;
  color: white;
}
@media (max-width: 700px) {
  .page-container {
    grid-template-columns: 1fr;
  }

  .profile-info {
    width: 375px;
  }

  .hire-info {
    margin-top: 50px;
    width: 375px;
    margin-bottom: -250px;
  }
}
</style>
