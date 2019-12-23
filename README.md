# :boom: Developer Titles

> `['fictional', 'awesome', 'random', 'funny', 'obsolete']` developer titles


## :scroll: About
After years viewing crazy job and developer titles on social media, I've decided to merge them in a single website.


## :gem: Stack
This site is create using [Vanilla JS](http://vanilla-js.com/) (ES6) and [PostCSS](https://postcss.org/), with [Webpack](https://webpack.js.org/). It uses [GitHub Pages](https://pages.github.com/).

I like to use [yarn](https://yarnpkg.com) as the package manager, but feel free to use wether you want (npm || yarn).

> Oh but why not creating it with React or Vue?
>> Because I didn't want to :smile:


## :pencil: Contributing
If you want to add some titles, follow the steps below:

- Fork the repo
- Create a new branch
- Do the work
- Fill a PR, assign it to you and, if possible, write a cool description
- Wait for the review

After that, if your request doesn't offend anyone, your title will be able to be part of the great array.

**Don't be afraid to fill some issues, if you want! :heart:**

> For the colors, I like to use [colorion](http://colorion.co).

If you're only looking for the titles, [here they are](https://github.com/jlozovei/developer-titles/blob/master/src/data/titles.json). :rocket:


## :computer: Developing
After forking and cloning the project in your local environment, run the following commands:

```bash
# install dependencies
yarn
# or npm i

# run the project at localhost:8000
yarn start
# or npm start
```

To add a new title, go to [`src/data/titles.json`](https://github.com/jlozovei/developer-titles/blob/master/src/data/titles.json) and add a new title object to the array. It's important the title to have, at least, the `name` key - because if the title hasn't a name, then it shouldn't be here; `background`, `color` and `credits` keys are optional.

Here's how a new title object should look:

```json
{
  "name": "Your title name",
  "background": "Your title hex background",
  "color": "Your title hex background",
  "credits": {
    "name": "Who you want to credit (name, nick or slug)",
    "url": "The person's profile URL (linkedin, github...)"
  }
}
```


## :warning: Disclaimer
The goal here is to have fun. Don't use it to be a jerk on other people's work/job!


## :boom: Inspiration and Related Work
When I was creating this site, I faced some related content on the internet. Like:

- [Pseudo Design Titles](https://designtitles.com/)
- [bullshit job titles generator](https://bullg.it/bullshit-job-titles/)
- [@kutyel/superb-developer-titles](https://github.com/kutyel/superb-developer-titles)


## :closed_lock_with_key: License
Licensed under the [MIT](https://github.com/jlozovei/developer-titles/blob/master/LICENSE).
