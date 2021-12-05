<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Актуальные новости {{ now }}</h2>
      <span>Открыто: {{ openRate }} . Прочитано: {{ readRate }} </span>
    </div>


    <AppNews
      v-for="item in news"
      :title="item.title"
      :key="item.id"
      :id="item.id"
      :wasRead="item.wasRead"
      @opened="openRate++"
      @read="read"
    />


  </div>
</template>

<script>

import AppNews from "./components/AppNews";

export default {

  data () {
    return {
      now: new Date().toLocaleDateString(),

      openRate: 0,
      readRate: 0,

      news: [
        {
          title: 'Новость лалаллалалал 1',
          id: 1,
          wasRead: false,
        },
        {
          title: 'Новость 2',
          id: 2,
          wasRead: false,
        }
      ]
    }
  },

  methods: {
    read(id) {
      this.readRate++;

      let i = this.news.findIndex( item => item.id === id );
      this.news[i].wasRead = true;
      console.log(this.news)
    }

  },


  components: {
    AppNews,
  },
}
</script>

