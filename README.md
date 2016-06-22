[https://github-leaderboards.herokuapp.com/](https://github-leaderboards.herokuapp.com/)

![GitHub Leaderboard gif](http://i.imgur.com/VqNz5d8.gif | width=100)
#### Look up a leaderboard showing which of the people you follow has the most Repositories and Followers

To install:

>`npm install`

>`npm start`

To create build after editing:

> `npm install -g gulp`

>`gulp build`

#### The custom api for this project is written in node/express and can be found here: [https://github.com/baumant/github-leaderboards/blob/master/app/controllers/github.js](https://github.com/baumant/github-leaderboards/blob/master/app/controllers/github.js)

#### And the GitHub authentication can be seen here: [https://github.com/baumant/github-leaderboards/blob/master/app/controllers/ghAuth.js](https://github.com/baumant/github-leaderboards/blob/master/app/controllers/ghAuth.js) 

#### The authentication flow was written following GitHub's oAuth Docs: [https://developer.github.com/v3/oauth/](https://developer.github.com/v3/oauth/)

#### If you see any improvements, don't hesitate to create a PR, or send me an email at tebauman@gmail.com