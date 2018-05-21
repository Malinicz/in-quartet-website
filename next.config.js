const { PROJECT_NAME } = require('./constants/projectConfig');

module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? `/${PROJECT_NAME}` : '',
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/en': { page: '/en' },
      '/email-send-success': { page: '/email-send-success' },
    };
  },
};
