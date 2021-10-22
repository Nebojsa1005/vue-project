<template>
  <div>
    <h1 class="header">Post Details:</h1>
    <button class="default-btn column-pull-right" @click="goBack()">
      Go Back
    </button>
    <div class="wrapper" v-if="post && comments">
      <app-post-info :post="post"></app-post-info>
      <app-post-comments :comments="comments"></app-post-comments>
    </div>
  </div>
</template>

<script>
import appPostInfo from "./components/PostInfo.vue";
import appPostComments from "./components/PostComments.vue";
export default {
  components: {
    appPostInfo,
    appPostComments,
  },
  methods: {
    goBack() {
      this.$router.back();
    },
  },
  computed: {
    post() {
      return this.$store.getters.getCurrentPost;
    },
    comments() {
      return this.$store.getters.getComments;
    },
  },
  mounted() {
    this.$store.dispatch("getPostById", this.$route.params.id);
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  width: 100%;
}

.default-btn {
  align-self: flex-end;
  margin-bottom: 1rem;
  float: right;
}

@media (max-width: 1024px) {
  .wrapper {
    flex-direction: column;
    align-items: center;
  }
}
</style>