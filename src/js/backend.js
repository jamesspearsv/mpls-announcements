import PocketBase from 'pocketbase';

const url = 'https://mpls.pockethost.io/';
const pb = new PocketBase(url);

// A MODULE TO HANDLE CALLS TO POCKETBASE BACKEND
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
    if (!backend.getCurrentUser()) return false;

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
    // Attempt to log in user.
    // Return true if successful else return false
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
    // Check current user. Returns null if no user
    return pb.authStore.model;
  }

  function logoutUser() {
    return pb.authStore.clear();
  }

  return {
    getPosts,
    pushPost,
    deletePost,
    authUser,
    getCurrentUser,
    logoutUser,
  };
})();

export default backend;
