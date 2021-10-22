<template>
  <div id="app">
    <app-navigation></app-navigation>
    <div class="container">
      <transition name="slide" mode="out-in">
        <router-view />
      </transition>
    </div>
    <app-loading-spinner v-if="isLoading"></app-loading-spinner>
  </div>
</template>

<script>
import appNavigation from "./components/Navigation.vue";
import appLoadingSpinner from "./components/LoadingSpinner.vue";
export default {
  components: {
    appNavigation,
    appLoadingSpinner,
  },
  computed: {
    isLoading() {
      return this.$store.getters.getLoadingState;
    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background: #009fff; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #ec2f4b,
    #009fff
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #ec2f4b,
    #009fff
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0 30px;
  min-height: 100vh;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 30px 300px;
}

.header {
  color: white;
  margin: 1rem 0;
  align-self: flex-start;
  text-align: left;
}

ul {
  list-style: none;
  width: 100%;
}

a {
  text-decoration: none;
  cursor: pointer;
}

button {
  outline: none;
  background: white;
  border: none;
}

i {
  font-size: 1rem;
}

.edit,
.remove {
  padding: 0.5rem;
  border: 1px solid;
  border-radius: 3px;
}

.edit {
  color: steelblue;
  border-color: steelblue;
  margin-right: 0.5rem;
}

.remove {
  color: #8a0707;
  border-color: #8a0707;
}

.post-text {
  padding: 0.5rem;
  text-align: left;
}

.tags {
  padding: 0.5rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.tag {
  padding: 8px 16px;
  border: 1px solid steelblue;
  border-radius: 3px;
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
  color: steelblue;
  background: white;
  font-size: 1rem;
}

.buttons {
  width: 100%;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.like-btn {
  border: none;
}

.like-btn i {
  font-size: 2rem;
  color: red;
  background: white;
}

.likes-num {
  color: red;
  font-weight: bold;
  font-size: 1.5rem;
  top: calc(50% - 0.5rem);
  left: calc(50% - 0.5rem);
}

.link-tag {
  background: steelblue;
  border: 1px solid steelblue;
  border-radius: 3px;
  color: white;
  font-weight: bold;
  padding: 8px 16px;
  margin-right: 1rem;
}

p {
  padding: 0.5rem;
}
.owner {
  padding: 0.5rem;
  display: flex;
  align-items: center;
}

.owner p {
  padding: 0;
}

.input-group {
  width: 100%;
  padding: 0.5rem;
  text-align: left;
}

input,
select {
  width: 100%;
  height: 36px;
  border-radius: 3px;
  outline: none;
  border: 1px solid #2c3e50;
  font-size: 1rem;
  padding: 0 0.5rem;
}

label {
  display: block;
  color: white;
  align-self: flex-start;
}

.error-input {
  border: 2px solid #850505;
}

.error-message {
  color: #850505;
  font-weight: bold;
}

.disabled {
  cursor: not-allowed;
}

.img-container {
  border-radius: 50%;
  width: 70px;
  height: 70px;
  overflow: hidden;
  margin-right: 1rem;
}

.circle-img-container {
  width: 50px;
  height: 50px;
  margin-right: 0.5rem;
}

.default-btn,
.submit {
  background: transparent;
  color: white;
  border-bottom: 1px solid white;
  padding: 0.5rem;
  font-size: 1rem;
  opacity: 0.8;
  transition: opacity 0.25s ease;
}

.default-btn:hover {
  cursor: pointer;
  opacity: 1;
}

.column-pull-right {
  align-self: flex-end;
}

.submit {
  font-size: 1.5rem;
  cursor: pointer;
}

.submit-pointer {
  cursor: pointer;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  width: 60%;
}

/* ------------------ROUTER VIEW ANIMATIONS -------------- */
.slide-enter-active {
  animation: slide-in 300ms forwards ease-in;
}
.slide-leave-active {
  animation: slide-out 300ms forwards ease-in;
}
@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0px);
    opacity: 1;
  }
  to {
    transform: translateY(30px);
    opacity: 0;
  }
}
/* --------------MEDIA QUERYS-------------   */
@media (max-width: 1440px) {
  .container {
    padding-left: 100px;
    padding-right: 100px;
  }
}

@media (max-width: 1024px) {
  .container {
    padding-left: 30px;
    padding-right: 30px;
  }
  form {
    width: 80%;
  }
}

@media (max-width: 768px) {
  .container {
    padding-left: 0px;
    padding-right: 0px;
  }
  #app {
    padding-left: 5px;
    padding-right: 5px;
  }
}

@media (max-width: 500px) {
  .link-tag {
    padding: 6px 12px;
    margin-right: 0.5rem;
  }
  form {
    width: 100%;
    padding: 0;
  }
}
</style>
