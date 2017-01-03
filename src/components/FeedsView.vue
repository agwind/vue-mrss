<template>
     <div>
        <md-list md-double-line>
           <md-list-item v-for="feed in feeds" @click="setNav(feed)">
            <router-link :to="{ name: 'feed', params: { feed_id: feed.feed_id  }}">
              <div class="md-list-text-container">
                <span>{{ feed.title }}</span>
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
  methods: {
    setNav(feed) {
      bus.$emit('set-nav', {
        title: feed.title,
        link: {
          name: 'feed',
          params: { feed_id: feed.feed_id}
        }
      })
    }
  },
  data () {
    return {
      feeds: [
        {
           title: "Awesome Site",
           unread: 23,
           total: 1099,
           feed_id: 1
        },
        {
           title: "Realistic Site",
           unread: 323,
           total: 9999,
           feed_id: 2
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
