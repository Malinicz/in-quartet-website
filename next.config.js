const { FOLDER_PATH } = require('./constants/projectConfig');

module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? `${FOLDER_PATH}` : '',
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/en': { page: '/en' },
      '/email-send-success': {
        page: '/email-send-success',
        query: { language: 'pl' },
      },
      '/en/email-send-success': {
        page: '/email-send-success',
        query: { language: 'en' },
      },
    };
  },
};
