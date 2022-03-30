writeCode

Q. Create an express application named `user-diary-2`

- use ejs as template engine
- connect to mongodb database
- use public to store static assets

Handle CRUD operation and display user content in respective HTML pages using ejs templates.

Since we are going to save user data into database , create a user schema(inside models directory) with fields:

- name
- email
- age
- bio

create a User model based on above schema and export it.

Note:- Use postman to send user data with request for create or update user.

1. CREATE

- POST request on '/users' with user data accoriding to above schema from postman
- handle `POST` request inside users router.
- In route handler for create user
  - grab body data using `req.body`
  - insert data into database using `User` model with method `User.create`
  - redirect to users list i.e.`/users` route.(using `res.redirect`)

2. READ

First, we are going to read/fetch all user data and render them onto a webpage using templates.

- In users router, handle `GET` request on '/users' where
  - fetch list of all users from database using `User` model
  - render a template named `listUsers` and pass users list which is an array received from database as second argument to render method so that users array is availbale inside templates.
  - inside `listUsers` template run `forEach` loop to render all user's name.

Second, fetch a single user information and display it on webpage using a template

- In users router, handle `GET` request on `/users/:id` where
- `id` is a placeholder(variable) which can grab any id received
- capture the id from request path using `params`
- find user from database using above id
- render a template `singleUser` and pass the single user data to template as second argument.
- inside the template, display name, email, age and address of user.

3. UPDATE

In update opertaion, use postman to send new data to be updated

In users router, handle PUT request on '/users/:id' where

- grab the new user data
- find the user using `id` availbale in pathname(using req.params.id) and update it with new user data i.e. use `findByIdAndUpdate`
- redirect to user details page i.e. using `res.redirect`

4. DELETE

handle delete operation by doing a DELETE request on '/users/:id'

- grab the user using id from params and delete it.

##### Note:-

`POSTMAN` is a HTTP Client which is used to mock HTTP requests. We can also send appropriate data with request when using postman.

We are using postman to send user data while creating user(POST on '/users') and updating a single user(PUT on '/users/some-user-id').
