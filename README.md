# PLAYING WITH POSTGRES - CRUD API with PostgreSQL

This is a basic CRUD (Create, Read, Update, Delete) API built using an SQL database with PostgreSQL. It provides endpoints to perform operations on a collection of data.

## Prerequisites

Before running the API, make sure you have the following installed:

- Node.js
- PostgreSQL

## Getting Started

1. Clone this repository to your local machine.

```bash
git clone https://github.com/sayoadesokan/playingwithpostgres.git
```

2. Set up your PostgreSQL database and configure the connection in config.js.

```javascript
// config.js

module.exports = {
  db: {
    host: 'localhost',
    port: 5432,
    database: 'your_database_name',
    user: 'your_database_user',
    password: 'your_database_password',
  },
};
```

3. Create the necessary table in your database. You can use the SQL script provided in db.sql.

```bash
psql -U your_database_user -d your_database_name -a -f db.sql
```

4. Start Server

```bash
npm start
```

The server should now be running on http://localhost:9000.

## API Endpoints

The API provides the following endpoints:

- GET /api/items: Get all items
- GET /api/items/:id: Get an item by ID
- POST /api/items: Create a new item
- PUT /api/items/:id: Update an existing item
- DELETE /api/items/:id: Delete an item

## Usage

You can use tools like Postman or cURL to interact with the API endpoints. For example:

To get all items:

```bash
GET http://localhost:9000/api/v1/students/
```

To get an item by ID:

```bash
GET http://localhost:9000/api/v1/students/1
```

with the POST, DELETE AND UPDATE all in the code above

## Contributions

Contributions are welcome! If you find any issues or want to add new features, feel free to submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

Thank you for checking out this CRUD API with PostgreSQL! If you have any questions or feedback, please don't hesitate to contact me.
