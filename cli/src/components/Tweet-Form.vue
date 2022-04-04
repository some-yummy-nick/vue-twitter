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
export default {
  data() {
    return {
      body: "",
    };
  },
  methods: {
    onSubmit() {
      this.$emit("onSubmit", {
        body: this.body,
      });
      this.body = "";
    },
  },
};
</script>

<style scoped></style>
