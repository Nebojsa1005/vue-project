<template>
  <div class="w-100">
    <h1 class="header">List of Posts:</h1>
    <app-search-tag @setWantedTag="onSetWantedTag"></app-search-tag>
    <app-posts-list
      :filteredPosts="filteredPosts"
      :searchedTag="wantedTag"
    ></app-posts-list>
  </div>
</template>

<script>
import appSearchTag from "./components/SearchTag.vue";
import appPostsList from "./components/PostsList.vue";
export default {
  components: {
    appSearchTag,
    appPostsList,
  },
  data() {
    return {
      posts: [],
      wantedTag: "",
    };
  },
  methods: {
    onSetWantedTag(tag) {
      this.wantedTag = tag;
    },
  },
  computed: {
    filteredPosts() {
      return this.posts.filter((post) => {
        if (this.wantedTag === "") {
          return post;
        }
        return post.tags.includes(this.wantedTag);
      });
    },
  },
  created() {
    (async () => {
      try {
        await this.$store.dispatch("getPosts");
        this.posts = this.$store.getters.getPosts;
      } catch (error) {
        console.log("[Exception]", error);
      }
    })();
  },
};
</script>

<style scoped>
.w-100 {
  width: 100% !important;
}
</style>