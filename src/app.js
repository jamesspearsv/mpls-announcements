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

  // Open new post modal
  const newPostButton = document.getElementById('new-post-button');
  newPostButton.addEventListener('click', () => {
    const modal = document.getElementById('new-post-modal');
    modal.showModal();
  });

  // Submit new post form
  const form = document.getElementById('post-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const elements = event.target.elements;

    const title = elements.title.value;
    const body = elements.body.value;
    const author = elements.author.value;

    const post = helper.buildPost(title, body, author);
    // console.log(post);
    // backend.pushPost(post)
    form.reset();
  });
});
