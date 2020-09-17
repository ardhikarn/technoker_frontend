<template>
  <b-container fluid class="px-0">
    <HeaderLogin style="padding: 20px 0;" />
    <HeaderTopJobs />
    <div class="gray py-3" style="with: 100%">
      <b-container>
        <b-form class="my-4">
          <b-row>
            <b-col cols="8" xl="10">
              <b-form-input
                size="lg"
                v-model="filter"
                type="search"
                placeholder="Search for any skill"
              ></b-form-input>
            </b-col>
            <b-col cols="4" xl="2" class="text-center">
              <b-button size="lg" class="purple px-4">Search</b-button>
            </b-col>
          </b-row>
        </b-form>
        <div class="candidate my-5">
          <b-card>
            <b-row>
              <b-col xl="2" cols="12" class="text-center align-self-center">
                <b-avatar size="9rem" class="my-3">
                  <img src="@/assets/opinion3.jpg" style="width: 9rem" class="mt-4" />
                </b-avatar>
              </b-col>
              <b-col xl="8" cols="12" class="align-self-center">
                <h4>Louis Tomlinson</h4>
                <p class="text-muted">Web Developer</p>
                <small class="text-muted">Lorem ipsum</small>
                <div class="skills mb-0">
                  <div class="skill">PHP</div>
                  <div class="skill">Javascript</div>
                  <div class="skill">Javascript</div>
                  <div class="skill">Javascript</div>
                  <div class="skill">HTML</div>
                </div>
              </b-col>
              <b-col xl="2" cols="12" class="text-center align-self-center">
                <b-button class="purple py-2 my-3">Lihat Profile</b-button>
              </b-col>
            </b-row>
          </b-card>
        </div>
        <!-- PAGINATION -->
        <div class="my-3">
          <b-pagination v-model="currentPage" :total-rows="rows" align="center"></b-pagination>
        </div>
      </b-container>
    </div>
    <Footer />
  </b-container>
</template>

<script>
import HeaderLogin from '@/components/HeaderLogin.vue'
import HeaderTopJobs from '@/components/HeaderTopJobs.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Notification',
  components: {
    HeaderLogin,
    HeaderTopJobs,
    Footer
  }
}
</script>

<style scoped>
.gray {
  background-color: #e5e5e5;
}
.purple {
  background-color: #5e50a1;
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
</style>
