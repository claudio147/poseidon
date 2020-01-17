import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  // State
  state: {
    /**
     * @type {Array.<Object>} Holds a list of news articles.
     */
    news: [],

    /**
     * @type {Object} Holds the request states.
     */
    runningRequests: {
      fetchNews: false,
    }
  },

  // Getters
  getters: {
    /**
     * Gets tne news articles.
     *
     * @param {Object} state - The vuex store state.
     *
     * @returns {Array}
     */
    news(state) {
      return Array.isArray(state.news)
        ? state.news.sort((valueA, valueB) => valueA.date.getTime() - valueB.date.getTime()).reverse()
        : [];
    },

    /**
     * Gets a specific news entry by the given id.
     *
     * @param {Object} state - The vuex store state.
     *
     * @returns {Object}
     */
    getNewsById: state => entryId => state.news.find(entry => entry.id === entryId),

    /**
     * Gets an object with all requests and their state.
     *
     * @param {Object} state - Current state object.
     *
     * @returns {Object}
     */
    getRunningRequests: state => state.runningRequests,

    /**
     * Returns a flag if a request is currently running for this module.
     *
     * @param {Object} state - Current state object.
     *
     * @returns {Boolean}
     */
    getRequestIsRunning: state => Object.values(state.runningRequests).includes(true),
  },

  // Mutations
  mutations: {
    /**
     * Updates the news list in the store.
     *
     * @param {Object} state - Current state object.
     * @param {Array} payload - The list of news entries.
     */
    setNews(state, payload) {
      state.news = payload;
    },

    /**
     * Sets the state of a request.
     *
     * @param {Object} state - Current state object.
     * @param {Object} payload - Payload object.
     * @param {String} payload.id - Identifier of the request.
     * @param {Boolean} payload.isRunning - State of the request.
     */
    setRunningRequest(state, { id, isRunning }) {
      state.runningRequests[id] = isRunning;
    },
  },

  // Actions
  actions: {
    /**
     * Fetches the news articles from the CMS.
     *
     * @param {Object} context - The vuex context object.
     * @param {Object} context.commit - The current commit object.
     * @param {Object} payload - The payload object.
     * @param {Object} payload.vm - The Vue instance.
     */
    fetchNews({ commit }, { vm }) {
      commit('setRunningRequest', { id: 'fetchnews', isRunning: true });

      vm.$storyblok.getAll({
        slug: 'news',
        version: 'published'
      }, (data) => {
        const { stories } = data || {};

        if (Array.isArray(stories)) {
          commit('setNews', stories.map(story => ({
            id: story.slug,
            title: story.content.title,
            image: {
              src: story.content.image,
              alt: '',
            },
            teaserText: story.content.teaserText,
            text: story.content.text,
            date: new Date(story.content.date),
          })));
          commit('setRunningRequest', { id: 'fetchnews', isRunning: false });
        }
      }, () => {
        commit('setRunningRequest', { id: 'fetchnews', isRunning: false });
      });
    }
  }
});

export default store;
