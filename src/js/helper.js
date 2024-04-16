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
    //
    if (validity.valueMissing) console.log('Value Missing');
    if (validity.patternMismatch) console.log('Pattern Mismatch');
  }

  return { buildPost, buildUser, validateInput };
})();

export default helper;
