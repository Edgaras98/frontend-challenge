<template>
  <div class="form">
    <b-form @submit="$emit('form-submit', form)" @reset="formReset">

        <b-form-input
         class="form-input"
         v-model="form.title"
         :placeholder="titlePlaceholder"
         required
         />

        <b-form-textarea
         class="form-input"
         v-model="form.body"
         :placeholder="bodyPlaceholder"
         required
         />

        <div class="form-buttons">
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
        </div>
    </b-form>
  </div>
</template>

<script>


  export default {
    name: 'Form',
    props:{
      titlePlaceholder: String,
      bodyPlaceholder: String,
    },

    data() {
      return {
        form: {
          title: '',
          body: '',
          userID: 1,
        },
        show: true
      }
    },
    methods: {
      formReset(event) {
        event.preventDefault()
        this.form.title = ''
        this.form.body = ''
      },
    }
  }
</script>

<style scoped>
.form{
  max-width: 50%;
  margin: 0 auto;
  padding: 2rem;
}

.form-input{
  margin-bottom: 2rem;
}

.form-buttons{
  display: flex;
  justify-content: space-between;
}
</style>
