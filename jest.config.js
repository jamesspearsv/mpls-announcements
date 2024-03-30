/** @type {import('jest').Config} */

module.exports = {
  verbose: true,
  // Ignore static assets and stylesheets
  transform: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+\\.js$': 'babel-jest',
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
  },
  clearMocks: true,
};
