const view = (() => {
  const buildPosts = (posts, currentUser) => {
    // FUNCTION THE BUILDS POST IN UI
    const postsContainer = document.getElementById('posts-container');

    // Clear post in UI
    clearPosts(postsContainer);

    // Update UI to stay in sync with data
    updateHeading(currentUser);
    updateUI(currentUser);

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

      // Render delete button is user is logged in, only renders on user's posts unless user is admin
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
      announcement.appendChild(byline);
      announcement.appendChild(divider);
      announcement.appendChild(body);

      postsContainer.appendChild(announcement);
    }
  };

  const updateHeading = (currentUser) => {
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

  const updateUI = (currentUser) => {
    const button = document.getElementById('new-post-button');
    if (!currentUser) {
      button.textContent = 'Log In';
    } else {
      button.textContent = 'New Announcement';
    }
  };

  const clearPosts = (parent) => {
    while (parent.hasChildNodes()) {
      parent.removeChild(parent.firstChild);
    }
  };

  const openModal = (modal) => {
    modal.showModal();
  };

  const closeModal = (modal) => {
    modal.close();
  };

  const showError = (element, error) => {
    element.textContent = error;
  };

  return { buildPosts, openModal, closeModal, showError };
})();

export default view;
