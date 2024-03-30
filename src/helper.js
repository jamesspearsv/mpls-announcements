const helper = (() => {
  const buildPost = (title, body, author) => {
    return {
      title,
      body,
      author,
    };
  };

  return { buildPost };
})();

export default helper;
