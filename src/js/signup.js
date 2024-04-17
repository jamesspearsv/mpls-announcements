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
      // Only validated inputs with validated class
      if (!event.target.classList.contains('validated')) return;

      const errorMessage = event.target.previousElementSibling.children[0];
      const invalid = helper.validateInput(event.target);
      if (invalid) {
        view.showError(errorMessage, invalid);
        event.target.classList.add('error');
      } else {
        view.showError(errorMessage, '');
        event.target.classList.remove('error');
      }
    },
    true
  );

  signup.addEventListener('submit', async (event) => {
    event.preventDefault();

    const valid = helper.validateForm(signup);
    const error = document.getElementById('form-error');

    if (!valid) {
      view.showError(error, 'Please complete form correctly');
      return;
    } else {
      view.showError(error, '');
    }

    const elements = event.target.elements;
    const newUser = helper.buildUser(
      elements.name.value,
      elements.username.value,
      elements.password.value,
      elements.passwordConfirm.value
    );

    const record = await backend.createUser(newUser);

    if (record.code) {
      view.showError(error, record.data.username.message);
    } else {
      signup.reset();
      view.showError(error, '');

      const success = document.getElementById('success-modal');
      view.openModal(success);
    }
  });
});
