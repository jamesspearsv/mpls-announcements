import '../styles/quill.scss';

const quill = (() => {
  const options = {
    modules: {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        ['link', { list: 'ordered' }, { list: 'bullet' }],
      ],
    },
    theme: 'snow',
    placeholder: 'Write your post here...',
  };
  const editor = new Quill('#editor', options);

  function getContent() {
    return editor.getSemanticHTML();
  }

  return { editor, getContent };
})();

export default quill;
