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
      <div class="main-subtext text-center">J'accompagne Paulette, 87 ans</div>
      <div class="main-text text-center"><strong>Je suis Professionnelle de l'empathie !</strong></div>
      <q-btn v-if="$q.platform.is.desktop" class="main-button-call-to-action" icon="call" color="primary" size="lg" label="Appeler au 01 73 12 55 97" />
      <q-btn v-if="$q.platform.is.mobile || $q.platform.is.ipad" round color="primary" size="lg" class="fixed z-top" icon="call" style="right: 18px; bottom: 18px" />
    </section>
    <section id="presentation-writing" class="q-pa-xl section-margin" v-scroll-fire="fadeInPresWriting">
      <transition-group enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <h1 v-if="hasScrolledPresWriting" key="presentation-writing-text">Nous réinventons l'accompagnement à domicile des personnes âgées</h1>
        <h5 v-if="hasScrolledPresWriting" key="presentation-writing-text">Alenvi part du constat que <strong>la valorisation du métier d'auxiliaire de vie a un impact positif sur la qualité de l'accompagnement</strong> apporté aux personnes âgées.</h5>
        <h5 v-if="hasScrolledPresWriting" key="presentation-writing-text">En créant un cadre de travail innovant, Alenvi permet à ses auxiliaires d'«envie» d'exercer pleinement leur empathie pour faire <strong>beaucoup plus que du «maintien à domicile»</strong>.</h5>
      </transition-group>
    </section>
    <section id="presentation-banner" class="row items-center" v-scroll-fire="fadeInPresBanner">
      <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <h1 v-if="hasScrolledPresBanner">Les communautés d'auxiliaires mettent en place <strong>des solutions sur-mesure à un tarif social adapté</strong> à tous.</h1>
      </transition>
    </section>
    <section id="mid-banner">
      <q-parallax
        v-if="$q.platform.is.desktop || $q.platform.is.ipad" class="q-mb-xl"
        src="https://res.cloudinary.com/alenvi/image/upload/c_fill,q_auto/v1507193477/images/business/Home_1_2000.jpg"
        :height="200" :speed="0.6" style="height:40vh">
        <!-- <img src="https://res.cloudinary.com/alenvi/image/upload/c_fill,q_auto/v1507193477/images/business/Home_1_2000.jpg" alt=""/> -->
      </q-parallax>
      <img class="responsive" v-if="$q.platform.is.mobile" src="https://res.cloudinary.com/alenvi/image/upload/c_fill,q_auto/v1507193477/images/business/Home_1_2000.jpg" alt="">
    </section>
    <section id="features" class="q-mb-lg row items-center">
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
      hasScrolledPresWriting: false,
      hasScrolledPresBanner: false,
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
  },
  methods: {
    fadeInPresWriting () {
      this.hasScrolledPresWriting = true;
    },
    fadeInPresBanner () {
      this.hasScrolledPresBanner = true;
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

#presentation-writing
  height: 40vh

#presentation-banner
  background: $primary
  text-align: center
  height: 40vh
  padding-left: 5vw
  padding-right: 5vw

#presentation-banner h1
  color: white

#features
  height: 40vh

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

.main-text
  position: absolute
  top: 35vh
  left: 10vw
  font-size: 5vh
  color: $primary
  font-family: alenviTitleFont
  @media (max-width: 1024px)
    top: 12vh
    left: 5%
    right: 1vw

.main-subtext
  position: absolute
  top: 30vh
  left: 10vw
  font-size: 4vh
  font-family: alenviTitleFont
  @media (max-width: 1024px)
    top: 4vh
    left: 1vw
    right: 1vw

.main-button-call-to-action
  position: absolute
  top: 45vh
  left: 10vw
</style>
