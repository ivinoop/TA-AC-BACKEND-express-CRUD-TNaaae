writeCode

In previous application

1. Display List of users on a template

- create a route in user router, GET request on "/users"
- fetch all users from database
- create users.ejs in views
- render users.ejs and pass list of users from database as second argument as object

2. Display single user

- create a GET request on "/users/:id"
- get id using req.params.id
- fetch user from database using id received from params
- render singleUser.ejs with single user information.
