/* eslint-disable indent */
// A module to handle api calls
const api = (() => {
  const pantry = 'f60209ce-451f-490f-ae7b-7686b10db2dd';
  const basket = 'announcements';

  const pushPost = async (post) => {
    const requestOptions = {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(post),
    };

    await fetch(
      `https://getpantry.cloud/apiv1/pantry/${pantry}/basket/${basket}`,
      requestOptions
    );
  };

  return {pushPost};
})();

export default api;
