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

    // build post from submitted data
    const post = helper.buildPost(
      elements.title.value,
      elements.body.value,
      elements.author.value
    );
    // TODO: push post to back end
    console.log(post);
    form.reset();
  });
});
