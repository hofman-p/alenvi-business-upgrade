<template>
  <div style="width: 600px; max-width: 80vw;">
    <q-field icon="face" :error="$v.user.name.$error" :error-label="requiredLabel">
      <q-input  float-label="Nom" v-model="user.name" @blur="$v.user.name.$touch" />
    </q-field>
    <q-field icon="email" :error="$v.user.email.$error" :error-label="emailError">
      <q-input float-label="Email" v-model="user.email" @blur="$v.user.email.$touch" />
    </q-field>
    <q-field icon="message" helper="500 caractères max." :count="500" :error="$v.user.message.$error" :error-label="messageError">
      <q-input float-label="Message" type="textarea" :rows="5" v-model="user.message" @blur="$v.user.message.$touch" />
    </q-field>
    <div class="no-icon-padding-sub">
      <sub>*Tous les champs sont requis.</sub>
    </div>
    <div class="row justify-center no-icon-padding">
      <q-btn size="md" label="Envoyer" color="primary" :disable="$v.user.$invalid" />
    </div>
  </div>
</template>

<script>
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      user: {
        name: '',
        email: '',
        message: ''
      },
      requiredLabel: 'Champ requis.'
    }
  },
  validations: {
    user: {
      message: {
        required,
        maxLength: maxLength(500)
      },
      email: {
        required,
        email
      },
      name: { required }
    }
  },
  computed: {
    messageError () {
      if (!this.$v.user.message.required) {
        return 'Champ requis';
      } else if (!this.$v.user.message.maxLength) {
        return '500 caractères maximum.'
      }
    },
    emailError () {
      if (!this.$v.user.email.required) {
        return 'Champ requis';
      } else if (!this.$v.user.email.email) {
        return 'Email invalide'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~variables'

  .q-field
    margin: 0 0 20px 0

  .no-icon-padding
    padding-left: 44px
    &-sub
      padding-left: 44px
      margin: 0 0 20px 0
</style>
