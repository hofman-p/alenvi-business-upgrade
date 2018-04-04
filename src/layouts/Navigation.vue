<template>
  <!-- Configure "view" prop for QLayout -->
  <q-layout view="hHh lpr fff">
    <q-layout-header reveal>
      <div class="w3-bar w3-white alenvi-nav row items-center justify-start">
        <router-link :to="'/'" class="w3-bar-item" style="width: 180px">
          <img class="alenvi-logo" src="https://res.cloudinary.com/alenvi/image/upload/c_fit,q_auto,w_500/v1507124345/images/business/alenvi_logo_complet_full.png" alt="Logo Alenvi">
        </router-link>
        <div class="row items-center gt-mld">
          <div class="w3-dropdown-hover bg-white">
            <button id="dropdownVision" class="alenvi-button text-tertiary"><router-link to="/vision" exact>Vision <q-icon name="arrow drop down"/></router-link></button>
            <div class="alenvi-dropdown-list w3-dropdown-content w3-bar-block w3-card-4">
              <a href="http://blog.alenvi.io/tag/alenvi" class="w3-bar-item">Le projet Alenvi</a>
            </div>
          </div>
          <router-link to="equipe" class="w3-bar-item">Equipe</router-link>
          <div class="w3-dropdown-hover -white">
            <button id="dropdownClients" class="alenvi-button text-tertiary">Bénéficiaires<q-icon name="arrow drop down"/></button>
            <div class="alenvi-dropdown-list w3-dropdown-content w3-bar-block w3-card-4">
              <router-link exact to="aide-a-domicile" class="w3-bar-item">Aide à domicile</router-link>
              <router-link exact to="compagnie" class="w3-bar-item">Compagnie et stimulation</router-link>
              <router-link exact to="sortie-hopital" class="w3-bar-item">Sortie d'hôpital</router-link>
              <a href="http://blog.alenvi.io/tag/aidants-familiaux" class="w3-bar-item">Conseils</a>
            </div>
          </div>
          <div class="w3-dropdown-hover bg-white">
            <button id="dropdownAuxiliary" class="alenvi-button text-tertiary">Auxiliaires <q-icon name="arrow drop down"/></button>
            <div class="alenvi-dropdown-list w3-dropdown-content w3-bar-block w3-card-4">
              <router-link to="recrutement" class="w3-bar-item">Recrutement</router-link>
              <a href="http://blog.alenvi.io/tag/auxiliaires" class="w3-bar-item">Partage d'expériences</a>
            </div>
          </div>
        </div>
        <div class="gt-mld btn-call-header">
          <q-btn class="q-mr-md cursor-pointer" size="md" color="secondary" @click="locationModal = true" round flat>
            <q-icon name="location on" size="2.3rem" />
          </q-btn>
          <q-btn v-if="this.$route.meta.name != 'recrutement'" color="primary" big><a class="btn-call text-white" href="tel:+33179755475">Appeler le 01 79 75 54 75</a></q-btn>
          <q-btn v-else color="primary" @click.native="showModal = true" big><a class="btn-call text-white">Postuler</a></q-btn>
        </div>
        <q-modal id="location-modal" v-model="locationModal" :content-css="{ padding: '2%'}" minimized>
          <div class="column">
            <div class="location-modal-text-blocks">
              <h2 class="location-modal-text-alenvi"><span>Alenvi</span> <span class="location-modal-text-bold">Paris</span></h2>
              <h4>Centre, Sud et Est</h4>
            </div>
            <div class="location-modal-text-blocks">
              <h2><span class="location-modal-text-alenvi">Alenvi</span> <span class="location-modal-text-bold">Sceaux</span></h2>
              <h4>Et Hauts-de-Seine</h4>
            </div>
            <div class="location-modal-text-blocks">
              <h2><span class="location-modal-text-alenvi">Alenvi</span> <span class="location-modal-text-bold">Versailles</span></h2>
              <h4>Et alentours</h4>
            </div>
          </div>
        </q-modal>
        <typeform-modal v-model="showModal" info="https://alenvi.typeform.com/to/MwEMWk" @closeModal="showModal = false"/>
        <div class="row absolute-right lt-lgx items-center">
          <q-btn size="md" color="secondary" @click="locationModal = true" round flat>
            <q-icon name="location on" size="2rem" />
          </q-btn>
          <q-btn color="primary" class="hide-on-drawer-visible" @click="showDrawer = true" flat big>
            <q-icon name="menu" size="2rem"/>
          </q-btn>
        </div>
      </div>
    </q-layout-header>

    <q-layout-drawer side="right" v-model="showDrawer" content-class="bg-primary-dimmed" :content-style="{ color: 'white' }">
      <q-list no-border :highlight="false">
        <q-item-side right>
          <q-btn @click="showDrawer = false" class="justify-end" color="white" flat big>
           <q-icon name="close" />
          </q-btn>
        </q-item-side>
        <q-item to="/" exact>
          <q-item-main label="Accueil" />
        </q-item>
        <q-collapsible label="Services" class="test">
          <q-item to="/aide-a-domicile">
            <q-item-main label="Aide à domicile" />
          </q-item>
          <q-item to="/compagnie">
            <q-item-main label="Compagnie et stimulation" />
          </q-item>
          <q-item to="/sortie-hopital">
            <q-item-main label="Sortie d'hôpital" />
          </q-item>
        </q-collapsible>
        <q-item to="/vision">
          <q-item-main label="Vision" />
        </q-item>
        <q-item to="/equipe">
          <q-item-main label="Equipe" />
        </q-item>
        <q-item to="/recrutement">
          <q-item-main label="Recrutement" />
        </q-item>
        <q-collapsible label="Blog">
          <q-item class="no-bg" to="">
            <q-item-main @click="goUrl('http://blog.alenvi.io')" label="Accueil Blog" />
          </q-item>
          <q-item class="no-bg" to="">
            <q-item-main @click="goUrl('http://blog.alenvi.io/tag/aidants-familiaux')" label="Aidants familiaux" />
          </q-item>
          <q-item class="no-bg" to="">
            <q-item-main @click="goUrl('http://blog.alenvi.io/tag/auxiliaires')" label="Auxiliaires" />
          </q-item>
          <q-item class="no-bg" to="">
            <q-item-main @click="goUrl('http://blog.alenvi.io/tag/alenvi')" label="Le projet Alenvi" />
          </q-item>
        </q-collapsible>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Footer -->
    <q-layout-footer class="row justify-between items-center q-pl-lg">
      <div class="col-xs-6 col-lg-2">
        <ul>
          <li class="footer-links" @click="goTo('/vision')">Vision</li>
          <li class="footer-links" @click="goTo('/equipe')">Equipe</li>
          <li class="footer-links" @click="goTo('/recrutement')">Recrutement</li>
        </ul>
      </div>
      <div class="col-xs-6 col-lg-2">
        <ul>
          <li class="footer-links" @click="goTo('/aide-a-domicile')">Aide à domicile</li>
          <li class="footer-links" @click="goTo('/compagnie')">Compagnie et stimulation</li>
          <li class="footer-links" @click="goTo('/sortie-hopital')">Sortie d'hôpital</li>
        </ul>
      </div>
      <div class="col-xs-6 col-lg-2">
        <ul>
          <li class="footer-links"><a href="http://blog.alenvi.io">Blog</a></li>
          <li class="footer-links" @click="goTo('/mentions')">Mentions Légales</li>
        </ul>
      </div>
      <div class="col-xs-6 col-lg-1">
        <ul>
          <li class="footer-links footer-spe-link" @click="locationModal = true">Nous trouver</li>
          <li><a href="#" class="footer-spe-link">Se connecter</a></li>
        </ul>
      </div>
      <div class="col-xs-6 col-lg-2 row justify-center justify-start-resp">
        <a href="https://www.facebook.com/alenviservices/">
          <q-icon name="fab fa-facebook" color="white" size="2.5rem" class="hover-icon on-left"/>
        </a>
        <a href="https://www.youtube.com/channel/UCY31qIuLKsPY6zFUh_pR-pw">
          <q-icon name="fab fa-youtube" color="white" size="2.5rem" class="hover-icon"/>
        </a>
      </div>
      <div class="col-xs-6 col-lg-3 row justify-center items-center">
        <img class="footer-img on-left" src="https://res.cloudinary.com/alenvi/image/upload/q_auto/v1507019445/images/business/logo-service-personne.png" alt="logo service personne">
        <img class="footer-img" src="https://res.cloudinary.com/alenvi/image/upload/v1522847849/images/business/logo_charte_qualite___2018.png" alt="logo charte qualité">
      </div>
    </q-layout-footer>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar';

import TypeformModal from '../components/TypeformModal.vue';

export default {
  components: {
    TypeformModal,
  },
  data () {
    return {
      locationModal: false,
      showModal: false,
      showDrawer: false,
      active: false,
      dropdownItemClass: 'dropdown-item',
      activeLinkClass: 'active-link',
      rowClass: 'row',
      justifyCenterClass: 'justify-center',
      dropdownPos: {
        position: 'absolute',
        left: '',
      },
    };
  },
  mounted () {
    if (!this.$q.cookies.has('popupWasShown')) {
      this.displayCookieInfo();
    }
  },
  methods: {
    isActive () {
      this.active = !this.active;
    },
    // getElementLeftPos () {
    //   return this.dropdownPos.left = this.$refs.dropdown.getBoundingClientRect().left + 'px'
    // },
    goUrl (url) {
      openURL(url);
    },
    goTo (path) {
      this.$router.push({ path });
    },
    displayCookieInfo () {
      this.$q.notify({
        message: `En poursuivant votre navigation sur ce site, vous acceptez l’utilisation de cookies pour vous proposer des publicités ciblées adaptés à vos centres d’intérêts et réaliser des statistiques de visites.`,
        timeout: 0,
        type: 'info',
        position: 'bottom-right',
        actions: [
          {
            label: "OK, j'ai compris.",
            handler: () => {
              this.$q.cookies.set('popupWasShown', true, {expires: 10, path: '/'});
            },
          },
        ],
      });
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~variables'

  @media (max-width: 1024px) and (min-width: 320px)
    .gt-mld
      display: none !important

  @media (min-width: 1025px)
    .lt-lgx
      display: none !important

  @media (max-width: 991px)
    .padding-top-footer
      padding-top: 15px

  #location-modal
    // background-color: blue
    // height: 50%
    // width: 50%

  .location-modal-text-blocks
    text-align: center

  .location-modal-text-blocks h2
    margin-bottom: 0px !important

  .location-modal-text-blocks h4
    margin-top: 0px !important

  .location-modal-text-alenvi
    color: $primary

  .location-modal-text-bold
    color: $secondary

  .no-bg
    background: none !important

  .alenvi-button
    border: none;
    display: inline-block;
    outline: 0;
    padding: 19px 16px;
    vertical-align: middle;
    overflow: hidden;
    text-decoration: none;
    background-color: inherit;
    text-align: center;
    cursor: pointer;
    white-space: nowrap;

  .alenvi-dropdown-list
    margin-top: -0.4px

  .alenvi-nav
    font-weight: bold
    color: $tertiary
    min-height: 60px
    a
      color: $tertiary
      text-decoration: none
      &:hover
        color: $secondary

  .w3-dropdown-hover
    height: 60px

  header .router-link-exact-active
    font-weight: 900
    color: $secondary

  .alenvi-logo
    width: 100%

  .btn-call
    color: $white
    // padding: 0 10px 0 10px

  button a b
    font-weight: bold

  .btn-call:hover
    color: $white

  .btn-call-header
    // margin: 0 -15px
    margin-left: auto

  footer
    background-color: $primary

  footer ul
    list-style: none
    padding: 0

  footer ul li
    color: white

  .q-layout-footer
    z-index: 1500

  .footer-title
    color: white !important
    font-family: alenviTextFont
    font-weight: bold
    @media screen and (max-width: 767px)
      font-size: 18px

  .footer-links
    color: $white
    cursor: pointer;
    &:hover
      color: $grey-4 !important

  .footer-spe-link
    text-decoration: none
    color: white
    font-weight: bold
    &:hover
      color: $grey-4 !important

  .footer-img
   width: 107px
   height: auto
   @media (max-width: 768px)
    width: 75px

  .forced-wrap
    flex-wrap: wrap

  .hover-icon:hover
    color: $grey-4 !important

  .justify-start-resp
    @media (max-width: 1159px)
      justify-content: start

  /deep/ .q-collapsible-toggle-icon
    color: white !important

</style>
