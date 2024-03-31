import backend from './backend';

const view = (() => {
  const buildPosts = (posts, currentUser) => {
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

      let del;
      if (currentUser) {
        del = document.createElement('button');
        del.textContent = 'Delete Post';
        del.onclick = async () => {
          // backend.deletePost(post.id);
          const user = await backend.getCurrentUser();
          const updatedPosts = await backend.getPosts();

          console.log(user);
          console.log(updatedPosts);
          view.clearPosts();
          view.buildPosts(updatedPosts, user);
        };
      }

      const byline = document.createElement('div');
      byline.classList.add('post-byline');
      byline.appendChild(author);
      byline.appendChild(date);
      if (currentUser) byline.appendChild(del);

      const divider = document.createElement('div');
      divider.classList.add('divider');

      const body = document.createElement('p');
      body.classList.add('post-body');
      body.textContent = post.body;

      const announcement = document.createElement('div');
      announcement.classList.add('post');
      announcement.dataset.author_id = post.author_id;
      announcement.dataset.post_id = post.id;
      announcement.appendChild(title);
      if (currentUser) announcement.appendChild(byline);
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
