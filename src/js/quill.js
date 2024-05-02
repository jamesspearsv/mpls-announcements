import '../styles/quill.scss';

document.addEventListener('DOMContentLoaded', () => {
  const options = {
    modules: {
      toolbar: ['bold', 'italic', 'underline'],
    },
    theme: 'snow',
    placeholder: 'Write your post here...',
  };

  new Quill('#editor', options);
});
