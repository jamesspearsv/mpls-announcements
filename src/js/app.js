// ** STYLE IMPORTS ** //
import 'normalize.css';
import '../styles/main.scss';
import '../styles/reset.css';

// ** MODULE IMPORTS ** //
import helper from './helper';
import backend from './backend';
import view from './view';
import { assertArrowFunctionExpression, updateExpression } from '@babel/types';

// ** DRIVER CODE ** //
document.addEventListener('DOMContentLoaded', () => {
  // Get announcements when page is loaded.
  (async () => {
    const posts = await backend.getPosts();
    const user = backend.getCurrentUser();
    view.buildPosts(posts, user);
  })();

  // Control selecting and opening modals
  const newPostButton = document.getElementById('new-post-button');
  newPostButton.addEventListener('click', () => {
    // Select modal based on user auth status
    const modal = backend.getCurrentUser()
      ? document.getElementById('post-modal')
      : document.getElementById('login-modal');

    // Show selected modal
    view.openModal(modal);
  });

  // Handle login form submission
  const loginForm = document.getElementById('login-form');
  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const elements = event.target.elements;

    const auth = await backend.authUser(
      elements.user.value,
      elements.pwd.value
    );

    // Return error if user auth fails
    if (!auth) {
      view.showError('Invalid username or password');
      return;
    }

    // If user auth successful process user login
    view.showError('');
    view.closeModal(document.getElementById('login-modal'));
    loginForm.reset();
    const posts = await backend.getPosts();
    const user = backend.getCurrentUser();
    view.buildPosts(posts, user);
  });

  // Handle new post submission
  const form = document.getElementById('post-form');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const elements = event.target.elements;
    const user = backend.getCurrentUser();

    // Build post from submitted data
    const post = helper.buildPost(
      elements.title.value,
      elements.body.value,
      user.name,
      user.id
    );

    // Push post to backend
    await backend.pushPost(post);

    // Handle UI after successful post
    view.closeModal(document.getElementById('post-modal'));
    const posts = await backend.getPosts();
    view.buildPosts(posts, user);
    form.reset();
  });

  //  Set modal close buttons
  const modalClosers = document.querySelectorAll('.modal-close');
  modalClosers.forEach((button) => {
    button.addEventListener('click', (event) => {
      const modal = event.target.parentElement.parentElement;

      const form = event.target.parentElement.nextElementSibling;

      view.closeModal(modal);
      form.reset();
    });
  });

  // Set action of deletion modal buttons
  const deletionButtons = document.querySelectorAll('.deletion-button');
  deletionButtons.forEach((button) => {
    const dialog = button.parentElement.parentElement;
    if (button.id === 'yes') {
      button.addEventListener('click', async () => {
        await backend.deletePost(dialog.dataset.post_id);
        const upatedPosts = await backend.getPosts();
        const user = backend.getCurrentUser();
        view.buildPosts(upatedPosts, user);
        view.closeModal(dialog);
      });
    }
    if (button.id === 'no') {
      button.addEventListener('click', () => {
        view.closeModal(dialog);
      });
    }
  });

  // Handle user log out
  const logout = document.getElementById('logout');
  logout.addEventListener('click', async () => {
    backend.logoutUser();
    const posts = await backend.getPosts();
    view.buildPosts(posts, null);
  });
});
