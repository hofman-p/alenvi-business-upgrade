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
      <div class="main-text text-center"><h1>Je suis Professionnelle de l'empathie !</h1></div>
      <q-btn v-if="$q.platform.is.desktop" class="main-button-call-to-action" icon="call" color="primary" size="lg" label="Appeler au 01 73 12 55 97" />
      <q-btn v-if="$q.platform.is.mobile || $q.platform.is.ipad" round color="primary" size="lg" class="fixed z-top" icon="call" style="right: 18px; bottom: 18px" />
    </section>
    <section id="presentation-writing" :class="[{ 'q-pa-xl': $q.platform.is.desktop }, { 'q-pa-lg': $q.platform.is.mobile }, 'q-my-lg', 'row', 'justify-center', 'items-center']" v-scroll-fire="fadeInPresWriting">
      <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <div v-if="hasScrolledPresWriting" class="text-center">
          <h1>Nous réinventons l'accompagnement à domicile des personnes âgées</h1>
          <h5>Alenvi part du constat que <strong>la valorisation du métier d'auxiliaire de vie a un impact positif sur la qualité de l'accompagnement</strong> apporté aux personnes âgées.</h5>
          <h5>En créant un cadre de travail innovant, Alenvi permet à ses auxiliaires d'«envie» d'exercer pleinement leur empathie pour faire <span class="pres-writing">beaucoup plus que du «maintien à domicile»</span>.</h5>
        </div>
      </transition>
    </section>
    <section id="presentation-banner" :class="[{ 'q-pa-xl': $q.platform.is.desktop }, { 'q-pa-lg': $q.platform.is.mobile }, 'q-mt-lg', 'row', 'justify-center', 'items-center']" v-scroll-fire="fadeInPresBanner">
      <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <h1 v-if="hasScrolledPresBanner">Les communautés d'auxiliaires mettent en place <strong>des solutions sur-mesure à un tarif social adapté</strong> à tous.</h1>
      </transition>
    </section>
    <section id="mid-banner" :class="[{ 'q-mb-lg': $q.platform.is.mobile }]">
      <q-parallax
        v-if="$q.platform.is.desktop" class="q-mb-xl"
        src="https://res.cloudinary.com/alenvi/image/upload/c_fill,q_auto/v1507193477/images/business/Home_1_2000.jpg"
        :height="200" :speed="0.6" style="height:60vh">
        <!-- <img src="https://res.cloudinary.com/alenvi/image/upload/c_fill,q_auto/v1507193477/images/business/Home_1_2000.jpg" alt=""/> -->
      </q-parallax>
      <img class="responsive" v-if="$q.platform.is.mobile" src="https://res.cloudinary.com/alenvi/image/upload/c_fill,q_auto/v1507193477/images/business/Home_1_2000.jpg" alt="">
    </section>
    <section id="features" class="q-my-lg row items-center">
      <home-features :featuresContent="featuresContent"/>
    </section>
    <section id="auxiliaries-gallery" class="q-my-xl">
      <!-- <h1 class="text-center title-margin-bottom">Les auxiliaires d'envie</h1> -->
      <auxiliaries-gallery :videoNumber="videoNumber" :videoLocation="videoLocation" :videoRoles="videoRoles"/>
    </section>
    <section id="media" class="q-my-xl">
      <carousel-media />
    </section>
    <section id="latest-articles" :class="[{ 'q-pa-xl': $q.platform.is.desktop }, { 'q-pa-lg': $q.platform.is.mobile }, 'q-my-lg']">
       <!-- <h1 class="text-center title-margin-bottom">Blog : les derniers articles</h1> -->
      <latest-articles />
    </section>
    <section class="row justify-center items-center q-my-lg">
      <h1 class="text-center col-xs-12">
        Contactez-nous !
        <q-icon class="on-right" name="send"/>
      </h1>
      <contact-form />
    </section>
  </q-page>
</template>

<script>
import Parallax from 'vue-parallaxy'
import HomeFeatures from '../components/HomeFeatures.vue'
import AuxiliariesGallery from '../components/AuxiliariesGallery.vue'
import LatestArticles from '../components/LatestArticles.vue'
import CarouselMedia from '../components/CarouselMedia.vue'
import ContactForm from '../components/ContactForm.vue'

export default {
  components: {
    HomeFeatures,
    AuxiliariesGallery,
    LatestArticles,
    CarouselMedia,
    Parallax,
    ContactForm
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
  @media (min-width: 1025px)
    height: 60vh

#presentation-banner
  background: $primary
  text-align: center
  //padding-left: 5vw
  //padding-right: 5vw
  @media (min-width: 1025px)
    height: 40vh

#presentation-banner h1
  color: white

.pres-writing
  font-weight: bold
  font-size: 1.2em

//#features
 // height: 50vh

//#auxiliaries-gallery
//  height: 70vh

//#media
  //height: 30vh

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
  font-size: 2vh
  color: $primary
  font-family: alenviTitleFont
  @media (max-width: 1024px)
    top: 12vh
    left: 5%
    right: 1vw

.main-text h1
  font-weight: bold

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
