const analytics = {
  init() {
    this.createTag();
  },

  createTag() {
    const script = document.createElement('script');
    script.src = 'https://www.google-analytics.com/analytics.js';
    script.async = true;
    script.onload = this.createInstance();

    document.body.appendChild(script);
  },

  createInstance() {
    window.ga =
      window.ga ||
      function() {
        (ga.q = ga.q || []).push(arguments);
      };
    ga.l = +new Date();

    ga('create', process.env.ANALYTICS_ID, 'auto');
    ga('send', 'pageview');
  },

  sendEvent(meta) {
    if (typeof ga !== 'function') {
      return setTimeout(() => analytics.sendEvent(meta), 500);
    }

    return ga('send', meta);
  }
};

export default analytics;
