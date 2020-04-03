# :boom: Developer Titles

> `['fictional', 'awesome', 'random', 'funny', 'obsolete']` developer titles

<br />
<a href="https://www.producthunt.com/posts/developer-titles?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-developer-titles" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=178863&theme=dark" alt="Developer Titles - Awesome developer titles for bios, descriptions and statuses | Product Hunt Embed" style="width: 250px; height: 54px;" width="250px" height="54px" /></a>
<br />


## :scroll: About
After years viewing crazy job and developer titles on social media, I've decided to merge them in a single website.


## :gem: Stack
This site is create using [Vanilla JS](http://vanilla-js.com/) (ES6) and [PostCSS](https://postcss.org/), with [Webpack](https://webpack.js.org/). It uses [GitHub Pages](https://pages.github.com/).

I'm using [npm](https://npmjs.com) as the package manager.

> Oh but why not creating it with React or Vue?
>> Because I didn't want to :smile:


## :pencil: Contributing
You can contribute to this project following the steps below:

- Fork the repo
- Create a new branch
- Do the work
- Fill a PR, assign it to you and, if possible, write a cool description
- Wait for the review

Also, take a look at the [contributing guide](https://github.com/jlozovei/developer-titles/blob/master/.github/CONTRIBUTING.md)!

After that, if your request doesn't offend anyone, your title will be able to be part of the great array.

**Don't be afraid to fill some issues, if you want! :heart:**

> For the colors, I like to use [colorion](http://colorion.co).

If you're only looking for the titles, [here they are](https://github.com/jlozovei/developer-titles/blob/master/src/data/titles.json). :rocket:


## :computer: Developing
After forking and cloning the project in your local environment, run the following commands:

```bash
# install dependencies
npm i
# or yarn

# run the project at localhost:8000
npm start
# or yarn start
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
- [Silicon Valley Job Title Generator](https://siliconvalleyjobtitlegenerator.tumblr.com/)


## :closed_lock_with_key: License
Licensed under the [MIT](https://github.com/jlozovei/developer-titles/blob/master/LICENSE).
