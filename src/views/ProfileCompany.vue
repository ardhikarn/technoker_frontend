<template>
  <div>
    <HeaderLogin style="padding: 20px 0" />
    <div style="background-color: #e5e5e5">
      <b-jumbotron class="mb-0">
        <b-container>
          <div class="purple" style="position: relative;">
            <h5 style="position: absolute; bottom: 0; right: 0" class="mr-3 text-white">Ubah Latar</h5>
          </div>
          <div class="white text-center mx-auto" style="padding-bottom: -100px">
            <div class="mx-auto pb-3" style="position: relative; top: -110px; width: 50%">
              <b-avatar size="11rem" class="my-3">
                <img src="@/assets/opinion3.jpg" style="width: 11rem" class="mt-4" />
              </b-avatar>
              <div>
                <h3 class="my-1">PT. Martabat Jaya Abadi</h3>
                <p>Financial</p>
                <p class="mt-3 text-muted">Purwokerto, Jawa Tengah</p>
                <b-card-text
                  class="mt-2 text-muted"
                >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ea nisi magni accusamus. Saepe sequi, culpa suscipit aut nam doloremque doloribus!</b-card-text>
              </div>
              <b-button
                class="py-2 my-4 btn-hire-edit"
                style="width: 50%; background-color: #5e50a1"
              >Edit</b-button>
              <div
                class="text-muted text-left mt-3 mx-auto"
                style="width: 30%; margin-bottom: -100px"
              >
                <p>Louistommo@gmail.com</p>
                <p>@louis91</p>
                <p>@louistommo</p>
                <p>@louistommo91</p>
              </div>
            </div>
          </div>
        </b-container>
      </b-jumbotron>
    </div>
    <Footer class="mt-0" />
  </div>
</template>

<script>
import HeaderLogin from '@/components/HeaderLogin.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'ProfileCompany',
  components: {
    HeaderLogin,
    Footer
  }
}
</script>

<style scoped>
.purple {
  height: 200px;
  background-color: #5e50a1;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
}
.white {
  background-color: #ffff;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
}
</style>
