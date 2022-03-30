writeCode

Q. Update a user through a update form

- add a update form on GET request on "/users/:userId/edit" route
- populate the form with already existing user data
- send form data to another route which is PUT request on '/users/:id' route
- grab the data from update form
- update user with new data using `findByIdAndUpdate`
- redirect to '/users' route i.e. list of users page
