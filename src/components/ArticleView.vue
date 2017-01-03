<template>
  <div class="articleview">
    <md-layout md-row>
      <md-layout>
        <md-button class="md-icon-button md-raised md-primary" @click="decrementIndex">
          <md-icon>arrow_back</md-icon>
        </md-button>
      </md-layout>
      <md-layout>
        <md-button class="md-icon-button md-raised md-primary on-the-right" @click="incrementIndex">
          <md-icon>arrow_forward</md-icon>
        </md-button>
      </md-layout>
    </md-layout>
    <md-layout md-row>
      <md-layout>
        <rss_article :article_id="articles[article_index].article_id"></rss_article>
      </md-layout>
    </md-layout>
  </div>
</template>

<script>
import Article from './Article'

export default {
  name: 'articleview',
  components: {
    rss_article: Article
  },
  watch: {
    '$route': 'resetIndex'
  },
  methods: {
    resetIndex () {
      this.article_index = this.$route.params.index
    },
    decrementIndex () {
      if (this.article_index > 0) {
        this.article_index--;
      }
    },
    incrementIndex () {
      if (this.article_index < this.articles.length - 1) {
        this.article_index++;
      }
    }
  },
  data () {
    return {
      articles: [
        {
           title: "Interesting Article",
           article_id: 123
        },
        {
           title: "Funny Article",
           article_id: 456
        },
        {
          title: "Interesting Funny Scientific Article",
          article_id: 789
        }
      ],
      article_index: this.$route.params.index
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.articleview {
  margin: 20px;
}
.on-the-right {
  position: absolute;
  float: right;
  right: 20px;
}
</style>
