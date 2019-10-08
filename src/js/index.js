// titles
import data from '../data/titles.json';

// styles
import '../css/reset.css';
import '../css/index.css';

(() => {
  const app = {
    init() {
      this.cacheDOM();
    },

    cacheDOM() {
      this.lastIndex = null;

      this.titleContainer = document.querySelector('.title-container');
      this.refreshButton = document.querySelector('.refresh');
      this.shareLinkButton = document.querySelector('.share');

      this.bindEvents();
    },

    bindEvents() {
      this.randomTitle();

      this.refreshButton.addEventListener('click', () => this.randomTitle());
    },

    randomTitle() {
      const { titles } = data;

      const { length } = titles;
      const randomInt = this.randomInt(0, length - 1);
      this.lastIndex = randomInt;

      const randomized = titles[randomInt];

      this.titleContainer.innerHTML = randomized.title;
      document.body.style.backgroundColor = randomized.background;
      document.body.style.color = randomized.color;

      this.shareLinkButton.setAttribute('href', this.generateShareLink(randomized.title));
    },

    generateShareLink(title) {
      return encodeURI(
        `https://twitter.com/intent/tweet?url=https://developertitles.com/&text=I'm the "${title}". Check your title at Developer Titles&related=jlozovei&hashtags=developer,developertitles`
      );
    },

    randomInt(min, max) {
      const random = Math.floor(Math.random() * (max - min + 1)) + min;

      if (random === this.lastIndex) return this.randomInt(min, max);
      else return random;
    }
  };

  app.init();
})();
