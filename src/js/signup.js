import '../styles/reset.css';
import '../styles/main.scss';
import '../styles/signup.scss';

import backend from './backend';
import helper from './helper';
import view from './view';

document.addEventListener('DOMContentLoaded', () => {
  // Handle create user form submission
  const signup = document.getElementById('signup-form');
  signup.setAttribute('novalidate', true);
  signup.addEventListener(
    'focusout',
    (event) => {
      helper.validateInput(event.target);
    },
    true
  );

  signup.addEventListener('submit', async (event) => {
    event.preventDefault();

    const elements = event.target.elements;
    const newUser = helper.buildUser(
      elements.name.value,
      elements.username.value,
      elements.password.value,
      elements.passwordConfirm.value
    );

    // const record = await backend.createUser(newUser);
    // console.log(record);
    // if (record.code) {
    //   view.showError(record.data.username.message);
    // } else {
    //   signup.reset();
    //   view.showError('');
    // }
  });
});
