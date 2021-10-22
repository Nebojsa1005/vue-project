<template>
  <div class="container">
    <h1 class="header">Create a Post:</h1>
    <button class="default-btn column-pull-right" @click="goBack()">
      Go Back
    </button>
    <form @submit.prevent="submit">
      <div class="input-group">
        <label for="image">Post Image:</label>
        <input
          type="text"
          id="image"
          @click="$v.postData.image.$touch()"
          :class="{
            'error-input': $v.postData.image.$error,
          }"
          v-model="$v.postData.image.$model"
        />
        <p
          class="error-message"
          v-if="!$v.postData.image.required && $v.postData.image.$dirty"
        >
          This field is required
        </p>
        <p
          class="error-message"
          v-if="!$v.postData.image.url && $v.postData.image.$dirty"
        >
          Must be a valid Url
        </p>
      </div>

      <div class="input-group">
        <label for="tags">Tags (seperate via commas):</label>
        <input
          type="text"
          id="tags"
          @click="$v.postData.tags.$touch()"
          :class="{ 'error-input': $v.postData.tags.$error }"
          v-model="$v.postData.tags.$model"
        />
        <p
          class="error-message"
          v-if="!$v.postData.tags.required && $v.postData.tags.$dirty"
        >
          This field is required
        </p>
      </div>

      <div class="input-group">
        <label for="text">Text:</label>
        <input
          type="text"
          id="text"
          @click="$v.postData.text.$touch()"
          :class="{ 'error-input': $v.postData.text.$error }"
          v-model="$v.postData.text.$model"
        />
        <p
          class="error-message"
          v-if="!$v.postData.text.required && $v.postData.text.$dirty"
        >
          This field is required
        </p>
        <p
          class="error-message"
          v-if="!$v.postData.text.minLength && $v.postData.text.$dirty"
        >
          Must be at least 5 charachers long
        </p>
      </div>

      <div class="input-group">
        <label for="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          @click="$v.postData.owner.firstName.$touch()"
          :class="{ 'error-input': $v.postData.owner.firstName.$error }"
          v-model="$v.postData.owner.firstName.$model"
        />
        <p
          class="error-message"
          v-if="
            !$v.postData.owner.firstName.required &&
            $v.postData.owner.firstName.$dirty
          "
        >
          This field is required
        </p>
      </div>

      <div class="input-group">
        <label for="lastName">Last Name:</label>
        <input
          type="text"
          @click="$v.postData.owner.lastName.$touch()"
          :class="{ 'error-input': $v.postData.owner.lastName.$error }"
          v-model="$v.postData.owner.lastName.$model"
        />
        <p
          class="error-message"
          v-if="
            !$v.postData.owner.lastName.required &&
            $v.postData.owner.lastName.$dirty
          "
        >
          This field is required
        </p>
      </div>

      <div class="input-group">
        <label for="title">Title:</label>
        <select
          name="title"
          @click="$v.postData.owner.title.$touch()"
          :class="{ 'error-input': $v.postData.owner.title.$error }"
          v-model="$v.postData.owner.title.$model"
          id="title"
        >
          <option value="mrs">Mrs</option>
          <option value="mr">Mr</option>
          <option value="miss">Miss</option>
        </select>
        <p
          class="error-message"
          v-if="
            !$v.postData.owner.title.required && $v.postData.owner.title.$dirty
          "
        >
          This field is required
        </p>
      </div>

      <div class="input-group">
        <label for="ownerPicture">Your Picture:</label>
        <input
          type="text"
          @click="$v.postData.owner.picture.$touch()"
          :class="{ 'error-input': $v.postData.owner.picture.$error }"
          v-model="$v.postData.owner.picture.$model"
        />
        <p
          class="error-message"
          v-if="!$v.postData.owner.picture.required && $v.postData.tags.$dirty"
        >
          This field is required
        </p>
        <p
          class="error-message"
          v-if="!$v.postData.owner.picture.url && $v.postData.tags.$dirty"
        >
          Must be a valid URL
        </p>
      </div>

      <button
        type="submit"
        class="submit"
        :class="[
          { disabled: $v.postData.$invalid },
          { 'submit-pointer': !$v.postData.$invalid },
        ]"
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
      postData: {
        image: "",
        tags: [],
        text: "",
        publishDate: new Date(),
        owner: {
          firstName: "",
          lastName: "",
          title: "",
          picture: "",
        },
      },
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
      this.postData.tags = this.postData.tags
        .split(",")
        .map((tag) => tag.trim());

      console.log("created post", this.postData);
      this.$route.redirect("/");
    },
    goBack() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.container {
  padding: 0;
}
</style>