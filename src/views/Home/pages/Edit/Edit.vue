<template>
  <div class="container">
    <h1 class="header">Edit Post:</h1>
    <button class="default-btn column-pull-right" @click="goBack()">
      Go Back
    </button>
    <form @submit.prevent="submit" v-if="postData">
      <div class="input-group">
        <label for="image">Post Image:</label>
        <input
          type="text"
          id="image"
          :class="{ 'error-input': $v.postData.image.$error }"
          v-model="$v.postData.image.$model"
        />
        <p class="error-message" v-if="!$v.postData.image.required">
          This field is required
        </p>
        <p class="error-message" v-if="!$v.postData.image.url">
          Must be a valid Url
        </p>
      </div>

      <div class="input-group">
        <label for="tags">Tags (seperate via commas):</label>
        <input
          type="text"
          id="tags"
          :class="{ 'error-input': $v.postData.tags.$error }"
          v-model="$v.postData.tags.$model"
        />
        <p class="error-message" v-if="!$v.postData.tags.required">
          This field is required
        </p>
      </div>

      <div class="input-group">
        <label for="text">Text:</label>
        <input
          type="text"
          id="text"
          :class="{ 'error-input': $v.postData.text.$error }"
          v-model="$v.postData.text.$model"
        />
        <p class="error-message" v-if="!$v.postData.text.required">
          This field is required
        </p>
        <p class="error-message" v-if="!$v.postData.text.minLength">
          Must be at least 5 charachers long
        </p>
      </div>

      <div class="input-group">
        <label for="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          :class="{ 'error-input': $v.postData.owner.firstName.$error }"
          v-model="$v.postData.owner.firstName.$model"
        />
        <p class="error-message" v-if="!$v.postData.owner.firstName.required">
          This field is required
        </p>
      </div>

      <div class="input-group">
        <label for="lastName">Last Name:</label>
        <input
          type="text"
          :class="{ 'error-input': $v.postData.owner.lastName.$error }"
          v-model="$v.postData.owner.lastName.$model"
        />
        <p class="error-message" v-if="!$v.postData.owner.lastName.required">
          This field is required
        </p>
      </div>

      <div class="input-group">
        <label for="title">Title:</label>
        <select
          name="title"
          itemid="title"
          :class="{ 'error-input': $v.postData.owner.title.$error }"
          v-model="$v.postData.owner.title.$model"
          id="title"
        >
          <option value="mrs">Mrs</option>
          <option value="mr">Mr</option>
          <option value="miss">Miss</option>
        </select>
        <p class="error-message" v-if="!$v.postData.owner.title.required">
          This field is required
        </p>
      </div>

      <div class="input-group">
        <label for="ownerPicture">Your Picture:</label>
        <input
          type="text"
          :class="{ 'error-input': $v.postData.owner.picture.$error }"
          v-model="$v.postData.owner.picture.$model"
        />
        <p class="error-message" v-if="!$v.postData.owner.picture.required">
          This field is required
        </p>
        <p class="error-message" v-if="!$v.postData.owner.picture.url">
          Must be a valid URL
        </p>
      </div>

      <button
        type="submit"
        :class="[
          { disabled: $v.postData.$invalid },
          { 'submit-pointer': !$v.postData.$invalid },
        ]"
        class="submit"
        :disabled="$v.postData.$invalid"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { required, url, minLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      postData: null,
    };
  },
  validations: {
    postData: {
      image: {
        required,
        url,
      },
      tags: {
        required,
      },
      text: {
        required,
        minLength: minLength(6),
      },
      owner: {
        firstName: {
          required,
        },
        lastName: {
          required,
        },
        title: {
          required,
        },
        picture: {
          required,
          url,
        },
      },
    },
  },
  methods: {
    submit() {
      console.log(this.postData);
    },
    goBack() {
      this.$router.back();
    },
  },
  mounted() {
    (async () => {
      try {
        await this.$store.dispatch("getPostById", this.$route.params.id);
        this.postData = this.$store.getters.getCurrentPost;
      } catch (error) {
        console.log("[Exception]", error);
      }
    })();
  },
};
</script>

<style scoped>
.container {
  padding: 0;
}
</style>