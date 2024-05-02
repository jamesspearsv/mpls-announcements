# A simple announcement and post system for embedding on MPLS intranet site.

An announcement and posting system built using HTML, CSS, JavaScript, and Webpack. Data for this system is managed using [PocketBase](https://pocketbase.io) and accessed using the [PocketBase JavaScript SDK](https://www.npmjs.com/package/pocketbase).

This app is published from `/docs` instead of `/dist` to integrate better with Github Pages.

## Roadmap and TODO List

- [x] Set up backend connection
- [x] Build viewing function
- [x] Implement basic announcements view
- [x] Implement basic user auth system
- [x] Implement posting system and view
- [x] Improve error handling
- [x] Build out style
- [x] Clean up code
- [x] Improve code comments
- [x] Seperate buildPosts function into buildPosts, updateUI, and updateHeading functions
- [x] Build sign up function
  - [x] Create new user
  - [x] Throw error is user already exists
  - [x] UI error feedback
  - [x] Build successful signup feedback
- [x] Signup Form validation
  - [x] Pattern match
  - [x] Required value
  - [x] Password confirmation
  - [x] Password length
- [x] Add rich text editor to posting form [Quill](https://quilljs.com/docs/quickstart)
