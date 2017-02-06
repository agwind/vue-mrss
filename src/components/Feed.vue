<template>
  <div class="navview">
    <md-layout md-row v-if="max_pages > 1">
      <md-layout>
        <md-button class="md-icon-button md-raised md-primary" @click="navPrevFeeds" v-bind:disabled="isFirst">
          <md-icon>arrow_back</md-icon>
        </md-button>
      </md-layout>
      <md-layout>
        <md-button id="navnext" class="md-icon-button md-raised md-primary on-the-right" @click="navNextFeeds" v-bind:disabled="isLast">
          <md-icon>arrow_forward</md-icon>
        </md-button>
      </md-layout>
    </md-layout>
    <md-layout md-row>
      <md-layout>
        <md-list class="article-list">
          <md-list-item v-for="(article,index) in this.articles">
            <router-link :to="{ name: 'article', params: { feed_id: $route.params.feed_id, index: index }}">
             <span>{{ article.title }}</span>
           </router-link>
          </md-list-item>
        </md-list>
      </md-layout>
    </md-layout>
  </div>
</template>

<script>
export default {
  name: 'feed',
  data () {
    return {
      articles: [],
      page: 1,
      max_pages: 1,
      isFirst: true,
      isLast: true
    }
  },
  watch: {
    '$root.$data.articles': {
      handler: function(newValue, oldValue) {
        console.log("Articles Changed.")
        this.refreshArticleList()
        this.setNavButtons()
      },
      deep: true
    },
    '$route.params.page': {
      handler: function(newValue, oldValue) {
        console.log("Page Changed: " + newValue)
        let page = this.$route.params.page
        if (typeof page == 'undefined') {
          page = 1
        }
        this.page = page
        this.loadArticleList()
      },
      deep: true
    }
  },
  methods: {
    refreshArticleList () {
      this.articles = this.$root.$data.articles[this.$route.params.feed_id]
    },
    loadArticleList () {
      this.$http.get('api/feed/' + this.$route.params.feed_id + '/articles', { params: { page: this.page }}).then((response) => {
      console.log('API Returned: ', response, response.data)
      this.max_pages = response.data.pager.last
      this.$set(this.$root.$data.articles,this.$route.params.feed_id, response.data.articles)
      console.log('Set max_pages: ' + this.max_pages)
      }, (response) => {
        console.log('API Error: ', response)
      });
    },
    navPrevFeeds () {
      if(this.page > 1) {
        this.$router.push({ name: 'feed', params: { feed_id: this.$route.params.feed_id, page: +this.page - 1}})
      }
    },
    navNextFeeds () {
      if(this.page < this.max_pages) {
        console.log("Navigating away: " + (+this.page + 1))
        this.$router.push({ name: 'feed', params: { feed_id: this.$route.params.feed_id, page: +this.page + 1}})
      } else {
        console.log('Nav: ' + this.page)
      }
    },
    setNavButtons () {
      if(this.page == 1) {
        this.isFirst = true
      } else {
        this.isFirst = false
      }
      if(this.page == this.max_pages) {
        this.isLast = true
      } else {
        this.isLast = false
      }
      console.log('Max: ' + this.max_pages + ' Last: ' + this.isLast)
    }
  },
  created: function () {
    this.loadArticleList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.article-list {
  margin: 5px;
}
</style>
