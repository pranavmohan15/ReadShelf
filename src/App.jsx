import React, { useState } from "react";
import Navbar from "./components/Navbar";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

const FILTER_LABELS = {
  ALL: "All Books",
  Read: "Read",
  Reading: "Reading",
  WishList: "Wishlist",
  FAV: "Favorites",
};

function App() {
  const [showForm, setShowForm] = useState(false);
  const [editingBook, setEditingBook] = useState(null);
  const [filter, setFilter] = useState("ALL");
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-tr from-blue-200 via-amber-50 to-yellow-200 py-6">
        {/* TOP ACTION BAR */}
        <div className="max-w-7xl mx-auto px-4 mb-6">
          <div className="flex items-center justify-end gap-3">

            {/* FILTER */}
            <div className="relative">
              <button
                onClick={() => setOpen((v) => !v)}
                className="w-44 px-6 py-3 bg-blue-400 text-white rounded-md text-center"              >
                {FILTER_LABELS[filter]} ▾
              </button>

              {open && (
                <div className="absolute right-0 mt-2 w-44 bg-white border rounded shadow z-10">
                  {Object.entries(FILTER_LABELS).map(
                    ([value, label]) => (
                      <button
                        key={value}
                        onClick={() => {
                          setFilter(value);
                          setOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        {label}
                      </button>
                    )
                  )}
                </div>
              )}
            </div>

            {/* ADD BOOK */}
            <button
              type="button"
              onClick={() => {
                setEditingBook(null);
                setShowForm(true);
              }}
              className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-400 transition"
            >
              Add Book
            </button>
          </div>
        </div>

        {/* BOOK LIST */}
        <div className="max-w-7xl mx-auto px-4">
          <BookList
            filter={filter}
            onEdit={(book) => {
              setEditingBook(book);
              setShowForm(true);
            }}
          />
        </div>
      </div>

      {/* MODAL */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 backdrop-blur-md bg-black/20"
            onClick={() => setShowForm(false)}
          />
          <div className="relative bg-white rounded-xl p-6 w-full max-w-md shadow-2xl">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
              onClick={() => setShowForm(false)}
            >
              ✕
            </button>

            <BookForm
              closeForm={() => setShowForm(false)}
              editingBook={editingBook}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
