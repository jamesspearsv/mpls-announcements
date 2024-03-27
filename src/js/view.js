const view = (() => {
  const buildPosts = (posts) => {
    const postsContainer = document.getElementById('posts-container');

    for (let post of posts) {
      const title = document.createElement('h2');
      title.classList.add('post-title');
      title.textContent = post.title;

      const author = document.createElement('div');
      author.classList.add('post-author');
      author.textContent = post.author;

      const date = document.createElement('div');
      date.classList.add('post-date');
      date.textContent = post.created;

      const body = document.createElement('p');
      body.classList.add('post-body');
      body.textContent = post.body;

      const announcement = document.createElement('div');
      announcement.classList.add('post');
      announcement.appendChild(title);
      announcement.appendChild(author);
      announcement.appendChild(date);
      announcement.appendChild(body);

      postsContainer.appendChild(announcement);
    }
  };

  const openModal = (modal) => {
    modal.showModal();
  };

  const closeModal = (modal) => {
    modal.closeModal();
  };

  return { buildPosts, openModal, closeModal };
})();

export default view;
