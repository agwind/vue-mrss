<template>
     <div>
        <md-list md-double-line>
           <md-list-item v-for="feed in this.feeds" @click="setNav(feed)">
            <router-link :to="{ name: 'feed', params: { feed_id: feed.id  }}">
              <div class="md-list-text-container">
                <span>{{ feed.name }}</span>
                <span>{{ feed.unread }}/{{feed.total}}</span>
             </div>
           </router-link>
          </md-list-item>
      </md-list>
    </div>
</template>

<script>
import bus from '../bus'

export default {
  name: 'feedsview',
  watch: {
    '$root.$data.feeds': {
      handler: function(newValue, oldValue) {
        console.log("Feeds Changed!!")
        this.refreshFeedList()
      },
      deep: true
    }
  },
  methods: {
    refreshFeedList () {
      this.feeds = this.$root.$data.feeds
    },
    setNav(feed) {
      bus.$emit('set-nav', {
        title: feed.name,
        link: {
          name: 'feed',
          params: { feed_id: feed.id}
        }
      })
    }
  },
  data () {
    return {
      feeds: []
    }
  },
  created: function () {
    this.$http.get('api/feeds').then((response) => {
      console.log('API Returned: ', response, response.data)
      this.$root.$data.feeds = response.data
    }, (response) => {
      console.log('API Error: ', response)
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
