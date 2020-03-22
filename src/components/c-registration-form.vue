<template>
  <form :class="b()" @submit.prevent="onSubmitForm">
    <label :class="b('label')">
      <span :class="b('label-text')">Ihr Vorname*</span>
      <input v-model="form.firstName"
             :class="b('input', { text: true })"
             name="firstName"
             type="text">
    </label>
    <label :class="b('label')">
      <span :class="b('label-text')">Ihr Nachname*</span>
      <input v-model="form.lastName"
             :class="b('input', { text: true })"
             name="lastName"
             type="text">
    </label>
    <label :class="b('label', { street: true })">
      <span :class="b('label-text')">Strasse*</span>
      <input v-model="form.street"
             :class="b('input', { text: true })"
             name="street"
             type="text">
    </label>
    <label :class="b('label', { streetNumber: true })">
      <span :class="b('label-text')">Nr.*</span>
      <input v-model="form.streetNumber"
             :class="b('input', { text: true })"
             name="streetNumber"
             type="text">
    </label>
    <label :class="b('label', { zip: true })">
      <span :class="b('label-text')">PLZ*</span>
      <input v-model="form.zip"
             :class="b('input', { text: true })"
             name="zip"
             type="text">
    </label>
    <label :class="b('label', { city: true })">
      <span :class="b('label-text')">Ort*</span>
      <input v-model="form.city"
             :class="b('input', { text: true })"
             name="city"
             type="text">
    </label>
    <label :class="b('label')">
      <span :class="b('label-text')">Geburtsdatum*</span>
      <input v-model="form.birthDate"
             :class="b('input', { text: true })"
             name="birthDate"
             type="text">
    </label>
    <label :class="b('label')">
      <span :class="b('label-text')">Telefon*</span>
      <input v-model="form.phone"
             :class="b('input', { text: true })"
             name="phone"
             type="text">
    </label>
    <label :class="b('label')">
      <span :class="b('label-text')">E-Mail*</span>
      <input v-model="form.email"
             :class="b('input', { text: true })"
             name="email"
             type="email">
    </label>
    <label :class="b('label', { memberType: true })">
      <span :class="b('label-text')">Mitgliedschaft*</span>
      <label :class="b('radio-label')">
        <input v-model="form.memberType"
               :class="b('input', { radio: true })"
               name="memberType"
               value="Aktiv"
               type="radio">
        <span>
          Aktivmitglied (Jahresbeitrag: 100.- CHF)
        </span>
      </label>
      <label :class="b('radio-label')">
        <input v-model="form.memberType"
               :class="b('input', { radio: true })"
               name="memberType"
               value="Jungfischer"
               type="radio">
        <span>
          Jungfischer (Jahresbeitrag: 30.- CHF)
        </span>
      </label>
      <label :class="b('radio-label')">
        <input v-model="form.memberType"
               :class="b('input', { radio: true })"
               name="memberType"
               value="Passiv"
               type="radio">
        <span>
          Passivmitglied (Jahresbeitrag: 30.- CHF)
        </span>
      </label>
    </label>
    <label :class="b('label', { message: true })">
      <span :class="b('label-text')">Bemerkungen</span>
      <textarea v-model="form.message"
                :class="b('input', { textarea: true })"
                name="message"></textarea>
    </label>

    <button :class="b('button')"
            type="submit">
      Senden
    </button>

    <!-- Notification -->
    <div v-if="notification" :class="b('notification', { type: notification.type })">
      <p>{{ notification.message }}</p>
    </div>
  </form>
</template>

<script>

  /**
   * Renders the registration form and handles the database requests.
   */
  export default {
    name: 'c-registration-form',
    // components: {},
    // mixins: [],

    // props: {},
    data() {
      return {
        /**
         * @type {Object} Holds the form values.
         */
        form: {
          firstName: '',
          lastName: '',
          birthDate: '',
          street: '',
          streetNumber: '',
          zip: '',
          city: '',
          phone: '',
          email: '',
          message: '',
          memberType: 'Aktiv',
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
       * Submit form event handling.
       */
      onSubmitForm() {
        const {
          firstName, lastName, birthDate, phone, email, street, streetNumber, zip, city, memberType
        } = this.form;

        if (!firstName
          || !lastName
          || !birthDate
          || !phone
          || !email
          || !street
          || !streetNumber
          || !zip
          || !city
          || !memberType) {
          return;
        }

        this.requestIsRunning = true;

        // eslint-disable-next-line no-undef
        database.ref('/registration').push(this.form, (error) => {
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
       * Resets the form to it's initial values.
       */
      resetForm() {
        this.form.firstName = '';
        this.form.lastName = '';
        this.form.street = '';
        this.form.streetNumber = '';
        this.form.zip = '';
        this.form.city = '';
        this.form.phone = '';
        this.form.email = '';
        this.form.birthDate = '';
        this.form.message = '';
        this.form.memberType = 'Aktiv';
      },

      /**
       * Shows a notification to the user.
       *
       * @param {String} type - The notification type (error or success).
       */
      showNotification(type) {
        const errorMessage = 'Leider ist ein Fehler aufgetreten. Bitte versuchen Sie es später nochmals.';
        const successMessage = 'Vielen Dank für ihre Registrierung. Wir werden uns schnellstmöglich bei Ihnen melden.';

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
  .c-registration-form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    &__label {
      display: block;
      margin-bottom: $spacing--20;
      width: 100%;

      @include media(sm) {
        flex-grow: 1;
        flex-shrink: 0;
        flex-basis: calc(50% - 15px);
        max-width: calc(50% - 15px);
      }
    }

    &__label--memberType,
    &__label--message {
      @include media(sm) {
        flex-basis: 100%;
        max-width: 100%;
      }
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
      min-height: 150px;
    }

    &__radio-label {
      display: flex;
      align-items: center;

      input {
        max-width: 30px;
      }
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
      margin-top: $spacing--25;
      padding: $spacing--20;
      border: 2px dotted $color-primary--1;
      color: $color-grayscale--200;
      width: 100%;

      p {
        @include font($font-size--16, null, $font-weight--regular);

        color: $color-grayscale--1000;
        margin-bottom: 0;
      }
    }

    &__notification--type-success {
      background-color: rgba($color-success, 0.6);
      border-color: $color-success;
    }

    &__notification--type-error {
      background-color: $color-error;
      border-color: $color-error;
    }
  }
</style>
