import PocketBase from 'pocketbase';

const url = 'https://mpls.pockethost.io/';
const pb = new PocketBase(url);

// A module to handle api calls
const backend = (() => {
  async function getPosts() {
    try {
      const records = await pb.collection('posts').getList();

      if (!records.ok) {
        throw new Error('Status not ok');
      }

      console.log(records);
    } catch (error) {
      console.log(error);
    }
  }

  async function pushPost(post) {
    const record = await pb.collection('posts').create(post);
    console.log(record);
  }

  return { getPosts, pushPost };
})();

export default backend;
