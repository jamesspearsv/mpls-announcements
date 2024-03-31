import PocketBase from 'pocketbase';

const url = 'https://mpls.pockethost.io/';
const pb = new PocketBase(url);

// A module to handle api calls
const backend = (() => {
  async function getPosts() {
    try {
      const records = await pb
        .collection('posts')
        .getFullList({ sort: '-created' });

      return records;
    } catch (error) {
      console.log(error);
    }
  }

  async function pushPost(post) {
    if (!backend.getCurrentUser()) return;

    try {
      await pb.collection('posts').create(post);
    } catch (error) {
      console.log(error);
    }
  }

  async function deletePost(id) {
    if (!backend.getCurrentUser()) return false;

    try {
      await pb.collection('posts').delete(id);
    } catch (error) {
      console.log(error);
    }
  }

  async function authUser(username, password) {
    try {
      const authData = await pb
        .collection('users')
        .authWithPassword(username, password);

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  function getCurrentUser() {
    return pb.authStore.model;
  }

  return {
    getPosts,
    pushPost,
    deletePost,
    authUser,
    getCurrentUser,
  };
})();

export default backend;
