<template>
  <!-- Configure "view" prop for QLayout -->
  <q-layout view="hHh lpr fff">
    <q-layout-header reveal>
      <div class="w3-bar w3-white alenvi-nav row items-center justify-start"><!-- id="bg-test" -->
        <router-link :to="'/'" class="w3-bar-item" style="width: 180px">
          <img class="alenvi-logo" src="https://res.cloudinary.com/alenvi/image/upload/c_fit,q_auto,w_500/v1507124345/images/business/alenvi_logo_complet_full.png" alt="Logo Alenvi">
        </router-link>
        <div class="row items-center gt-mld">
          <div class="w3-dropdown-hover bg-white">
            <button id="dropdownHome" class="alenvi-button text-tertiary"><router-link :to="'/'" exact>Services <q-icon name="arrow drop down"/></router-link></button>
            <div class="alenvi-dropdown-list w3-dropdown-content w3-bar-block w3-card-4">
              <router-link :to="'aide-a-domicile'" class="w3-bar-item">Aide à domicile</router-link>
              <router-link :to="'compagnie'" class="w3-bar-item">Compagnie et stimulation</router-link>
              <router-link :to="'sortie-hopital'" class="w3-bar-item">Sortie d'hôpital</router-link>
            </div>
          </div>
          <router-link :to="'vision'" class="w3-bar-item">Vision</router-link>
          <router-link :to="'equipe'" class="w3-bar-item">Equipe</router-link>
          <router-link :to="'recrutement'" class="w3-bar-item">Recrutement</router-link>
          <div class="w3-dropdown-hover bg-white">
            <button id="dropdownMag" class="alenvi-button text-tertiary"><a href="http://blog.alenvi.io/">Blog <q-icon name="arrow drop down"/></a></button>
            <div class="alenvi-dropdown-list w3-dropdown-content w3-bar-block w3-card-4">
              <a href="http://blog.alenvi.io/tag/aidants-familiaux" class="w3-bar-item">Aidants familiaux</a>
              <a href="http://blog.alenvi.io/tag/auxiliaires" class="w3-bar-item">Auxiliaires</a>
              <a href="http://blog.alenvi.io/tag/alenvi" class="w3-bar-item">Le projet Alenvi</a>
            </div>
          </div>
        </div>
        <q-btn id="btn-call-header" v-if="this.$route.meta.name != 'recrutement'" class="gt-mld" color="primary" big><a class="btn-call text-white" href="tel:+33179755475">Appeler le 01 79 75 54 75</a></q-btn>
        <q-btn id="btn-call-header" v-else class="gt-mld" color="primary" @click.native="showModal = true" big><a class="btn-call text-white">Postuler</a></q-btn>
        <typeform-modal v-model="showModal" info="https://alenvi.typeform.com/to/MwEMWk" @closeModal="showModal = false"/>
        <q-btn color="primary" class="lt-lgx hide-on-drawer-visible absolute-right" @click="showDrawer = true" flat big>
          <q-icon name="menu" />
        </q-btn>
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
        <h6 class="footer-title">A propos</h6>
        <ul>
          <li class="footer-links" @click="goTo('/vision')">Vision</li>
          <li class="footer-links" @click="goTo('/equipe')">Equipe</li>
          <li class="footer-links" @click="goTo('/')">Histoire d'alenvi</li>
        </ul>
      </div>
      <div class="col-xs-6 col-lg-2">
        <h6 class="footer-title">Bénéficiaires</h6>
        <ul>
          <li class="footer-links" @click="goTo('/')">Services</li>
          <li class="footer-links" @click="goTo('/')">Communautés</li>
          <li class="footer-links" @click="goTo('/')">Actualités</li>
        </ul>
      </div>
      <div class="col-xs-6 col-lg-2">
        <h6 class="footer-title">Auxiliaires</h6>
        <ul>
          <li class="footer-links" @click="goTo('/recrutement')">Recrutement</li>
          <li class="footer-links" @click="goTo('/')">Communautés</li>
          <li class="footer-links" @click="goTo('/')">Actualités</li>
        </ul>
      </div>
      <div class="col-xs-6 col-lg-2">
        <a href="#" class="footer-spe-link">Nous trouver</a>
        <br />
        <a href="#" class="footer-spe-link">Se connecter</a>
      </div>
      <div class="col-xs-6 col-lg-2">
        <!-- <div class="row justify&#45;center"> -->
            <a href="https://www.facebook.com/alenviservices/">
              <q-icon name="fab fa-facebook" color="white" size="2.5rem" class="hover-icon on-left"/>
            </a>
            <a href="https://www.youtube.com/channel/UCY31qIuLKsPY6zFUh_pR-pw">
              <q-icon name="fab fa-youtube" color="white" size="2.5rem" class="hover-icon"/>
            </a>
        <!-- </div> -->
      </div>
      <div class="col-xs-6 col-lg-2">
        <!-- <div class="row justify&#45;center items&#45;center"> -->
          <!-- <div> -->
            <img class="footer-img" src="https://res.cloudinary.com/alenvi/image/upload/q_auto/v1507019445/images/business/logo-service-personne.png" alt="logo service personne">
          <!-- </div> -->
        </div>
      <!-- </div> -->
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
        color: $primary

  .w3-dropdown-hover
    height: 60px

  header .router-link-exact-active
    font-weight: 900
    color: $primary

  .alenvi-logo
    width: 100%

  .btn-call
    color: $white
    // padding: 0 10px 0 10px

  button a b
    font-weight: bold

  .btn-call:hover
    color: $white

  #btn-call-header
    // margin: 0 -15px
    margin-left: auto

  footer
    background-color: $purpleAlenvi

  footer ul
    list-style: none
    padding: 0

  footer ul li
    color: white

  .q-layout-footer
    z-index: 1500

  .footer-title
    color: #cb4f88
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
   width: 100px
   height: auto

  .forced-wrap
    flex-wrap: wrap

  .hover-icon:hover
    color: $grey-4 !important

  div.q-collapsible-inner
    color: white !important

</style>
