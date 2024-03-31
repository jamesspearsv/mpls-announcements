const helper = (() => {
  const buildPost = (title, body, author, author_id) => {
    return {
      title,
      body,
      author,
      author_id,
    };
  };

  return { buildPost };
})();

export default helper;
