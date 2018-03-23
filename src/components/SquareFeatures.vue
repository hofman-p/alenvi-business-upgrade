<template>
<div class="row gutter-x-lg q-pa-xl" style="height: 90vh">
  <div v-for="(feature, index) in features" :key="index" class="row col-xs-12 col-md-4 cursor-pointer">
    <div :class="['row', 'justify-center', 'items-center', 'no-margin', 'hoverable','square']" :style="{ backgroundColor: feature.backgroundColor, width: '100%' }">
      <h2 class="text-center" :style="{ color: feature.color }">{{feature.title}}</h2>
    </div>
  </div>
  <q-btn flat color="primary" label="test"></q-btn>
</div>
</template>

<script>
export default {
  props: {
    featuresContent: Array,
  },
  data () {
    return {
      features: this.featuresContent,
    };
  }
};
</script>

<style lang="stylus">
  @import '~variables'

  .square
    border-radius: 2px
    background: transparent
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1)
  .hoverable
    &:hover
      background: currentColor
      opacity: 0.2
</style>
