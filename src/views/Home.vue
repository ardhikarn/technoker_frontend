<template>
  <div style="background-color: #E5E5E5">
    <header class="header-mobile">
      <div class="header-m-t">
        <h5>Mon, 20 Mei 2020</h5>
        <h2>Hi!, Naldi</h2>
      </div>
      <img src="../assets/img/notif.png" alt />
    </header>
    <Header class="py-3" style="background-color: white; " />
    <TopJobs />
    <b-container>
      <div class="form pt-3 my-5">
        <div class="search-name">
          <b-form-input id="input-1" v-model="search" required placeholder="Search for any skill"></b-form-input>
        </div>
        <div class="img-search">
          <img src="../assets/img/search.png" alt />
        </div>
        <div class="slash"></div>
        <div class="form-sort">
          <b-form-group id="input-group-3">
            <b-form-select id="input-3" v-model="sort" :options="sortBy" required></b-form-select>
          </b-form-group>
        </div>
        <div>
          <b-button class="btn-search">Search</b-button>
        </div>
      </div>
    </b-container>
    <b-container>
      <div class="worker mt-5">
        <div class="workers">
          <div class="profile">
            <div class="profile-img"></div>
            <div class="profile-details">
              <h4>Tommy Shelby</h4>
              <p style="color: #9EA0A5;">Web Developer</p>
              <p style="color: #9EA0A5; margin-top: -10px">Location</p>
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
          <div style="position: relative">
            <b-button class="btn-profile">See Profile</b-button>
          </div>
        </div>
        <hr style="color:#9ea0a5" />
        <div class="workers">
          <div class="profile">
            <div class="profile-img"></div>
            <div class="profile-details">
              <h4>Rick Sanchez</h4>
              <p style="color: #9EA0A5;">Web Developer</p>
              <p style="color: #9EA0A5; margin-top: -10px">Location</p>
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
          <div style="position: relative">
            <b-button class="btn-profile">See Profile</b-button>
          </div>
        </div>
        <hr style="color:#9ea0a5" />
        <div class="workers">
          <div class="profile">
            <div class="profile-img"></div>
            <div class="profile-details">
              <h4>Muhammad Naldi</h4>
              <p style="color: #9EA0A5;">Web Developer</p>
              <p style="color: #9EA0A5; margin-top: -10px">Location</p>
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
          <div style="position: relative">
            <b-button class="btn-profile">See Profile</b-button>
          </div>
        </div>
      </div>
    </b-container>
    <div class="my-5">
      <b-pagination class="pagination-btn" align="center" v-model="currentPage" :total-rows="rows"></b-pagination>
    </div>
    <b-container></b-container>
    <Footer />
    <footer class="footer-nav">
      <div class="navs">
        <img src="../assets/img/mail.png" alt />
      </div>
      <div class="navs">
        <img src="../assets/img/search.png" alt />
      </div>
      <div class="navs">
        <img src="../assets/img/notif.png" alt />
      </div>
      <div class="navs">
        <img src="../assets/img/mail.png" alt />
      </div>
    </footer>
  </div>
</template>

<script>
import Header from '../components/HeaderLogin.vue'
import TopJobs from '../components/HeaderTopJobs.vue'
import Footer from '../components/Footer'
export default {
  components: {
    Header,
    TopJobs,
    Footer
  },
  data() {
    return {
      search: '',
      sort: null,
      sortBy: [
        { text: 'Category', value: null },
        'Category',
        'Skills',
        'Tomatoes',
        'Corn'
      ],
      show: true,
      rows: 100,
      currentPage: 3
    }
  },
  methods: {
    event(event) {
      console.log(event)
    }
  }
}
</script>

<style scoped>
.form {
  display: flex;
  box-shadow: 0px 1px 20px rgba(197, 197, 197, 0.25);
}

.container {
  background: #ffffff;
  box-shadow: 0px 1px 20px rgba(197, 197, 197, 0.25);
  border-radius: 8px;
}

.search-name {
  width: 800px;
  color: #9ea0a5;
}

.search-name input {
  border-color: white;
}

.img-search {
  margin: 5px 10px 0 10px;
}

.slash {
  width: 1px;
  background-color: #9ea0a5;
  margin-top: -12px;
}

.form-sort {
  width: 200px;
}

.form-sort select {
  color: #9ea0a5;
  border-color: white;
}

.btn-search {
  background-color: #5e50a1;
  border-radius: 4px;
  width: 121px;
}
.btn-search:hover {
  background-color: #fbb017;
  border-color: #fbb017;
}
.btn-profile {
  background-color: #5e50a1;
  border-radius: 4px;
  width: 120px;
  height: 40px;
  position: absolute;
  top: 100px;
  right: 40px;
}
.btn-profile:hover {
  background-color: #fbb017;
  border-color: #fbb017;
}

.worker {
  max-width: 100%;
}

/* WORKERS */
.workers {
  width: 100%;
  height: 250px;
  background-color: white;
  display: grid;
  grid-template-columns: 1fr 1fr;
  box-shadow: 0px 1px 20px rgba(197, 197, 197, 0.25);
}

.profile {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.profile-img {
  width: 130px;
  height: 130px;
  margin: 60px 40px;
  border-radius: 50%;
  background-color: #000;
}

.profile-details {
  margin: 30px 0;
}

.skills {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* margin-right: 0 5px 10px 5px; */
  width: 300px;
}

.skill {
  background: rgba(251, 176, 23, 0.6);
  border: 1px solid #fbb017;
  border-radius: 4px;
  text-align: center;
  padding: 3px 15px;
  color: white;
  margin: 0 5px 5px 0px;
}

.header-mobile {
  width: 100%;
  height: 174px;
  background-color: #5e50a1;
  border-radius: 0px 0px 20px 0px;
  position: relative;
  display: none;
}

.header-mobile img {
  position: absolute;
  width: 25px;
  height: 23px;
  right: 20px;
  top: 72px;
}

.header-m-t {
  position: absolute;
  left: 20px;
  top: 72px;
  color: #ffffff;
}

.footer-nav {
  width: 100%;
  height: 80px;
  background: #ffffff;
  box-shadow: 0px -6px 20px rgba(175, 175, 175, 0.25);
  border-radius: 30px 30px 0px 0px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  display: none;
}

.navs {
  position: relative;
}

.navs img {
  position: absolute;
  top: 30px;
  left: 41px;
}
@media (max-width: 700px) {
  .footer-nav {
    display: grid;
  }

  .header-mobile {
    display: block;
  }
  .btn-profile {
    display: none;
  }
  .container {
    width: 375px;
  }
  .profile {
    width: 375px;
    grid-template-columns: 1fr;
    height: 400px;
  }

  .profile-details {
    margin: 20px 0;
  }
  .profile-img {
    width: 60px;
    height: 60px;
    margin-bottom: -50px;
    display: none;
  }

  .form {
    display: none;
  }
}
</style>
