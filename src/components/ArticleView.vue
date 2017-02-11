<template>
  <md-layout md-column class="navview">
    <md-layout md-row>
      <md-layout>
        <md-button class="md-icon-button md-raised md-primary" @click="navPrevArticle" v-bind:disabled="isFirst ? true : false">
          <md-icon>arrow_back</md-icon>
        </md-button>
      </md-layout>
      <md-layout md-align="end">
        <md-button id="navnext" class="md-icon-button md-raised md-primary" @click="navNextArticle" v-bind:disabled="isLast ? true : false">
          <md-icon>arrow_forward</md-icon>
        </md-button>
      </md-layout>
    </md-layout>
    <md-layout md-row>
      <md-layout>
        <rss_article :article_id="article_id" :article_index="article_index"></rss_article>
      </md-layout>
    </md-layout>
  </md-layout>
</template>

<script>
import Article from './Article'

export default {
  name: 'articleview',
  components: {
    rss_article: Article
  },
  watch: {
    '$route': 'resetIndex',
    'article_index': 'setArticleId'
  },
  methods: {
    resetIndex () {
      this.article_index = this.$route.params.index
    },
    navPrevArticle () {
      if(this.decrementIndex()) {
        this.$router.push({ name: 'article', params: { feed_id: this.$route.params.feed_id, index: this.article_index }})
      }
    },
    navNextArticle() {
      if(this.incrementIndex()) {
        this.$router.push({ name: 'article', params: { feed_id: this.$route.params.feed_id, index: this.article_index }})
      }
    },
    decrementIndex () {
      if (this.article_index > 0) {
        this.article_index--;
        this.setNavButtons()
        console.log("Index: " + this.article_index)
        return 1;
      }
      console.log("Index: " + this.article_index)
      return 0;
    },
    setNavButtons () {
      if(this.article_index == 0) {
        this.isFirst = true
      } else {
        this.isFirst = false
      }
      if ( this.article_index == (this.$root.$data.articles[this.$route.params.feed_id].length - 1)) {
        this.isLast = true
      } else {
        this.isLast = false
      }
    },
    incrementIndex () {
      if (this.article_index < this.$root.$data.articles[this.$route.params.feed_id].length - 1) {
        this.article_index++;
        this.setNavButtons()
        console.log("Index: " + this.article_index)
        return 1;
      }
      console.log("Index: " + this.article_index)
      return 0;
    },
    setArticleId () {
      this.article_id = this.$root.$data.articles[this.$route.params.feed_id][this.article_index].id
      this.setNavButtons()
    }
  },
  created: function() {
    this.setArticleId()
    console.log("passing: " + this.article_id)
  },
  data () {
    return {
      articles: [],
      article_index: this.$route.params.index,
      article_id: undefined,
      isFirst: true,
      isLast: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
