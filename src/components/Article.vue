<template>
  <md-layout>
    <md-layout md-flex="100">
      <h2 class="article_title">{{ article.title }}</h2>
    </md-layout>
    <md-layout md-flex="100">
      <md-layout md-flex="60"><p class="article_date">Date: {{ article.issued }}</p></md-layout>
      <md-layout md-flex md-align="end">
        <md-button-toggle id="article-buttons">
          <md-button v-bind:class="{ 'md-toggle': article.read }" @click="toggleRead">{{ article.read ? 'Read' : 'New'}}</md-button>
          <md-button class="md-icon-button" v-bind:class="{ 'md-toggle': article.favorite }" @click="toggleFavorite">
            <md-icon>star</md-icon>
          </md-button>
        </md-button-toggle>
      </md-layout>
    </md-layout>
    <md-layout md-flex="100">
      <p v-html="article.description"></p>
    </md-layout>
  </md-layout>
</template>

<script>
export default {
  name: 'article',
  props: [ 'article_id' ],
  data () {
    return {
      article: {
         title: "Loading..",
         date: '2017-01-01',
         body: '',
         favorite: 0,
         read: 1
      },
    }
  },
  watch: {
    'article_id': 'loadArticle'
  },
  methods: {
    loadArticle() {
      this.$http.get('api/article/' + this.article_id ).then((response) => {
        console.log('API Returned: ', response, response.data)
        let article = response.data
        article.read = 1
        this.article = article
        this.setArticle({ read: 1})
      }, (response) => {
        console.log('API Error: ', response)
      });
    },
    setArticle(values) {
      console.log( "Setting Article to value: ", values)
      let cb = this.$http.post('api/article/' + this.article_id, values).then((response) => {
        console.log('API Returned: ', response, response.data)
        return response.data
      }, (response) => {
        console.log('API Error: ', response)
      });
      return cb
    },
    toggleRead() {
      let cb = this.setArticle({ read: this.article.read ? 0 : 1 })
      cb.then( (results) => {
        console.log('Results after set: ', results)
        this.article = results
      });
    },
    toggleFavorite() {
      let cb = this.setArticle({ favorite: this.article.favorite ? 0 : 1 })
      cb.then( (results) => {
        console.log('Results after set: ', results)
        this.article = results
      });
    }
  },
  created: function () {
    this.loadArticle();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.article_title {
  margin-bottom: 5px;
}
.article_date {
  margin: 3px;
}
#article-buttons {
  border-style: solid;
  border-color: black;
  border-width: 1px;
}
</style>
