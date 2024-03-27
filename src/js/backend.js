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

      if (records.code === 400) throw new Error(records.message);

      return records;
    } catch (error) {
      console.log(error);
    }
  }

  async function pushPost(post) {
    const record = await pb.collection('posts').create(post);
    console.log(record);
  }

  async function authUser(username, password) {
    try {
      const authData = await pb
        .collection('users')
        .authWithPassword(username, password);

      if (authData.status === 400) throw new Error(authData.message);

      return true;
    } catch (error) {
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
