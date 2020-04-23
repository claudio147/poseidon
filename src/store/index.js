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
     * @type {Array.<Object>} Holds the list of events.
     */
    events: [],

    /**
     * @type {Array.<Object>} Holds the list of partner links.
     */
    links: [],

    /**
     * @type {Array.<Object>} Holds the list of leading board members.
     */
    leadingBoardMembers: [],

    /**
     * @type {Array.<Object>} Holds the list of persons which are supervisors for the talents.
     */
    talentSupervisors: [],

    /**
     * @type {Array.<Object>} Holds the list of text over the whole page.
     */
    texts: [],

    /**
     * @type {Object} Holds the request states.
     */
    runningRequests: {
      fetchNews: false,
      fetchDownloads: false,
      fetchGalleryImages: false,
      fetchEvents: false,
      fetchLinks: false,
      fetchMembers: false,
      fetchTalentSupervisors: false,
      fetchTexts: false,
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
     * Gets the list of events.
     *
     * @param {Object} state - The vuex store state.
     *
     * @returns {Array.<Object>}
     */
    events(state) {
      return Array.isArray(state.events)
        ? state.events.sort((valueA, valueB) => valueA.unix - valueB.unix)
        : [];
    },

    /**
     * Gets the list of links.
     *
     * @param {Object} state - The vuex store state.
     *
     * @returns {Array.<Object>}
     */
    links: state => state.links || [],

    /**
     * Gets the list of leading board members.
     *
     * @param {Object} state - The vuex store state.
     *
     * @returns {Array.<Object>}
     */
    getLeadingBoardMembers: state => state.leadingBoardMembers || [],

    /**
     * Gets the list of talent supervisors.
     *
     * @param {Object} state - The vuex store state.
     *
     * @returns {Array.<Object>}
     */
    getTalentSupervisors: state => state.talentSupervisors || [],

    /**
     * Gets the list of texts.
     *
     * @param {Object} state - The vuex store state.
     *
     * @returns {Array.<Object>}
     */
    getTexts: state => state.texts || [],

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
     * Updates the events in the state.
     *
     * @param {Object} state - Current state object.
     * @param {Array.<Object>} payload - The list of events.
     */
    setEvents(state, payload) {
      state.events = payload;
    },

    /**
     * Updates the links in the state.
     *
     * @param {Object} state - Current state object.
     * @param {Array.<Object>} payload - The list of links.
     */
    setLinks(state, payload) {
      state.links = payload;
    },

    /**
     * Updates the leading board members.
     *
     * @param {Object} state - Current state object.
     * @param {Array.<Object>} payload - The list of members.
     */
    setLeadingBoardMembers(state, payload) {
      state.leadingBoardMembers = payload;
    },

    /**
     * Updates the talent supervisor members.
     *
     * @param {Object} state - Current state object.
     * @param {Array.<Object>} payload - The list of members.
     */
    setTalentSupervisors(state, payload) {
      state.talentSupervisors = payload;
    },

    /**
     * Updates the list of texts.
     *
     * @param {Object} state - The vuex store state.
     * @param {Array.<Object>} payload - The list of texts.
     */
    setTexts(state, payload) {
      state.texts = payload;
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
            ranking: story.content.ranking,
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
          commit('setGalleryImages', stories.map(story => ({
              id: story.uuid,
              title: story.content.title,
              text: story.content.description,
              images: story.content.images.map(image => ({
                url: image.filename,
                thumbnailUrl: `https://img2.storyblok.com/540x540/smart/${image.filename.split('//a.storyblok.com/')[1]}`,
                alt: image.name
              }))
            })));
          commit('setRunningRequest', { id: 'fetchGalleryImages', isRunning: false });
        }
      }, () => {
        commit('setRunningRequest', { id: 'fetchGalleryImages', isRunning: false });
      });
    },

    /**
     * Fetches the event from the CMS.
     *
     * @param {Object} context - The vuex context object.
     * @param {Object} context.commit - The current commit object.
     * @param {Object} payload - The payload object.
     * @param {Object} payload.vm - The Vue instance.
     */
    fetchEvents({ commit }, { vm }) {
      commit('setRunningRequest', { id: 'fetchEvents', isRunning: true });

      vm.$storyblok.getAll({
        starts_with: 'events',
        version: 'published'
      }, (data) => {
        const { stories } = data || {};

        if (Array.isArray(stories)) {
          const events = stories.map(story => ({
            id: story.uuid,
            title: story.content.title,
            text: story.content.text,
            image: story.content.image,
            date: new Date(story.content.date.split('-').join('/')),
            unix: new Date(vm.$dayjs(story.content.date).format()).getTime(),
          }));

          commit('setEvents', events.filter(event => event.date && event.title));
          commit('setRunningRequest', { id: 'fetchEvents', isRunning: false });
        }
      }, () => {
        commit('setRunningRequest', { id: 'fetchEvents', isRunning: false });
      });
    },

    /**
     * Fetches the links from the CMS.
     *
     * @param {Object} context - The vuex context object.
     * @param {Object} context.commit - The current commit object.
     * @param {Object} payload - The payload object.
     * @param {Object} payload.vm - The Vue instance.
     */
    fetchLinks({ commit }, { vm }) {
      commit('setRunningRequest', { id: 'fetchLinks', isRunning: true });

      vm.$storyblok.getAll({
        starts_with: 'links',
        version: 'published'
      }, (data) => {
        const { stories } = data || {};

        if (Array.isArray(stories)) {
          commit('setLinks', stories.map(story => ({
            id: story.uuid,
            order: parseInt(story.content.order, 10),
            title: story.content.title,
            links: story.content.links,
          })));
          commit('setRunningRequest', { id: 'fetchLinks', isRunning: false });
        }
      }, () => {
        commit('setRunningRequest', { id: 'fetchLinks', isRunning: false });
      });
    },

    /**
     * Fetches the members from the CMS.
     *
     * @param {Object} context - The vuex context object.
     * @param {Object} context.commit - The current commit object.
     * @param {Object} payload - The payload object.
     * @param {Object} payload.vm - The Vue instance.
     */
    fetchMembers({ commit }, { vm }) {
      commit('setRunningRequest', { id: 'fetchMembers', isRunning: true });

      vm.$storyblok.getAll({
        starts_with: 'board',
        version: 'published'
      }, (data) => {
        const { stories } = data || {};

        if (Array.isArray(stories)) {
          const { persons } = stories[0].content || {};

          if (persons) {
            commit('setLeadingBoardMembers', persons.map(person => ({
              id: person.uuid,
              name: person.name,
              function: person.function,
              email: person.email,
              image: person.image,
              phone: person.phone,
            })));
          }

          commit('setRunningRequest', { id: 'fetchMembers', isRunning: false });
        }
      }, () => {
        commit('setRunningRequest', { id: 'fetchMembers', isRunning: false });
      });
    },

    /**
     * Fetches the members from the CMS.
     *
     * @param {Object} context - The vuex context object.
     * @param {Object} context.commit - The current commit object.
     * @param {Object} payload - The payload object.
     * @param {Object} payload.vm - The Vue instance.
     */
    fetchTalentSupervisors({ commit }, { vm }) {
      commit('setRunningRequest', { id: 'fetchTalentSupervisors', isRunning: true });

      vm.$storyblok.getAll({
        starts_with: 'jungfischer/jungfischer-betreuung',
        version: 'published'
      }, (data) => {
        const { stories } = data || {};

        if (Array.isArray(stories)) {
          const { persons } = stories[0].content || {};

          if (persons) {
            commit('setTalentSupervisors', persons.map(person => ({
              id: person.uuid,
              name: person.name,
              function: person.function,
              email: person.email,
              image: person.image,
              phone: person.phone,
            })));
          }

          commit('setRunningRequest', { id: 'fetchTalentSupervisors', isRunning: false });
        }
      }, () => {
        commit('setRunningRequest', { id: 'fetchTalentSupervisors', isRunning: false });
      });
    },

    /**
     * Fetches the texts.
     *
     * @param {Object} context - The vuex context object.
     * @param {Object} context.commit - The current commit object.
     * @param {Object} payload - The payload object.
     * @param {Object} payload.vm - The Vue instance.
     */
    fetchTexts({ commit }, { vm }) {
      commit('setRunningRequest', { id: 'fetchTexts', isRunning: true });

      vm.$storyblok.getAll({
        starts_with: 'text/',
        version: 'published'
      }, (data) => {
        const { stories } = data || {};

        if (Array.isArray(stories)) {
          commit('setTexts', stories.map(story => ({
            id: story.id,
            slug: story.slug,
            text: story.content.text,
          })));

          commit('setRunningRequest', { id: 'fetchTalentSupervisors', isRunning: false });
        }
      }, () => {
        commit('setRunningRequest', { id: 'fetchTalentSupervisors', isRunning: false });
      });
    },
  }
});

export default store;
