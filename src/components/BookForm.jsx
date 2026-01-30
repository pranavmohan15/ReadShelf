import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addBook, updateBook } from "../features/books/bookSlice";

function BookForm({ closeForm, editingBook }) {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [status, setStatus] = useState("Wishlist");

  // Populate form when editing,means it fills the form with book data
  useEffect(() => {
    if (editingBook) {
      setTitle(editingBook.title || "");
      setAuthor(editingBook.author || "");
      setDescription(editingBook.description || "");
      setImage(editingBook.image || "");
      setStatus(editingBook.status || "Read");
    }
  }, [editingBook]);
  //stops page reload
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !author.trim()) {
      alert("Title and Author are required");
      return;
    }
    // creates a book object.
    const payload = {
      ...editingBook,
      title,
      author,
      description,
      image,
      status,
    };

    if (editingBook) {
      dispatch(updateBook(payload));
    } else {
      dispatch(
        addBook({
          ...payload,
          id: Date.now(),
          isFavorite: false,
        })
      );
    }

    closeForm();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Title */}
      <div>
        <label className="block text-sm font-medium mb-1">*Title</label>
        <input
          type="text"
          className="w-full border border-gray-300 p-2 rounded"
          value={title}
          onChange={(e) => {
            const value = e.target.value;
            if (/^[a-zA-Z0-9\s.'-]*$/.test(value)) {
              setTitle(value);
            }
          }}
          placeholder="Enter book title"
        />
      </div>

      {/* Author */}
      <div>
        <label className="block text-sm font-medium mb-1">*Author</label>
        <input
          type="text"
          className="w-full border border-gray-300 p-2 rounded"
          value={author}
          onChange={(e) => {
            const value = e.target.value;
            if (/^[a-zA-Z\s.'-]*$/.test(value)) {
              setAuthor(value);
            }
          }}
          placeholder="Enter author name"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Description (max 20 words)
        </label>
        <textarea
          className="w-full border border-gray-300 p-2 rounded"
          value={description}
          onChange={(e) => {
            const words = e.target.value.split(/\s+/);  // --\s means any whitespace character,+ means one or more of them.--
            if (words.length <= 20) {
              setDescription(e.target.value);
            }
          }}
          placeholder="Short description"
        />
      </div>

      {/* Image URL */}
      <div>
        <label className="block text-sm font-medium mb-1">Image URL</label>
        <input
          type="text"
          className="w-full border border-gray-300 p-2 rounded"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Paste image URL"
        />
      </div>

      {/* Status */}
      <div>
        <label className="block text-sm font-medium mb-1">Status</label>
        <select
          className="w-full border border-gray-300 p-2 rounded"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="WishList">Want to Read</option>
          <option value="Reading">Reading</option>
          <option value="Read">Read</option>
        </select>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 pt-4">
        <button
          type="button"
          onClick={closeForm}
          className="px-4 py-2 border rounded cursor-pointer"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
        >
          {editingBook ? "Update Book" : "Save"}
        </button>
      </div>
    </form>
  );
}

export default BookForm;
