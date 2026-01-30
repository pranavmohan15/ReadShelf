import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteBook, toggleFav } from "../features/books/bookSlice";
import { Heart, Pencil, Trash2 } from "lucide-react";

const BOOKS_PER_PAGE = 8;

function BookList({ onEdit, filter }) {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.list);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredBooks = books.filter((book) => {
    if (filter === "ALL") return true;
    if (filter === "FAV") return book.isFavorite;
    return book.status === filter;
  });

  const totalPages = Math.ceil(filteredBooks.length / BOOKS_PER_PAGE);
  const startIndex = (currentPage - 1) * BOOKS_PER_PAGE;
  const currentBooks = filteredBooks.slice(
    startIndex,
    startIndex + BOOKS_PER_PAGE
  );
// Prevents empty pages.
  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  const getStatusColor = (status) => {
    if (status === "Read") return "text-green-600";
    if (status === "Reading") return "text-orange-500";
    if (status === "WishList") return "text-red-600";
    
  };

  if (filteredBooks.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-20">
        No books found for this filter
      </p>
    );
  }

  return (
    <div className="mt-6">
      {/* BOOK GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {currentBooks.map((bok) => (
          <div
            key={bok.id}
            className="relative bg-white p-4 rounded-xl shadow hover:shadow-lg transition text-center flex flex-col"
          >
            <button
              onClick={() => {
                const message = bok.isFavorite
                  ? "Remove this book from favorites?"
                  : "Add this book to favorites?";

                const ok = window.confirm(message);

                if (ok) {
                  dispatch(toggleFav(bok.id));
                }
              }}
              className="absolute top-3 right-3"
            >
              <Heart
                className={`w-5 h-5 ${bok.isFavorite
                  ? "fill-red-500 text-red-500"
                  : "text-gray-400"
                  }`}
              />
            </button>


            <div className="w-36 h-52 mx-auto mb-3 flex items-center justify-center">
              {bok.image ? (
                <img
                  src={bok.image}
                  alt={bok.title}
                  className="w-full h-full object-contain"
                />
              ) : (
                <p className="text-red-500 font-semibold">
                  {bok.title}
                </p>
              )}
            </div>

            <h3 className="font-bold text-lg">{bok.title}</h3>
            <p className="text-yellow-600 text-sm">
              by {bok.author}
            </p>
            {bok.description && (
              <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                {bok.description}
              </p>
            )}


            <p className="font-semibold text-sm">
              <span className="text-black">Status:</span>{" "}
              <span className={getStatusColor(bok.status)}>
                {bok.status}
              </span>
            </p>

            <div className="mt-auto flex justify-between px-2 pt-4">
              <button
                onClick={() => onEdit(bok)}
                className="text-blue-600 hover:scale-110"
              >
                <Pencil size={18} />
              </button>
              <button
                onClick={() => {
                  const ok = window.confirm(
                    "Are you sure you want to delete this book?"
                  );
                  if (ok) {
                    dispatch(deleteBook(bok.id));
                  }
                }}
                className="text-red-600 hover:scale-110"
              >
                <Trash2 size={18} />
              </button>

            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="px-3 py-1 border rounded disabled:opacity-40"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 border rounded ${currentPage === i + 1
                ? "bg-blue-600 text-white"
                : ""
                }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="px-3 py-1 border rounded disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default BookList;
