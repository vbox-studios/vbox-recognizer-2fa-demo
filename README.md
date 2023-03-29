This is a demo created and licensed by VBOX. Studios. The intention for this project is to provide developers with a starter project for using VBOX. Recognizer as an authentication method (2FA).

The following packages are used in the project:

- axios
- next-themes
- react-webcam
- react-iconly
- styled-components

The structure is as follows:

src

- components
  - BorderedButton
    - BorderedButton.jsx
  - Camera
    - Camera.jsx
    - camera.module.css
  - Card
    - Card.jsx
  - DialogBox
    - DialogBox.jsx
  - LoadingModal
    - LoadingModal.jsx
- context
  - auth.jsx
- layouts
  - layout.jsx
- pages
  - login
    - recognize
      - index.jsx
    - index.jsx
  - register
    - register-face
      - index.jsx
    - success
      - index.jsx
    - index.jsx
  - \_app.js
  - \_document.js
  - index.js
- styles
  - auth.module.css
  - globals.css
- utils
  - api.js
  - formValidation.js
  - idGenerator.js

This project does not connect to any backend and users are handled locally using localStorage. To take this to production there it's advised to remove the parts of the auth context that handles users locally.

**IMPORTANT:**

To connect to the API create a free account at https://www.vboxrecognizer.com and once you've created your app add the api*key and app_id in your .env.local and make sure the names are prefixed with NEXT_PUBLIC* (e.g. NEXT_PUBLIC_API_KEY) and make sure that your .env.local is in the .gitignore.

For more in depth API documentation visit [https://v1docs.vboxrecognizer.co.za](https://v1docs.vboxrecognizer.com/#introduction)
