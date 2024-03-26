// **STYLE IMPORTS** //
import 'normalize.css';
import './styles/main.css';

// **MODULE IMPORTS** //
import { buildPost } from './js/modules';
import backend from './js/backend';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('post-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const elements = event.target.elements;

    const title = elements.title.value;
    const body = elements.body.value;
    const author = elements.author.value;

    const post = buildPost(title, body, author);
    // console.log(post);
    // backend.pushPost(post)
    backend.getPosts();

    form.reset();
  });
});
