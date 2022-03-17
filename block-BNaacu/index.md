writeCode

In previously created express application, add routes for students.
Inside students routes file, create routes to

- create student form => GET request on "/students/new"

- create a student => POST request on "/students" route

- list all students => GET request on "/students" route

  - render an ejs template
  - pass array of students to template as second argument like

  ```js
  res.render("students", { list: ["ankit", "suraj", "prashant", "ravi"] });
  ```

  - display list using <% list.forEach(l => {}) %>

- get single student details => GET request on "/students/:id"
  - render an ejs template
  - pass a student object to template for displaying student data
  ```js
  res.render("studentDetail", {
    student: { name: "rahul", email: "rahul@altcampus.io" },
  });
  ```
