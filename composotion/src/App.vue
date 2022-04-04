<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <div class="view">
        <div class="container">
          <TweetForm @onSubmit="handleSubmit"/>
          <TweetList :items="items"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {reactive} from 'vue'

import TweetList from "@/components/Tweet-List.vue";
import TweetForm from "@/components/Tweet-Form.vue";

export default {
  name: "App",
  components: {
    TweetList,
    TweetForm,
  },
  setup() {
    const items = reactive([{
      id: 1,
      body: "hello",
      likes: 12,
      avatar: "https://avatars.dicebear.com/api/avataaars/1.svg",
      date: new Date(Date.now()).toLocaleString(),
    },
      {
      id: 2,
      body: "two",
      likes: 2,
      avatar: "https://avatars.dicebear.com/api/avataaars/2.svg",
      date: new Date(Date.now()).toLocaleString(),
    }]);

    const handleSubmit = ({body}) => {
      items.push({
        id: items.length + 1,
        avatar: `https://avatars.dicebear.com/api/avataaars/${Date.now()}.svg`,
        body,
        likes: 0,
        date: new Date(Date.now()).toLocaleString(),
      });
    }

    return {
      items,
      handleSubmit
    }
  }
};
</script>
