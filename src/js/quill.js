import 'quill/dist/quill.snow.css';
import Quill from 'quill';

document.addEventListener('DOMContentLoaded', () => {
  const options = {
    module: {
      toolbar: {
        container: '#toolbar',
        formats: ['bold', 'italic', 'link'],
      },
    },
    theme: 'snow',
    placeholder: 'Write your post here...',
  };

  new Quill('#editor', options);
});
