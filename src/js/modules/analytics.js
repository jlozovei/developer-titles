const analytics = {
  sendEvent(action, meta) {
    if (typeof gtag !== 'function') {
      return setTimeout(() => analytics.sendEvent(action, meta), 500);
    }

    return gtag('event', action, meta);
  }
};

export default analytics;
