// **STYLE IMPORTS** //
import 'normalize.css';
import './styles/main.scss';

// **MODULE IMPORTS** //
import helper from './js/helper';
import backend from './js/backend';
import view from './js/view';

document.addEventListener('DOMContentLoaded', () => {
  // Get announcements when page is loaded.
  (async () => {
    const posts = await backend.getPosts();
    view.buildPosts(posts);
  })();

  // new modal
  const newPostButton = document.getElementById('new-post-button');
  newPostButton.addEventListener('click', () => {
    const modal = backend.checkAuth()
      ? document.getElementById('post-modal')
      : document.getElementById('login-modal');

    modal.showModal();
  });

  // Handle login
  const loginForm = document.getElementById('login-form');
  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const elements = event.target.elements;

    const auth = await backend.authUser(
      elements.user.value,
      elements.pwd.value
    );

    if (!auth) {
      // TODO: Add error message to view
      console.log('bad auth');
      return;
    }

    loginForm.reset();
    document.getElementById('login-modal').close();
  });

  // Submit new post form
  const form = document.getElementById('post-form');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const elements = event.target.elements;

    // build post from submitted data
    const post = helper.buildPost(
      elements.title.value,
      elements.body.value,
      backend.getCurrentUser()
    );

    // TODO: push post to back end
    console.log(post);
    await backend.pushPost(post);

    document.getElementById('post-modal').close();
    view.clearPosts();
    const posts = await backend.getPosts();
    view.buildPosts(posts);
    form.reset();
  });
});
