const view = (() => {
  const buildPosts = (posts, currentUser) => {
    // build and rebuild posts
    const postsContainer = document.getElementById('posts-container');

    while (postsContainer.hasChildNodes()) {
      postsContainer.removeChild(postsContainer.firstChild);
    }

    buildHeading(currentUser);

    const button = document.getElementById('new-post-button');
    if (!currentUser) {
      button.textContent = 'Log In';
    } else {
      button.textContent = 'New Announcement';
    }

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

      const byline = document.createElement('div');
      byline.classList.add('post-byline');
      byline.appendChild(author);
      byline.appendChild(date);

      if (
        currentUser &&
        (currentUser.id === post.author_id || currentUser.isAdmin)
      ) {
        const del = document.createElement('button');
        del.classList.add('post-delete');
        del.innerHTML = '<span>×</span>';
        del.onclick = () => {
          const deletionModal = document.getElementById('deletion-modal');
          // set post_id data attribute to post id onclick. Used for post deletion
          deletionModal.dataset.post_id = post.id;
          openModal(deletionModal);
        };
        byline.appendChild(del);
      }

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

  const buildHeading = (currentUser) => {
    const authHeading = document.getElementById('auth-heading');
    const username = document.getElementById('current-username');
    if (!currentUser) {
      authHeading.style.display = 'none';
      username.textContent = 'NO USER';
      return;
    }

    authHeading.style.display = 'flex';
    username.textContent = currentUser.name;
    return;
  };

  const openModal = (modal) => {
    modal.showModal();
  };

  const closeModal = (modal) => {
    modal.close();
  };

  const loginError = (error) => {
    const errorMsg = document.getElementById('error-msg');
    errorMsg.textContent = error;
  };

  return { buildPosts, openModal, closeModal, loginError };
})();

export default view;
