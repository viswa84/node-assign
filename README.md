# Bookstore API

This is a simple RESTful API for managing a bookstore's collection of books.
 You can use it to create, read, update, and delete book records.
Make sure to replace the MongoDB connection URL details with your actual credentials.


**Install** the required dependencies by running: `npm install`
**Start the server:** `npm start`


## API Endpoints

### Create a New Book
- **Endpoint:** POST "/books"
- **Request Body:** JSON object with `title`, `author`, and `summary` fields.
- **Example:** 
  ```json
  {
    "title": "The Book",
    "author": "viswa",
    "summary": "A classic novel about a young man's journey through life."
  }

### Get All Books
**Endpoint:** GET "/books"
**
### Get a Specific Book by ID
**Endpoint:**  GET /books/:id

### Update a Book by ID
Endpoint: PUT /books/:id

### Delete a Book by ID
**Endpoint:**  DELETE /books/:id
