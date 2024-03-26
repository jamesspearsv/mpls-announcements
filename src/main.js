// **STYLE IMPORTS** //
import 'normalize.css';
import './styles/main.css';

// **MODULE IMPORTS** //
import {buildPost} from './js/modules';
import api from './js/api';

document.addEventListener('DOMContentLoaded', () => {
  const postForm = document.getElementById('post-form');
  postForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const elements = event.target.elements;

    const title = elements.title.value;
    const body = elements.body.value;
    const author = elements.author.value;

    const post = buildPost(title, body, author);
    console.log(post);
    api.pushPost(post);
  });
});
