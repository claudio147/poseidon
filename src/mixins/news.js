/**
 * This mixin handles the fetchNews logic if the vuex store is empty.
 */
export default {
  created() {
    if (!this.newsList.length) {
      this.$store.dispatch('fetchNews', { vm: this });
    }
  },

  data() {
    return {
      /**
       * @type {String|null} Holds the id of a specific news entry.
       */
      newsId: null,
    };
  },

  computed: {
    /**
     * Gets the list of all news.
     *
     * @returns {Array.<Object>}
     */
    newsList() {
      return this.$store.getters.news || [];
    },

    /**
     * Gets the specific news entry which gets defined by the data prop "newsId".
     *
     * @returns {Object|null}
     */
    newsEntry() {
      const { newsId, newsList } = this;

      if (newsId && newsList.length) {
        return this.$store.getters.getNewsById(newsId);
      }

      return null;
    },
  },
};
