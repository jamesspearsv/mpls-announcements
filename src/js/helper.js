const helper = (() => {
  const buildPost = (title, body, user) => {
    return {
      title,
      body,
      author: user.name,
    };
  };

  return { buildPost };
})();

export default helper;
