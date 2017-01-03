<template>
     <div>
       <p>{{ articles[article_id].title }}</p>
       <p>Date: {{ articles[article_id].date }}</p>
       <p>{{ articles[article_id].body }}</p>
    </div>
</template>

<script>
export default {
  name: 'article',
  props: [ 'article_id' ],
  data () {
    return {
      articles: {
        123: {
           title: "Interesting Article",
           date: '2017-01-01',
           body: 'Lorem ipsum dolor sit amet, at mea quem omittantur deterruisset, cu vide delenit concludaturque has, pro illud sonet propriae ad. Eam illum errem ubique ea. Errem singulis incorrupte et duo, eam vocent saperet ad. Mea primis diceret mediocritatem et, has ea verterem reprehendunt, mutat debitis tacimates vis ea. At primis argumentum quo, qui discere reprehendunt ex. An mei inani aeque, ne alterum forensibus per.'
        },
        456: {
           title: "Funny Article",
           date: '2017-01-01',
           body: 'Lorem ipsum dolor sit amet, labore concludaturque vix ut, elit mundi vix ex, novum errem appetere qui no. Doctus volumus conclusionemque sea ea, maluisset disputationi in vel. Graecis ancillae copiosae eum an, mel te oblique disputationi definitiones. Commune apeirian usu ut, posse minimum fabellas an his.'
        },
        789: {
          title: "Interesting Funny Scientific Article",
          date: '2017-01-01',
          body: 'Lorem ipsum dolor sit amet, et sea mutat nullam dolores, an mea convenire sapientem contentiones, ad sed dicta dicit quaerendum. Eirmod feugait offendit an mei. Quo doming legendos pericula ut. Ut labitur sensibus maluisset sit, qui eu dico animal. Latine persius eam at, eos stet copiosae cu.'
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
