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

    console.log(input);

    // Validity Cases
    if (validity.valid) return null;
    if (validity.valueMissing) return 'Value Missing';
    if (validity.patternMismatch) return 'Pattern Mismatch';
  }

  return { buildPost, buildUser, validateInput };
})();

export default helper;
