<template>
  <div class="h-70">
    <ul v-if="filteredPosts.length > 0">
      <li v-for="post in filteredPosts" :key="post.id">
        <div class="owner">
          <div class="circle-img-container img-container">
            <img :src="post.owner.picture" :alt="post.owner.picture" />
          </div>
          <div class="post-info">
            <p>{{ post.publishDate }}</p>
            <p>{{ post.owner.firstName }} {{ post.owner.lastName }}</p>
          </div>
        </div>
        <img :src="post.image" :alt="post.image" />
        <h3 class="post-text">
          {{ post.text.charAt(0).toUpperCase() + post.text.slice(1) }}
        </h3>
        <div class="tags">
          <span class="tag" v-for="tag in post.tags" :key="tag">{{ tag }}</span>
        </div>
        <div class="buttons">
          <div>
            <router-link
              :to="{ name: 'PostDetails', params: { id: post.id } }"
              class="link-tag"
              >View More</router-link
            >
            <router-link
              class="link-tag"
              :to="{ name: 'Edit', params: { id: post.id } }"
              >Edit</router-link
            >
          </div>

          <button class="like-btn">
            <i class="far fa-thumbs-up"></i>
            <span class="likes-num">{{ post.likes }}</span>
          </button>
        </div>
      </li>
    </ul>
    <div v-else v-show="searchedTag" class="nothing-found">
      There are no posts with {{ searchedTag }} tag. Try another tag
    </div>
  </div>
</template>

<script>
export default {
  props: ["filteredPosts", "searchedTag"],
};
</script>

<style scoped>
.h-70 {
  height: 70%;
}

ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

li {
  min-width: 48%;
  max-width: 48%;
  border-radius: 3px;
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 450px;
  height: auto;
  text-align: left;
  background: white;
  padding: 0.5rem;
}

img {
  width: 100%;
  max-height: 220px;
  object-fit: cover;
}

.nothing-found {
  margin-top: 2rem;
  font-size: 2rem;
  color: white;
  font-weight: bold;
}

@media (max-width: 1024px) {
  li {
    min-width: 70%;
    max-width: 70%;
  }
}

@media (max-width: 768px) {
  img {
    max-height: 300px;
  }
  li {
    min-width: 100%;
    max-width: 100%;
  }
}

@media (max-width: 600px) {
  li {
    margin-left: 0;
    margin-right: 0;
  }
}
</style>