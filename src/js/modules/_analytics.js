const analytics = {
  init() {
    this.createTag();
  },

  createTag() {
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.ANALYTICS_ID}`;
    script.async = true;
    script.onload = this.createDataLayer();

    document.body.appendChild(script);
  },

  createDataLayer() {
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }

    gtag('js', new Date());

    gtag('config', process.env.ANALYTICS_ID);
  },

  sendEvent(meta) {
    if (typeof ga !== 'function') {
      return setTimeout(() => analytics.sendEvent(meta), 500);
    }

    return ga('send', 'event', meta);
  }
};

export default analytics;
