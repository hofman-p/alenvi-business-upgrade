<template>
  <q-page padding>
    <breadcrumb class="col-12 breadcrumb"/>
    <section id="presentation" class="section-margin">
      <div class="row"> <!-- pres-background -->
        <h1 class="col-12 text-center title-margin-bottom">Rejoignez une équipe mobilisée pour la valorisation du métier d’auxiliaire de vie</h1>
        <div id="pres-text" class="col-lg-7">
          <!-- <h1 class="col-12 text-center title-margin-bottom">Rejoignez une équipe mobilisée pour la valorisation du métier d’auxiliaire de vie</h1> -->
          <p>Chez Alenvi, nous pensons qu’il n’est possible de bien accompagner les personnes âgées à domicile qu’en valorisant le métier d’auxiliaire de vie.</p>
          <p>Les auxiliaires d’envie travaillent ainsi au sein de communautés autonomes dans un cadre de travail unique :</p>
          <ul>
            <li><q-icon name="keyboard arrow right" /> CDI 35h, SMIC +20%</li>
            <li><q-icon name="keyboard arrow right" /> Interventions de 2h minimum</li>
            <li><q-icon name="keyboard arrow right" /> Autonomie dans la gestion du planning et la relation avec les bénéficiaires</li>
            <li><q-icon name="keyboard arrow right" /> Formation continue</li>
            <li><q-icon name="keyboard arrow right" /> Coopération entre collègues (réunions d’équipe toutes les 2 semaines) & formation continue</li>
          </ul>
          <p>Nous recrutons actuellement pour des interventions à Paris et dans les Hauts-de-Seine.</p>
          <q-btn color="primary" @click="showModal = true" big>
            <a class="btn-call">Postuler</a>
          </q-btn>
          <typeform-modal v-model="showModal" info="https://alenvi.typeform.com/to/MwEMWk" @closeModal="showModal = false"/>
        </div>
        <div class="col-lg-5 alenvi-video">
          <iframe id="auxiliary-iframe" src="https://www.youtube.com/embed/yGWVPxglesc" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
import Breadcrumb from '../components/Breadcrumbs.vue'
import TypeformModal from '../components/TypeformModal'

export default {
  metaInfo: {
    title: 'Recrutement',
    meta: [
      { name: 'description', content: 'Rejoignez une équipe engagée pour la valorisation du métier d’auxiliaire de vie.' }
    ],
    script: [
      { innerHTML: '{ "@context": "http://schema.org", "@type": "Organization", "url": "https://www.alenvi.io/recrutement", "name": "Recrutement", "description": "Rejoignez une équipe engagée pour la valorisation du métier d’auxiliaire de vie" }', type: 'application/ld+json' }
    ]
  },
  components: {
    Breadcrumb,
    TypeformModal
  },
  data () {
    return {
      showModal: false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~variables"

  .breadcrumb
    padding-left: 1%
    @media (max-width: 1024px) and (min-width: 320px)
      padding-left: 0%
    @media (min-width: 1199px)
      padding-left: 2.3%

  .pres-background
    background: linear-gradient(to right, #FAF9F8, white)

  #pres-text
    // padding-left: 5%
    // padding-right: 5%
    @media (max-width: 991px)
      padding-bottom: 5%

  ul
    list-style: none

  .title-margin-bottom
    margin-bottom: 3%

  .alenvi-video
    width: 100%
    height: auto
    min-height: 325px
    max-width: 520px
    @media (max-width: 1200px)
      max-width: 100%

  .section-margin
    margin-bottom: 3%

  .btn-call:hover
    color: $white

  .primary
    color: $primary

  .secondary
    color: $secondary

  .quaternary
    color: $quaternary

</style>
