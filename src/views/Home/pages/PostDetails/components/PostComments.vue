<template>
  <div class="post-comments">
    <h3>Comments:</h3>
    <div v-if="comments.length > 0">
      <ul>
        <li v-for="comment in comments" :key="comment.id">
          <div class="owner">
            <div class="circle-img-container img-container">
              <img :src="comment.owner.picture" :alt="comment.owner.picture" />
            </div>
            <div class="comment-info">
              <p>{{ comment.publishDate }}</p>
              <p>{{ comment.owner.firstName }} {{ comment.owner.lastName }}</p>
            </div>
          </div>
          <p>{{ comment.message }}</p>
        </li>
      </ul>
    </div>
    <div v-else class="no-comments">No comments for this post yet...</div>
    <div class="new-comment">
      <label for="comment">Your Comment:</label>
      <textarea
        name="comment"
        v-model="newComment"
        id="newComment"
        rows="10"
      ></textarea>
      <button class="default-btn">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["comments"],
  data() {
    return {
      newComment: "",
    };
  },
};
</script>

<style scoped>
h3 {
  margin-bottom: 1rem;
  color: white;
}

ul {
  background: white;
  border-radius: 3px;
  max-height: 100%;
  overflow-y: auto;
}

li {
  width: 100%;
  padding: 0.5rem;
  border-bottom: 1px solid #2c3e50;
  text-align: left;
}

.no-comments {
  color: white;
}

.post-comments {
  width: 50%;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.comment-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.comment-info p {
  padding: 0.2rem;
}

.new-comment {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

textarea {
  width: 100%;
  padding: 0.5rem;
  resize: none;
}

.submit-btn {
  margin-top: 1rem;
}

@media (max-width: 1024px) {
  .post-comments {
    width: 70%;
  }
}

@media (max-width: 768px) {
  .post-comments {
    width: 100%;
  }
}
</style>