<template>
  <form :class="b()" @submit.prevent="onSubmitForm">
    <label :class="b('label')">
      <span>Ihr Name</span>
      <input v-model="form.name"
             :class="b('input', { text: true })"
             name="name"
             type="text">
    </label>

    <label :class="b('label')">
      <span>E-Mail</span>
      <input v-model="form.email"
             :class="b('input', { text: true })"
             name="email"
             type="email">
    </label>

    <label :class="b('label')">
      <span>Nachricht</span>
      <textarea v-model="form.message"
                :class="b('input', { textarea: true })"
                name="message"></textarea>
    </label>

    <button :class="b('button')"
            type="submit">
      Senden
    </button>
  </form>
</template>

<script>
  import Firebase from 'firebase';

  window.database = Firebase.initializeApp({
    apiKey: 'AIzaSyCe49EcSSZXPhQpKmz9Ut-5wiqG9HnIpqY',
    authDomain: 'https://poseidon-b52a9.firebaseio.com/',
    databaseURL: 'https://poseidon-b52a9.firebaseio.com/',
    projectId: 'poseidon-b52a9',
    storageBucket: 'storageBucket',
    messagingSenderId: 'web'
  }).database().ref('/contacts');

  export default {
    name: 'c-contact-form',
    // components: {},
    // mixins: [],

    // props: {},
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: '',
        }
      };
    },

    // computed: {},
    // watch: {},

    // beforeCreate() {},
    // created() {},
    // beforeMount() {},
    // mounted() {},
    // beforeUpdate() {},
    // updated() {},
    // activated() {},
    // deactivated() {},
    // beforeDestroy() {},
    // destroyed() {},

    methods: {
      onSubmitForm() {


        console.log('database', database);

        database.push(this.form);
        // Get a reference to the database service
      /*  const url = 'https://poseidon-b52a9.firebaseio.com/';
        const data = this.form;
        const config = {};

        this.$http.post(url, data, config).then((response) => {
          console.log(response);
        });*/
      }
    },
    // render() {},
  };
</script>

<style lang="scss">
  .c-contact-form {
  }
</style>
