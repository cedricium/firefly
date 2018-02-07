<h1 align="center">firefly</h1>
<h4 align="center">Vue.js / Express.js Fullstack Web Application</h4>

Firefly is a fullstack web application clone of [Awwwards](https://www.awwwards.com) and [siteInspire](http://www.siteinspire.com) who's purpose is to **"shed light on inspiring sites from around the web"**. Firefly was a testbed for me to practice and gain experience using a JavaScript framework (Vue.js) as well as continue honing my general web development skills. As many of you may have guessed, firefly is in fact named after the greatest sci-fi Western show in existence with the same name, [Firefly](https://en.wikipedia.org/wiki/Firefly_(TV_series)).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer.

### Installing

From your command line:

```bash
# Clone this repository
$ git clone https://github.com/cedricium/firefly

# Go into the repository
$ cd firefly/

# Install dependencies for the client (frontend)
$ cd client/ && npm install

# ... and for the server (backend)
$ cd ../server/ && npm install

# Run the app
$ npm run dev # client/ ==> Your application is running here: http://localhost:8080
$ npm start   # server/ ==> Server started on port: 8081
```

## Deployment

Firefly will be able to be hosted on Heroku - check back later for instructions on deploying to Heroku.

## Built With

* [Vue.js](https://vuejs.org/) - The frontend web framework used
* [Buefy](https://buefy.github.io/#/) - Vue.js components styled using Bulma
* [Bulma](https://bulma.io/) - CSS framework used for styling the frontend
* [Sequelize](http://docs.sequelizejs.com/) - Promise-based ORM used for Node.js
* [Express.js](http://expressjs.com/) - Web application framework used for building the backend and API

## Contributing

Your contributions are always welcome! See an issue you want to tackle or have an idea for a feature you'd like implemented? Just open a pull-request with a short explanation of the changes and I'd be happy to review it. :tada:

## Authors

* **Cedric Amaya** - *Architect - initial work* - [cedricium](https://github.com/cedricium)

See also the list of [contributors](https://github.com/cedricium/firefly/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

* Cody Seibert (https://github.com/codyseibert) - much thanks for the amazing [freeCodeCamp YouTube series](https://www.youtube.com/playlist?list=PLWKjhJtqVAbnadueQ-C5keMQQiQau_i0D).
* Vue.js reddit community (https://www.reddit.com/r/vuejs/) - everyone there was invaluable whenever I was stuck
