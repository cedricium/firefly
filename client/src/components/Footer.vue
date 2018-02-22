<template>
  <footer class="footer">
    <div class="columns">
      <div class="column is-4 about">
        <div class="logo"></div>
        <p class="motto">Inspiring sites from around the web.</p>
        <div class="copy">
          <p>We aim to collect the coolest websites in order to help creatives
            find the inspiration and motivation to make even cooler stuff.
          </p>
        </div>
      </div>
      <div class="column is-4 foss">
        <p>Firefly is <span class="highlight">open-source</span>, ⭐️ it on GitHub:</p>
        <iframe src="https://ghbtns.com/github-btn.html?user=cedricium&repo=firefly&type=star&count=true&size=large"
          frameborder="0" scrolling="0" width="160px" height="30px"></iframe>
        <br />
        <small>Special thanks to <span class="highlight">Cody Seibert</span> (<a href="https://www.twitter.com/codylseibert" target="_blank">@CodyLSeibert</a>) for the awesome Vue.js / Express.js tutorial.</small>
      </div>
      <div class="column is-4 info">
        <a href="https://bulma.io/">
          <img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" height="24" width="128">
        </a>
        <br />
        <small>Powered by <a href="https://vuejs.org" class="vue" target="_blank"><span class="green">Vue</span><span class="blue">.js</span></a></small>
        <br />
        <small>Website content licensed <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a></small>
      </div>
    </div>
    <div class="container">
      <div class="content has-text-centered">
        <p>Made with ❤️ by <a href="http://cedricamaya.me" target="_blank">Cedric Amaya</a>. All screenshots &copy; of their respective owners.</p>
      </div>
    </div>
  </footer>
</template>

<script>
</script>

<style scoped>
footer.footer {
  background: #fff;
  padding-bottom: 2rem;
  color: hsl(0, 0%, 40%);
}

div.column.about {
  position: relative;
}

div.column.about div.logo {
  position: absolute;
  background-image: url('../assets/firefly_logo.png');
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 150px;
  width: 150px;
  height: 30px;
}

div.column.about p.motto {
  position: absolute;
  top: 45px;
  left: 10px;
  color: #7957d5;
}

div.column.about div.copy {
  margin-top: 4.25rem;
}

/* Set text to align left on smaller devices */
@media screen and (max-width: 769px) {
  div.content.has-text-centered {
    text-align: left !important;
  }
}

div.column.foss *,
div.column.info * {
  margin-bottom: 5px;
}

div.column.foss span.highlight {
  color: hsl(0, 0%, 15%);
  font-weight: bold;
}

div.column.info a.vue span.green { color: #42b883; }
div.column.info a.vue span.blue { color: #35495e; }
</style>
