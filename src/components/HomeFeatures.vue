<template>
  <div :class="['row', { 'q-px-xl': !getMd } ]">
    <q-window-resize-observable @resize="onResize" />
    <div v-if="!getMd" v-for="(feature, index) in featuresContent" :key="index" class="col-xs-12 col-md-4 square ">
      <div class="row justify-center items-center q-py-md">
        <div class="q-pb-md">
          <img class="main-picto" :src="feature.image" :alt="`picto-${feature.title.split(' ').join('').toLowerCase()}`">
        </div>
        <div>
          <h2 class="text-center">{{feature.title}}</h2>
          <p :class="['text-justify', { 'q-px-lg': !getMd } ]">{{feature.text}}</p>
        </div>
      </div>
    </div>
    <div v-if="getMd" v-for="(feature, index) in featuresContent" :key="index" class="col-xs-12 row justify-center items-center" :style="{ backgroundColor: feature.backgroundColor, height: '25vh' }">
      <h1 class="no-margin" :style="{ color: feature.color }">{{ feature.title }}</h1>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    featuresContent: {
      type: Array
    }
  },
  data () {
    return {
      isMd: false
    }
  },
  computed: {
    getMd () {
      return this.isMd;
    }
  },
  methods: {
    onResize (size) {
      if (size.width <= 768) {
        this.isMd = true;
      } else {
        this.isMd = false;
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~variables'
.main-picto
  width: 100px
  height: 100px

.feature-text
  text-align: justify
  padding-left: 10%
  padding-right: 10%

.feature-background
  background-color: #FFFFFF
  // background-color: #FAF9F8

.feature-padding
  padding-top: 2%
  padding-bottom: 2%

.square
  border-radius: 2px
  background: transparent
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1)
  cursor: pointer
  &:hover
    background: #FAF9F8

.alenvi-link
  &:hover
    color: #ff1693 !important
</style>
