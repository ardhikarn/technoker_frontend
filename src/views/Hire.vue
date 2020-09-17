<template>
  <div style="width:100%; background-color: #E5E5E5;">
    <Header
      class="py-4"
      style="background-color: white; box-shadow: 0px 10px 50px rgba(132, 132, 132, 0.25);"
    />
    <div class="page-container">
      <div class="profile-info">
        <div class="image"></div>
        <div style="padding:0 30px">
          <h4>Muhammad Naldi</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, adipisci nemo.</p>
          <p>Medan, North Sumatera</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quo voluptatum assumenda deserunt illo molestiae laboriosam minus incidunt. Maiores, voluptas.</p>
          <h4>Skill</h4>
          <div class="skills">
            <div class="skill">Javascript</div>
            <div class="skill">Vue</div>
            <div class="skill">Express</div>
            <div class="skill">Javascript</div>
            <div class="skill">Javascript</div>
            <div class="skill">Javascript</div>
          </div>
        </div>
      </div>
      <div class="hire-info">
        <h2>Hubungi Muhammad Naldi</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsum, doloremque dignissimos voluptatum quisquam quis!</p>
        <div>
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group id="input-group-3" label="Tujuan tentang pesan ini:" label-for="input-3">
              <b-form-select id="input-3" :options="foods" required></b-form-select>
            </b-form-group>
            <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
              <b-form-input id="input-2" v-model="form.name" required placeholder="Enter name"></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                required
                placeholder="Enter email"
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label="Phone Number:" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="form.name"
                required
                placeholder="Enter phone number"
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label="Deskripsi:" label-for="textarea">
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
  data() {
    return {
      form: {
        email: '',
        name: '',
        checked: []
      },
      foods: [
        { text: 'Project', value: null },
        'Carrots',
        'Beans',
        'Tomatoes',
        'Corn'
      ],
      show: true
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
.btn-hire {
  background-color: #fbb017;
  border-color: #fbb017;
}
.btn-hire:hover {
  background-color: #fbb017;
  border-color: #fbb017;
  color: #111;
}

.page-container {
  display: grid;
  margin: 70px auto;
  width: 85%;
  grid-template-columns: 1fr 1fr;
}

.profile-info {
  width: 400px;
  height: 700px;
  border-radius: 8px;
  background-color: white;
}

.image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: black;
  margin: 30px auto;
}

.hire-info {
  width: 700px;
  height: 1000px;
  border-radius: 8px;
}
/* Skills */
.skills {
  margin: 20px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;
  width: 300px;
}

.skill {
  background: rgba(251, 176, 23, 0.6);
  border: 1px solid #fbb017;
  border-radius: 4px;
  text-align: center;
  padding: 3px 15px;
  color: #fbb017;
  margin: 0 5px 5px 0px;
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
