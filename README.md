
## BookStore

A simple, full-stack application designed to manage books, developed using React and Django Rest framework. This application enables users to browse, create, update, and delete books, providing a comprehensive book management experience.

## Key Features
* Browse through a comprehensive collection of books
* Add new books to the catalog with ease
* Update existing book details as needed
* Delete books from the catalog when no longer required

## Tech Stack
- **Django REST framework**: A powerful and flexible toolkit for building web APIs.
- **React**
- **JavaScript**

## Project Structure
This project consists of two primary components:

- **Client**: The frontend React application
- **Server**: The backend built with Django Rest framework

## Running the Application Locally

1. Clone the repository
    ```bash
    git clone
    ```

2. To run the Backend Bookapp
    ```bash
    cd server
    cd bookapp
    python3 manage.py runserver
    ```
    Then, open the app at `http://127.0.0.1:8000/api/books/`

3. Run the Frontend
    ```bash
    cd client
    cd app
    ```
    Then
    ```bash
    npm run dev
    ```
    Then, access the app at `http://localhost:5173/`
