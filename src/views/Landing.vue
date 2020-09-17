<template>
  <div>
    <HeaderRegister />
    <b-container>
      <b-jumbotron class="mb-0 bg-white py-5">
        <b-row class="align-items-center">
          <b-col cols="12" xl="6">
            <h1 class="title-banner m-0">Talenta Terbaik Negeri Untuk Perubahan Revolusi 4.0</h1>
            <p
              class="my-4"
            >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro delectus inventore, necessitatibus cupiditate odit doloremque.</p>
            <router-link to="/login">
              <b-button class="py-3">Mulai Dari Sekarang</b-button>
            </router-link>
          </b-col>
          <b-col cols="12" xl="6" class="text-center">
            <img src="@/assets/img1.png" class="landing-img" />
          </b-col>
        </b-row>
      </b-jumbotron>
      <b-jumbotron class="mb-0 bg-white py-5">
        <b-row class="align-items-center">
          <b-col cols="12" xl="6" class="text-center">
            <img src="@/assets/img2.png" class="landing-img" />
          </b-col>
          <b-col cols="12" xl="6">
            <h2 class="mb-3">Kenapa Harus Mencari Tallent di Peworld ?</h2>
            <b-row>
              <b-col cols="1">
                <b-icon icon="check-circle-fill" class="h4 my-3 check1"></b-icon>
              </b-col>
              <b-col cols="11" class="align-self-center">Lorem ipsum dolor sit amet.</b-col>
              <b-col cols="1">
                <b-icon icon="check-circle-fill" class="h4 my-3 check1"></b-icon>
              </b-col>
              <b-col cols="11" class="align-self-center">Lorem ipsum dolor sit amet.</b-col>
              <b-col cols="1">
                <b-icon icon="check-circle-fill" class="h4 my-3 check1"></b-icon>
              </b-col>
              <b-col cols="11" class="align-self-center">Lorem ipsum dolor sit amet.</b-col>
              <b-col cols="1">
                <b-icon icon="check-circle-fill" class="h4 my-3 check1"></b-icon>
              </b-col>
              <b-col cols="11" class="align-self-center">Lorem ipsum dolor sit amet.</b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-jumbotron>
      <b-jumbotron class="mb-0 bg-white py-5">
        <b-row class="align-items-center">
          <b-col cols="12" xl="6" class="pl-5 pr-0">
            <h2 class="mb-3">Skill Tallent</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, porro consequatur nulla unde sit quasi?</p>
            <b-row>
              <b-col cols="1">
                <b-icon icon="check-circle-fill" class="h4 my-3 check2"></b-icon>
              </b-col>
              <b-col cols="5" class="align-self-center">Java</b-col>
              <b-col cols="1">
                <b-icon icon="check-circle-fill" class="h4 my-3 check2"></b-icon>
              </b-col>
              <b-col cols="5" class="align-self-center">Golang</b-col>
              <b-col cols="1">
                <b-icon icon="check-circle-fill" class="h4 my-3 check2"></b-icon>
              </b-col>
              <b-col cols="5" class="align-self-center">Kotlin</b-col>
              <b-col cols="1">
                <b-icon icon="check-circle-fill" class="h4 my-3 check2"></b-icon>
              </b-col>
              <b-col cols="5" class="align-self-center">C++</b-col>
              <b-col cols="1">
                <b-icon icon="check-circle-fill" class="h4 my-3 check2"></b-icon>
              </b-col>
              <b-col cols="5" class="align-self-center">PHP</b-col>
              <b-col cols="1">
                <b-icon icon="check-circle-fill" class="h4 my-3 check2"></b-icon>
              </b-col>
              <b-col cols="5" class="align-self-center">Ruby</b-col>
              <b-col cols="1">
                <b-icon icon="check-circle-fill" class="h4 my-3 check2"></b-icon>
              </b-col>
              <b-col cols="5" class="align-self-center">Javascript</b-col>
              <b-col cols="1">
                <b-icon icon="check-circle-fill" class="h4 my-3 check2"></b-icon>
              </b-col>
              <b-col cols="5" class="align-self-center">10+ Bahasa lainnya</b-col>
            </b-row>
          </b-col>
          <b-col cols="12" xl="6" class="text-center">
            <img src="@/assets/img3.png" class="landing-img" />
          </b-col>
        </b-row>
      </b-jumbotron>
    </b-container>
    <b-jumbotron bg-variant="light">
      <b-container>
        <b-row>
          <b-col cols="12" class="text-center mb-4">
            <h2>Their Opinion About Peworld</h2>
          </b-col>
          <b-col cols="12" xl="4" class="text-center my-2">
            <b-card class="landing-card border-light mx-auto" style="max-width: 19rem;">
              <b-avatar size="6rem" class="mb-1 opinion-people">
                <img src="@/assets/opinion1.jpg" style="width: 5.5rem" class="mt-4" />
              </b-avatar>
              <b-card-title class="mb-0">Harry Styles</b-card-title>
              <small class="text-muted">Web Developer</small>
              <b-card-text
                class="mt-2 px-4"
              >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ea nisi magni accusamus. Saepe sequi, culpa suscipit aut nam doloremque doloribus? Soluta laboriosam vitae odit!</b-card-text>
            </b-card>
          </b-col>
          <b-col cols="12" xl="4" class="text-center my-2">
            <b-card class="landing-card border-light mx-auto" style="max-width: 19rem;">
              <b-avatar size="6rem" class="mb-1 opinion-people">
                <img src="@/assets/opinion2.jpg" style="width: 5.5rem" class="mt-4" />
              </b-avatar>
              <b-card-title class="mb-0">Harry Styles</b-card-title>
              <small class="text-muted">Web Developer</small>
              <b-card-text
                class="mt-2 px-4"
              >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ea nisi magni accusamus. Saepe sequi, culpa suscipit aut nam doloremque doloribus? Soluta laboriosam vitae odit!</b-card-text>
            </b-card>
          </b-col>
          <b-col cols="12" xl="4" class="text-center my-2">
            <b-card class="landing-card border-light mx-auto" style="max-width: 19rem;">
              <b-avatar size="6rem" class="mb-1 opinion-people">
                <img src="@/assets/opinion3.jpg" style="width: 5.5rem" class="mt-4" />
              </b-avatar>
              <b-card-title class="mb-0">Harry Styles</b-card-title>
              <small class="text-muted">Web Developer</small>
              <b-card-text
                class="mt-2 px-4"
              >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ea nisi magni accusamus. Saepe sequi, culpa suscipit aut nam doloremque doloribus? Soluta laboriosam vitae odit!</b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </b-jumbotron>
    <b-container>
      <b-jumbotron class="card-bottom my-5 px-5">
        <div>
          <h2 class="text-white m-0">
            Lorem ipsum
            <br />dolor sit amet.
          </h2>
        </div>
        <div class="align-self-center">
          <b-button href="#" class="bg-white py-2 px-3" style="color: #5E50A1">Mulai Dari Sekarang</b-button>
        </div>
      </b-jumbotron>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import HeaderRegister from '@/components/HeaderRegister'
import Footer from '@/components/Footer'

export default {
  name: 'Landing',
  components: {
    HeaderRegister,
    Footer
  }
}
</script>

<style scoped>
.landing-img {
  width: 100%;
  height: 100%;
}
.title-banner {
  line-height: 55px;
}
.btn-secondary {
  background-color: #5e50a1;
}
.check1 {
  color: #5e50a1;
}
.check2 {
  color: #fbb017;
}
.opinion-people {
  border: 6px solid #f7d28a;
}
.landing-card {
  box-shadow: 0px 8px 16px rgba(197, 197, 197, 0.25);
}
.card-bottom {
  background-color: #5e50a1;
  border-radius: 40px 8px;
  display: flex;
  justify-content: space-between;
}
</style>
