<template>
  <select v-model="sortBy">
    <option value="date">Sort by date</option>
    <option value="likes">Sort by likes</option>
  </select>
  <ul class="tweets__wrapper">
    <TweetItem v-for="item in sortedItems" :item="item" :key="'item-' + item.id"/>
  </ul>
</template>

<script>
import {ref, computed} from 'vue'

import TweetItem from "@/components/Tweet-Item.vue";

export default {
  components: {
    TweetItem,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  setup({items}) {
    const sortBy = ref("date");
    const sortedItems = computed(() => {
      return items.sort((a, b) => {
        if (a[sortBy.value] > b[sortBy.value]) return -1
        if (a[sortBy.value] > b[sortBy.value]) return 1
      })
    })
    return {
      sortBy,
      sortedItems
    }
  }
};
</script>
