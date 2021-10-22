<template>
  <div class="input-group">
    <label for="wantedTag">Filter by entering a tag</label>
    <input type="text" id="wantedTag" v-model="wantedTag" @input="filtered" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      wantedTag: "",
    };
  },
  methods: {
    filtered() {
      this.$emit("setWantedTag", this.wantedTag);
    },
  },
};
</script>

<style scoped>
input {
  width: 300px;
}

@media (max-width: 425px) {
  input {
    width: 200px;
  }
}
</style>
    
