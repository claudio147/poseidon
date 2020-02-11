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
     * @type {Array.<Object>} Holds the list of download items.
     */
    downloads: [],

    /**
     * @type {Array.<Object>} Holds the list of images for the gallery.
     */
    galleryImages: [],

    /**
     * @type {Object} Holds the request states.
     */
    runningRequests: {
      fetchNews: false,
      fetchDownloads: false,
      fetchGalleryImages: false,
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
     * Gets the list of downloads.
     *
     * @param {Object} state - The vuex store state.
     *
     * @returns {Array.<Object>}
     */
    downloads: state => state.downloads || [],

    /**
     * Gets the list of gallery images.
     *
     * @param {Object} state - The vuex store state.
     *
     * @returns {Array.<Object>}
     */
    galleryImages: state => state.galleryImages || [],

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
     * Updates the list of downloads.
     *
     * @param {Object} state - Current state object.
     * @param {Array} payload - The list of download entries.
     */
    setDownloads(state, payload) {
      state.downloads = payload;
    },

    /**
     * Updates the gallery images.
     *
     * @param {Object} state - Current state object.
     * @param {Array} payload - The list of images for the gallery.
     */
    setGalleryImages(state, payload) {
      state.galleryImages = payload;
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
        starts_with: 'news',
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
            date: new Date(story.content.date.split('-').join('/')),
            keywords: story.content.keywords,
          })));
          commit('setRunningRequest', { id: 'fetchnews', isRunning: false });
        }
      }, () => {
        commit('setRunningRequest', { id: 'fetchnews', isRunning: false });
      });
    },

    /**
     * Fetches the downloads (documents) from the CMS.
     *
     * @param {Object} context - The vuex context object.
     * @param {Object} context.commit - The current commit object.
     * @param {Object} payload - The payload object.
     * @param {Object} payload.vm - The Vue instance.
     */
    fetchDownloads({ commit }, { vm }) {
      commit('setRunningRequest', { id: 'fetchDownloads', isRunning: true });

      vm.$storyblok.getAll({
        starts_with: 'documents',
        version: 'published'
      }, (data) => {
        const { stories } = data || {};

        if (Array.isArray(stories)) {
          commit('setDownloads', stories.map(story => ({
            id: story.slug,
            name: story.content && story.content.fileName,
            src: story.content && story.content.file,
          })));
          commit('setRunningRequest', { id: 'fetchDownloads', isRunning: false });
        }
      }, () => {
        commit('setRunningRequest', { id: 'fetchDownloads', isRunning: false });
      });
    },

    /**
     * Fetches the images (gallery) from the CMS.
     *
     * @param {Object} context - The vuex context object.
     * @param {Object} context.commit - The current commit object.
     * @param {Object} payload - The payload object.
     * @param {Object} payload.vm - The Vue instance.
     */
    fetchGallery({ commit }, { vm }) {
      commit('setRunningRequest', { id: 'fetchGalleryImages', isRunning: true });

      vm.$storyblok.getAll({
        starts_with: 'gallery',
        version: 'published'
      }, (data) => {
        const { stories } = data || {};

        if (Array.isArray(stories)) {
          const images = [];

          stories.forEach(story => images.push(...story.content.images));

          commit('setGalleryImages', images);
          commit('setRunningRequest', { id: 'fetchGalleryImages', isRunning: false });
        }
      }, () => {
        commit('setRunningRequest', { id: 'fetchGalleryImages', isRunning: false });
      });
    },
  }
});

export default store;
