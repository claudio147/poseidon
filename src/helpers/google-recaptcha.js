import Vue from 'vue';

/**
 * Does the google recaptcha check.
 *
 * @param {String} action - The action parameter.
 *
 * @returns {Promise<unknown>}
 */
export default function googleRecaptcha(action = 'form') {
  const apiKey = '6LfFFuMUAAAAABUJrtxbL0RvDMxvf0BLRyuMT0L9';
  const apiUrl = 'https://us-central1-poseidon-b52a9.cloudfunctions.net/sendRecaptcha';

  return new Promise((resolve, reject) => {
    // eslint-disable-next-line no-undef
    grecaptcha.execute(apiKey, { action })
      .then((token) => {
        Vue.axios.get(`${apiUrl}?token=${token}`)
          .then((response) => {
            const { score } = response.data;

            // Take action here based on score.
            if (score > 0.5) {
              resolve();
            } else {
              reject();
            }
          })
          .catch(() => {
            reject();
          });
      });
  });
}
