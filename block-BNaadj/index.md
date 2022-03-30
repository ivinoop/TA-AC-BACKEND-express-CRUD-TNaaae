writeCode

Q. Create an express application named `user-diary-3`.

Each user should have fields:

- name!
- email!
- age
- address
- bio
- hobbies: [String]

#### Note:-

`!` means required field.

Handle these pages:

1. List users page where all user's name should be listed.

2. single user page

- In list users page when you click on user's name, it should take us to single user's details page
- this page should have user's
  - name
  - email
  - address
  - bio
  - hobbies
- a button to edit user
- a button to delete user
- a button to take us to list users page.

3. Create user form which when submitted

- should be able to create a new user and save it to database
- take us to new user's details page which has been recently created using create form.

4. Update user form

- when we click on edit button in user's details page
- update form should be rendered
- once update form is submitted, user should be updated
- after user is updated, redirect to user's details page

Add appropriate Schema, models for users according to app requirement.

handle routes based on app requirements.

Use ejs as templating engine to render web pages.

#### Note:-

- Don't use postman for sending any data.
- handle form in application itself to create and update user.
- go through ejs doucumentation for better understanding of ejs templates(`ejs.co`)
