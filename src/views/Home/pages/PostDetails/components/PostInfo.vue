<template>
  <div class="post-info" v-if="post">
    <img :src="post.image" :alt="post.image" />
    <h3 class="post-text">{{ post.text }}</h3>
    <p>{{ post.publishDate }}</p>
    <div class="owner">
      <div class="img-container">
        <img :src="post.owner.picture" :alt="post.owner.picture" />
      </div>
      <p>{{ post.owner.firstName }} {{ post.owner.lastName }}</p>
    </div>
    <div class="tags">
      <span class="tag" v-for="tag in post.tags" :key="tag">{{ tag }}</span>
    </div>
    <div class="buttons">
      <router-link
        :to="{ name: 'Edit', params: { id: post.id } }"
        class="link-tag"
        >Edit</router-link
      >
      <button class="like-btn">
        <i class="far fa-thumbs-up"></i>
        <span class="likes-num">{{ post.likes }}</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style scoped>
.post-info {
  width: 50%;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: white;
  border-radius: 3px;
}

img {
  max-width: 100%;
}

@media (max-width: 1024px) {
  .post-info {
    width: 70%;
  }
}

@media (max-width: 768px) {
  .post-info {
    width: 100%;
  }
}
</style>