<template>
  <form @submit.prevent="onSubmit">
    <textarea
        v-model="body"
        name="tweet"
        required
        id="form-tweet"
        placeholder="Type tweet here"
    ></textarea>
    <button class="btn btnTweet" type="submit">Post tweet</button>
  </form>
</template>

<script>
import {ref} from 'vue'

export default {

  setup(_, {emit}) {
    let body = ref("");
    const onSubmit = () => {
      emit("onSubmit", {body: body.value});
      body.value = "";
    }
    return {
      body,
      onSubmit
    }
  }
};
</script>

<style scoped></style>
