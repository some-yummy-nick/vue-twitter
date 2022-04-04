<template>
  <ul class="tweets__wrapper">
    <TweetItem v-for="item in items" :item="item" :key="'item-' + item.id" />
  </ul>
</template>

<script>
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
};
</script>

<style scoped></style>
