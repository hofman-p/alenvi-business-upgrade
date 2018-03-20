<template>
  <q-page padding>
    <section id="features">
      <features :featuresContent="featuresContent"/>
    </section>
    <section id="auxiliaries-gallery">
      <h1 class="text-center title-margin-bottom">Les auxiliaires d'envie</h1>
      <auxiliaries-gallery :videoNumber="videoNumber" :videoLocation="videoLocation" :videoRoles="videoRoles"/>
    </section>
    <!-- <section id="carousel-media">
      <h1 id="about-us" class="text-center">Ils parlent de nous</h1>
      <carousel-media />
    </section> -->
    <!-- <section id="latest-articles">
      <latest-articles />
    </section> -->
  </q-page>
</template>

<script>
import Features from '../components/Features.vue'
// import AuxiliariesGallery from '../components/AuxiliariesGallery.vue'

export default {
  components: {
    Features,
    // AuxiliariesGallery
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
          backgroundColor: '#FFFFFF'
        },
        {
          title: 'Compagnie & stimulation',
          text: 'Formés en continu sur les troubles cognitifs, nous sommes là pour aider votre proche à conserver des activités : promenades, jeux...',
          link: '/compagnie',
          image: 'https://res.cloudinary.com/alenvi/image/upload/v1507194145/images/business/pictos/compagnie_stimulation.png',
          backgroundColor: '#FAF9F8'
        },
        {
          title: `Sortie d'hôpital`,
          text: 'Nous aidons votre proche à retrouver son autonomie lorsqu’il regagne son domicile après un passage à l’hôpital.',
          link: '/sortie-hopital',
          image: 'https://res.cloudinary.com/alenvi/image/upload/v1507194145/images/business/pictos/sortie_hopital.png',
          backgroundColor: '#FFFFFF'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>

#carousel-media
  background: #FAF9F8

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
