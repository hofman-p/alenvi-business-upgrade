<template>
  <!--<div class="row gutter-lg">-->
    <!--<div v-for="(feature, index) in features" :key="index" class="col-xs-12
      col-sm-4" style="background-color: red">-->
        <!--<h2>{{feature.title}}</h2>-->
    <!--</div>-->
  <!--</div>-->
<div class="row gutter-x-lg" style="height: 50vh">
  <div v-for="(feature, index) in features" :key="index" class="row col-xs-12 col-sm-4 square">
    <div class="row justify-center items-center no-margin" style="background-color:pink; width: 100%">
    <h2 class="text-center">{{feature.title}}</h2>
    </div>
  </div>
  <!--<div class="col-xs-12 col-sm-6">-->
    <!--<q-input inverted v-model="model" class="no-margin" float-label="col-12" />-->
  <!--</div>-->
  <!--<div class="col-xs-12 col-sm-6">-->
    <!--<q-input inverted v-model="model" class="no-margin" float-label="col-12" />-->
  <!--</div>-->
  <!--<div class="col-12">-->
    <!--<q-input inverted v-model="model" class="no-margin" float-label="col-12" />-->
  <!--</div>-->
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

</style>
