const helper = (() => {
  const buildPost = (title, body, author, author_id) => {
    return {
      title,
      body,
      author,
      author_id,
    };
  };

  const buildUser = (name, username, password, passwordConfirm) => {
    return {
      username,
      emailVisibility: false,
      password,
      passwordConfirm,
      name,
      isAdmin: false,
    };
  };

  return { buildPost, buildUser };
})();

export default helper;
