export const buildPost = (title, body, author) => {
  const date = new Date().toDateString();

  return {
    title,
    body,
    author,
    date,
  };
};
