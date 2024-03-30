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
    if (!backend.checkAuth()) return;

    try {
      await pb.collection('posts').create(post);
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

  function checkAuth() {
    return pb.authStore.isValid;
  }

  function getCurrentUser() {
    return pb.authStore.model.name;
  }

  return { getPosts, pushPost, authUser, checkAuth, getCurrentUser };
})();

export default backend;
