<template>
  <div>
    <HeaderLogin style="padding:20px 0" />
    <div class="gray">
      <div class="purple"></div>
      <div style="position: relative; top: -312px">
        <b-container>
          <b-row class="card-profile pt-5 mx-auto">
            <b-col xl="4" cols="12" class="text-center mb-2">
              <b-card class="border-light">
                <b-avatar size="7rem" class="my-3">
                  <img src="@/assets/opinion3.jpg" style="width: 7rem" class="mt-4" />
                </b-avatar>
                <div class="text-left">
                  <b-card-title class="my-1">Louis Tomlinson</b-card-title>
                  <small>Web Developer</small>
                  <p class="mt-4 text-muted">Purwokerto, Jawa Tengah</p>
                  <small class="text-muted">Freelancer</small>
                  <b-card-text
                    class="mt-2 text-muted"
                  >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ea nisi magni accusamus. Saepe sequi, culpa suscipit aut nam doloremque doloribus? Soluta laboriosam vitae odit!</b-card-text>
                </div>
                <div class="my-5">
                  <b-button class="py-2 btn-hire-edit" style="width: 100%">Edit</b-button>
                  <b-button class="py-2 btn-hire-edit" style="width: 100%">Hire</b-button>
                </div>
                <h4 class="text-left my-3">Skill</h4>
                <div>
                  <div class="skills">
                    <div class="skill">Javascript</div>
                    <div class="skill">Vue</div>
                    <div class="skill">Express</div>
                    <div class="skill">Javascript</div>
                    <div class="skill">Javascript</div>
                    <div class="skill">Javascript</div>
                  </div>
                </div>
                <div class="contact text-muted text-left mt-5">
                  <p>Louistommo@gmail.com</p>
                  <p>@louis91</p>
                  <p>@louistommo</p>
                  <p>@louistommo91</p>
                </div>
              </b-card>
            </b-col>
            <b-col xl="8" cols="12">
              <b-card class="border-light text-left ml-0">
                <b-tabs
                  style="font-size: 22px;"
                  no-nav-style
                  content-class="mt-3 ml-0"
                  active-nav-item-class="font-weight-bold text-dark"
                >
                  <b-tab title="Portofolio" class="p-3" active>
                    <b-row>
                      <b-col xl="4" cols="6">
                        <b-img fluid :src="require('@/assets/porto1.jpg')" alt="Image 1"></b-img>
                        <p class="text-center" style="font-size:15px">Reminder App</p>
                      </b-col>
                      <b-col xl="4" cols="6">
                        <b-img fluid :src="require('@/assets/porto2.png')" alt="Image 1"></b-img>
                        <p class="text-center" style="font-size:15px">Social Media App</p>
                      </b-col>
                      <b-col xl="4" cols="6">
                        <b-img fluid :src="require('@/assets/porto3.jpg')" alt="Image 1"></b-img>
                        <p class="text-center" style="font-size:15px">Project Management App</p>
                      </b-col>
                      <b-col xl="4" cols="6">
                        <b-img fluid :src="require('@/assets/porto4.jpg')" alt="Image 1"></b-img>
                        <p class="text-center" style="font-size:15px">Reminder App</p>
                      </b-col>
                      <b-col xl="4" cols="6">
                        <b-img fluid :src="require('@/assets/porto5.png')" alt="Image 1"></b-img>
                        <p class="text-center" style="font-size:15px">Social Media App</p>
                      </b-col>
                      <b-col xl="4" cols="6">
                        <b-img fluid :src="require('@/assets/porto6.png')" alt="Image 1"></b-img>
                        <p class="text-center" style="font-size:15px">Project Management App</p>
                      </b-col>
                    </b-row>
                  </b-tab>

                  <b-tab title="Pengalaman Pekerjaan" class="p-3">
                    <b-row>
                      <b-col cols="2">
                        <b-img fluid :src="require('@/assets/tokped.jpg')" alt="Image 1"></b-img>
                      </b-col>
                      <b-col cols="10">
                        <p class="my-0">
                          <strong>Engineer</strong>
                        </p>
                        <p class="my-0">Tokopedia</p>
                        <small class="text-muted">July 2019 - January 2020 6 months</small>
                        <br />
                        <br />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit quos qui nam, corrupti adipisci facere veritatis amet possimus explicabo magnam optio distinctio, officiis minus blanditiis.</p>
                        <hr />
                      </b-col>
                      <b-col cols="2">
                        <b-img fluid :src="require('@/assets/tokped.jpg')" alt="Image 1"></b-img>
                      </b-col>
                      <b-col cols="10">
                        <p class="my-0">
                          <strong>Engineer</strong>
                        </p>
                        <p class="my-0">Tokopedia</p>
                        <small class="text-muted">July 2019 - January 2020 6 months</small>
                        <br />
                        <br />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit quos qui nam, corrupti adipisci facere veritatis amet possimus explicabo magnam optio distinctio, officiis minus blanditiis.</p>
                      </b-col>
                    </b-row>
                  </b-tab>
                </b-tabs>
              </b-card>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <Footer class="footer" />
    </div>
  </div>
</template>

<script>
import HeaderLogin from '@/components/HeaderLogin.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'ProfileCandidate',
  components: {
    HeaderLogin,
    Footer
  }
}
</script>

<style scoped>
.purple {
  height: 361px;
  width: 100%;
  background-color: #5e50a1;
}
.gray {
  background-color: #e5e5ee !important;
}
.btn-hire-edit {
  background-color: #5e50a1;
}
.portofolio {
  display: flex;
  justify-content: space-between;
}
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
  padding: 3px 0;
  color: #ffff;
  margin: 0 5px 5px 0px;
}
.footer {
  margin-top: -250px;
}
</style>
