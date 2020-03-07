<template>
  <div :class="b()">
    <!-- Form -->
    <form :class="b('form')" @submit.prevent="onSubmitForm">
      <label :class="b('label')">
        <span :class="b('label-text')">Ihr Name*</span>
        <input v-model="form.name"
               :class="b('input', { text: true })"
               name="name"
               type="text">
      </label>

      <label :class="b('label')">
        <span :class="b('label-text')">E-Mail*</span>
        <input v-model="form.email"
               :class="b('input', { text: true })"
               name="email"
               type="email">
      </label>

      <label :class="b('label')">
        <span :class="b('label-text')">Telefon</span>
        <input v-model="form.phone"
               :class="b('input', { text: true })"
               name="phone"
               type="text">
      </label>

      <label :class="b('label')">
        <span :class="b('label-text')">Nachricht*</span>
        <textarea v-model="form.message"
                  :class="b('input', { textarea: true })"
                  name="message"></textarea>
      </label>

      <button :class="b('button')"
              type="submit">
        Senden
      </button>
    </form>

    <!-- Notification -->
    <div v-if="notification" :class="b('notification', { type: notification.type })">
      <p>{{ notification.message }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'c-contact-form',
    // components: {},
    // mixins: [],

    // props: {},
    data() {
      return {
        /**
         * @type {Object} Holds the form values.
         */
        form: {
          name: '',
          email: '',
          message: '',
          phone: '',
        },

        /**
         * @type {Boolean} Shows if a request is currently running.
         */
        requestIsRunning: false,

        /**
         * @type {Object|null} Holds the optional notification for the user.
         */
        notification: null,
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
      /**
       * Submits the form.
       */
      onSubmitForm() {
        const { name, email, message } = this.form;

        if (!name || !email || !message) {
          return;
        }

        this.requestIsRunning = true;

        // eslint-disable-next-line no-undef
        database.ref('/contacts').push(this.form, (error) => {
          this.requestIsRunning = false;
          this.resetForm();

          if (error) {
            this.showNotification('error');
            throw new Error(error);
          } else {
            this.showNotification('success');
          }
        });
      },

      /**
       * Resets the form fields.
       */
      resetForm() {
        this.form.name = '';
        this.form.email = '';
        this.form.message = '';
      },

      /**
       * Shows a notification to the user.
       *
       * @param {String} type - The notification type (error or success).
       */
      showNotification(type) {
        const errorMessage = 'Leider ist ein Fehler aufgetreten. Bitte versuchen Sie es später nochmals.';
        const successMessage = 'Vielen Dank für die Anfrage. Wir werden uns schnellstmöglich bei Ihnen melden.';

        this.notification = {
          type,
          message: type === 'error' ? errorMessage : successMessage,
        };

        setTimeout(() => {
          this.notification = null;
        }, 5000);
      }
    },
    // render() {},
  };
</script>

<style lang="scss">
  .c-contact-form {
    &__form {

    }

    &__label {
      display: block;
      margin-bottom: $spacing--20;
    }

    &__label-text {
      display: block;
      color: $color-primary--1;
    }

    &__input {
      width: 100%;
      border: 1px solid $color-secondary--2;
      padding: $spacing--10 $spacing--15;
      font-size: $font-size--18;
      color: $color-grayscale--200;

      &:focus {
        outline: none;
        border-color: $color-secondary--2;
      }
    }

    &__input--textarea {
      min-height: 300px;
    }

    &__button {
      @include font($font-size--22, null, $font-weight--bold);

      background-color: $color-secondary--2;
      color: $color-grayscale--1000;
      cursor: pointer;
      width: 100%;
      border: 0;
      min-height: 50px;

      &:hover {
        background-color: $color-primary--1;
      }

      &:focus {
        outline: none;
      }
    }

    &__notification {
      margin-top: 50px;
      padding: $spacing--20;
      border: 1px solid $color-primary--1;
      color: $color-grayscale--200;
      border-radius: 3px;

      p {
        margin-bottom: 0;
      }
    }

    &__notification--type-success {
      background-color: $color-success;
      border-color: $color-success;
    }

    &__notification--type-error {
      color: $color-grayscale--1000;
      background-color: $color-error;
      border-color: $color-error;
    }
  }
</style>
