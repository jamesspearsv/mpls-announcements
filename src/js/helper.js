import view from './view';

const helper = (() => {
  function buildPost(title, body, author, author_id) {
    return {
      title,
      body,
      author,
      author_id,
    };
  }

  function buildUser(name, username, password, passwordConfirm) {
    return {
      username,
      emailVisibility: false,
      password,
      passwordConfirm,
      name,
      isAdmin: false,
    };
  }

  function validateInput(input) {
    const validity = input.validity;

    // Validity Cases
    if (validity.valid) return null;
    if (validity.valueMissing) return 'Required';
    if (validity.patternMismatch) {
      if (input.name === 'name') return 'Please match format: John S';
      if (input.name === 'username') return 'Should be lowercase, no spaces';
    }
    if (validity.tooShort) return 'Please use at least 5 characters';
  }

  function validateForm(form) {
    const elements = form.elements;
    const error = elements.passwordConfirm.previousElementSibling.children[0];

    if (elements.password.value !== elements.passwordConfirm.value) {
      console.log(error);
      view.showError(error, 'Passwords do not match');
      return false;
    } else {
      view.showError(error, '');
    }

    // Check form validity
    return form.checkValidity();
  }

  return { buildPost, buildUser, validateInput, validateForm };
})();

export default helper;
