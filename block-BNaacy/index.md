writeCode

Create a user resource

1. generate User model
2. add a POST request on "/users" in user router to handle form data.
3. Send user information from html form which can be requested by doing GET request on "/users/new"
4. Console user data in req.body in router file
5. Save user to database using `User` model
6. return created user or error in response

- if success, return index page i.e. "/" path
- if error, return back to users create form
