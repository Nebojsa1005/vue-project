import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let formatDate = function (dateStr) {
  let result
  let date = dateStr.split("-");
  let time = date[2].split("T");
  date.splice(2, 1);
  time[1].split(".").pop();
  date = [...date, ...time];
  result = `${date[2]}.${date[1]}.${date[0]}. ${date[3].substring(0, 8)}h`
  return result
}

export default new Vuex.Store({
  state: {
    posts: null,
    currentPost: null,
    comments: null,
    isLoading: false
  },
  mutations: {
    setPosts(state, { data }) {
      data.forEach(post => {
        post.publishDate = formatDate(post.publishDate)
      })
      state.posts = data
    },
    setCurrentPost(state, data) {
      data.publishDate = formatDate(data.publishDate)
      state.currentPost = data
    },
    clearCurrentPost(state) {
      state.currentPost = null
    },
    setComments(state, { data }) {
      data.forEach(comment => {
        comment.publishDate = formatDate(comment.publishDate)
      })
      state.comments = data
    },
    switchIsLoading(state) {
      state.isLoading = !state.isLoading
    }
  },
  actions: {
    async getPosts({ commit }) {
      commit('switchIsLoading')
      const responseData = await fetch('https://dummyapi.io/data/v1/post', {
        headers: {
          'app-id': '616d921ecb32a7c7dc180dd8'
        }
      })
      const response = await responseData.json()
      commit('setPosts', response)
      commit('switchIsLoading')
    },
    async getPostById({ commit, dispatch, state }, id) {
      if (state.currentPost && state.currentPost.id === id) {
        return
      }
      commit('clearCurrentPost')
      commit('switchIsLoading')
      const responseData = await fetch('https://dummyapi.io/data/v1/post/' + id, {
        headers: {
          'app-id': '616d921ecb32a7c7dc180dd8'
        }
      })
      const response = await responseData.json()
      commit('setCurrentPost', response)
      await dispatch('getComments', id)
    },
    async getComments({ commit }, id) {
      const responseData = await fetch(`https://dummyapi.io/data/v1/post/${id}/comment?limit=10`, {
        headers: {
          'app-id': '616d921ecb32a7c7dc180dd8'
        }
      })
      const response = await responseData.json()
      commit('setComments', response)
      commit('switchIsLoading')
    },
  },
  getters: {
    getPosts(state) {
      return state.posts
    },
    getCurrentPost(state) {
      return state.currentPost
    },
    getComments(state) {
      return state.comments
    },
    getLoadingState(state) {
      return state.isLoading
    }
  }
})
