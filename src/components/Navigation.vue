<template>
  <div id="nav">
    <router-link to="/posts">Home</router-link> |
    <router-link to="/create">Create</router-link>
  </div>
</template>

<style scoped>
#nav {
  padding: 20px;
  border-bottom: 1px solid white;
  color: white;
  font-size: 1.5rem;
}

#nav a {
  font-weight: bold;
  color: white;
  opacity: 0.6;
  font-size: 1.2rem;
  transition: opacity 0.25s ease;
}

#nav a.router-link-active {
  opacity: 1;
}
</style>