<template>
     <div>
        <md-list>
          <md-list-item v-for="(article,index) in articles">
            <router-link :to="{ name: 'article', params: { feed_id: $route.params.feed_id, index: index }}">
             <span>{{ article.title }}</span>
           </router-link>
          </md-list-item>
      </md-list>
    </div>
</template>

<script>
export default {
  name: 'feed',
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
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
