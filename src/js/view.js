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
      date.textContent = new Date(post.created).toDateString();

      const divider = document.createElement('div');
      divider.classList.add('divider');

      const body = document.createElement('p');
      body.classList.add('post-body');
      body.textContent = post.body;

      const byline = document.createElement('div');
      byline.classList.add('post-byline');
      byline.appendChild(author);
      byline.appendChild(date);

      const announcement = document.createElement('div');
      announcement.classList.add('post');
      announcement.appendChild(title);
      announcement.appendChild(byline);
      announcement.appendChild(divider);
      announcement.appendChild(body);

      postsContainer.appendChild(announcement);
    }
  };

  const clearPosts = () => {
    const postsContainer = document.getElementById('posts-container');

    while (postsContainer.hasChildNodes()) {
      postsContainer.removeChild(postsContainer.firstChild);
    }
  };

  const openModal = (modal) => {
    modal.showModal();
  };

  const closeModal = (modal) => {
    modal.close();
  };

  return { buildPosts, clearPosts, openModal, closeModal };
})();

export default view;
