// titles
import data from '../data/titles.json';

// styles
import '../css/reset.css';
import '../css/index.css';

// modules
import analytics from './modules/analytics';
import randomInt from './modules/randomInt';
import shareLink from './modules/shareLink';

(() => {
  const app = {
    init() {
      this.isLocal = location.href.includes('localhost') || location.href.includes('127.0.0.1');

      !this.isLocal && analytics.init();

      window.goToTitle = this.goToTitle;

      this.cacheDOM();
    },

    cacheDOM() {
      this.lastIndex = null;

      this.titleContainer = document.querySelector('.devtitle');
      this.refreshButton = document.querySelector('.refresh');
      this.tweetButton = document.querySelector('.tweet');

      this.aboutButton = document.querySelectorAll('.about-btn');
      this.aboutModal = document.querySelector('.about');

      this.bindEvents();
    },

    bindEvents() {
      this.randomTitle();

      this.refreshButton.addEventListener('click', () => this.randomTitle());

      for (const button of this.aboutButton) {
        button.addEventListener('click', () => {
          this.toggleAboutModal();
        });
      }
    },

    toggleAboutModal() {
      const isActive = this.aboutModal.classList.contains('about--active');

      if (!isActive) {
        this.aboutModal.classList.add('about--active');
        this.aboutModal.setAttribute('aria-hidden', false);
      } else {
        this.aboutModal.classList.remove('about--active');
        this.aboutModal.setAttribute('aria-hidden', true);
      }
    },

    randomTitle(index) {
      // fix for 0 index
      const fixIndex = index == 0 ? '0' : index;
      const { titles } = data;
      const { length } = titles;
      const random = !fixIndex ? randomInt(0, length - 1, this.lastIndex) : fixIndex;

      this.lastIndex = random;

      const randomized = titles[random];

      if (!randomized) return false;

      this.titleContainer.querySelector('h1').innerHTML = randomized.name;

      if (randomized.background) {
        document.body.style.backgroundColor = randomized.background;
        this.aboutModal.style.backgroundColor = randomized.background;
      } else {
        document.body.removeAttribute('style');
        this.aboutModal.removeAttribute('style');
      }

      if (randomized.color) document.body.style.color = randomized.color;
      else document.body.removeAttribute('style');

      if (randomized.credits) {
        const { credits } = randomized;

        let htmlString = '';

        htmlString += '<p>Credits to ';
        if (credits.url)
          htmlString += `<a href="${credits.url}" target="_blank" rel="noopener noreferrer">`;

        htmlString += `${credits.name}`;

        if (credits.url) htmlString += '</a>';

        htmlString += '</p>';

        this.titleContainer
          .querySelector('.devtitle__credit')
          .classList.add('devtitle__credit--visible');

        this.titleContainer.querySelector('.devtitle__credit').innerHTML = htmlString;
      } else {
        this.titleContainer
          .querySelector('.devtitle__credit')
          .classList.remove('devtitle__credit--visible');

        this.titleContainer.querySelector('.devtitle__credit').innerHTML = '';
      }

      this.tweetButton.setAttribute('href', shareLink(randomized.name));

      if (!this.isLocal) {
        analytics.sendEvent({
          hitType: 'event',
          eventCategory: 'Title',
          eventAction: 'Random title',
          eventLabel: randomized.name
        });
      }
    },

    goToTitle(index) {
      app.randomTitle(index);
    }
  };

  app.init();
})();
