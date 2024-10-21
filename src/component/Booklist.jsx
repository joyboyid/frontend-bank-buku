import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Booklist = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  });

  const getBooks = async () => {
    const response = await axios.get("http://localhost:8800/books");
    setBooks(response.data);
  };

  const deleteBook = async (bookId) => {
    await axios.delete(`http://localhost:8800/books/${bookId}`);
    getBooks();
  };

  return (
    <div>
      <h1 className="title">Books</h1>
      <h2 className="subtitle">List Books</h2>
      <Link to="/books/add" className="button is-primary mb-2">
        Add Book
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Buku</th>
            <th>Penulis</th>
            <th>Penerbit</th>
            <th>Tahun Terbit</th>
            <th>Jenis Buku</th>
            <th>Created By</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book.uuid}>
              <td>{index + 1}</td>
              <td>{book.nama_buku}</td>
              <td>{book.penulis}</td>
              <td>{book.penerbit}</td>
              <td>{book.thn_terbit}</td>
              <td>{book.jenis_buku}</td>
              <td>{book.user.name}</td>
              <td>
                <Link
                  to={`/books/edit/${book.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteBook(book.uuid)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Booklist;
