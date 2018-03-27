<template>
  <q-page>
    <section id="presentation-picture" class="section-margin">
      <!-- <img src="https://res.cloudinary.com/alenvi/image/upload/v1507193477/images/business/Home_4_2000.jpg" style="width: 100vw; height: 97vh"> -->
      <!-- <div> -->
        <!-- <q-parallax src="https://res.cloudinary.com/alenvi/image/upload/v1507193477/images/business/Home_4_2000.jpg" :height="875">
          <h5>J'accompagne Paulette, 87 ans</h5>
          <h1>Je suis Professionnelle de l'empathie !</h1>
        </q-parallax> -->
      <!-- </div> -->
      <div id="main-bg"></div>
    </section>
    <section class="q-pa-xl section-margin" id="presentation-writing">
      <transition-group appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <h1 key="text1">Nous réinventons l'accompagnement à domicile des personnes âgées</h1>
        <h5 key="text2">Alenvi part du constat que <strong>la valorisation du métier d'auxiliaire de vie a un impact positif sur la qualité de l'accompagnement</strong> apporté aux personnes âgées.</h5>
        <h5 key="text3">En créant un cadre de travail innovant, Alenvi permet à ses auxiliaires d'«envie» d'exercer pleinement leur empathie pour faire <strong>beaucoup plus que du «maintien à domicile»</strong>.</h5>
      </transition-group>
    </section>
    <section id="presentation-banner" class="q-px-xl row items-center">
      <div>
        <h1>Les communautés d'auxiliaires mettent en place <strong>des solutions sur-mesure à un tarif social adapté</strong> à tous.</h1>
      </div>
    </section>
    <section id="features" class="section-margin">
      <q-parallax :class="[{ 'q-mb-xl': $q.platform.is.desktop || $q.platform.is.ipad }]" src="https://res.cloudinary.com/alenvi/image/upload/c_fill,q_auto/v1507193477/images/business/Home_1_2000.jpg" :height="200" :speed="0.6" style="height:60vh">
        <!-- <img src="https://res.cloudinary.com/alenvi/image/upload/c_fill,q_auto/v1507193477/images/business/Home_1_2000.jpg" alt=""/> -->
      </q-parallax>
      <home-features :featuresContent="featuresContent"/>
    </section>
    <section id="auxiliaries-gallery" class="section-margin">
      <h1 class="text-center title-margin-bottom">Les auxiliaires d'envie</h1>
      <auxiliaries-gallery :videoNumber="videoNumber" :videoLocation="videoLocation" :videoRoles="videoRoles"/>
    </section>
    <section class="section-margin">
      <carousel-media />
    </section>
    <!-- <section id="latest-articles">
       <h1 class="text-center title-margin-bottom">Blog : les derniers articles</h1>
      <latest-articles />
    </section> -->
  </q-page>
</template>

<script>
import Parallax from 'vue-parallaxy'
import HomeFeatures from '../components/HomeFeatures.vue'
import AuxiliariesGallery from '../components/AuxiliariesGallery.vue'
import LatestArticles from '../components/LatestArticles.vue'
import CarouselMedia from '../components/CarouselMedia.vue'

export default {
  components: {
    HomeFeatures,
    AuxiliariesGallery,
    LatestArticles,
    CarouselMedia,
    Parallax
  },
  data () {
    return {
      videoNumber: 8,
      videoLocation: ['accueil'],
      videoRoles: ['Auxiliaire'],
      featuresContent: [
        {
          title: 'Aide à domicile',
          text: 'Nous assistons votre proche pour les tâches de la vie quotidienne et passons de bons moments avec lui.',
          link: '/aide-a-domicile',
          image: 'https://res.cloudinary.com/alenvi/image/upload/v1507194145/images/business/pictos/aide_domicile.png',
          backgroundColor: '#E2007A',
          color: 'white',
          titleColor: 'white'
        },
        {
          title: 'Compagnie & stimulation',
          text: 'Formés en continu sur les troubles cognitifs, nous sommes là pour aider votre proche à conserver des activités : promenades, jeux...',
          link: '/compagnie',
          image: 'https://res.cloudinary.com/alenvi/image/upload/v1507194145/images/business/pictos/compagnie_stimulation.png',
          backgroundColor: 'white',
          color: '#E2007A',
          titleColor: '#E2007A',
        },
        {
          title: `Sortie d'hôpital`,
          text: 'Nous aidons votre proche à retrouver son autonomie lorsqu’il regagne son domicile après un passage à l’hôpital.',
          link: '/sortie-hopital',
          image: 'https://res.cloudinary.com/alenvi/image/upload/v1507194145/images/business/pictos/sortie_hopital.png',
          backgroundColor: '#E2007A',
          color: 'white',
          titleColor: 'white'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~variables"

h1
  color: $primary
  margin-bottom: 3%

q-parallax h1, h5
  color: $primary

#main-bg
  background-image: url("../assets/Barbara_landscape.jpg")
  height: 100vh
  background-position: center
  background-repeat: no-repeat
  background-size: cover
  @media (max-width: 1024px)
    background-image: url("../assets/Barbara_portrait.jpg")

#presentation-banner
  background: $primary
  text-align: center
  height: 40vh

#presentation-banner h1
  color: white

//#carousel-media
  //background: #FAF9F8

#about-us
  margin-top: 0
  padding-top: 6%

.section-margin
  margin-bottom: 3%

.title-margin-bottom
  margin-bottom: 3%

.section-margin-big
  margin-bottom: 6%

</style>
