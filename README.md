# 📚 ReadShelf – Book Management App

ReadShelf is a personal book management application built using React, Redux Toolkit, Redux Persist, and Tailwind CSS. It allows users to manage their reading list with full CRUD functionality, favorites, filtering, pagination, and persistent storage.


Live:https://vercel.com/chinduttns-projects/read-shelf

---

## 🚀 Features

- Add new books  
- Edit existing books  
- Delete books with confirmation  
- Mark and unmark books as favorites  
- Filter books by All, Read, Reading, Wishlist, and Favorites  
- Pagination with 8 books per page  
- Persistent storage using redux-persist  
- Responsive and clean UI  

---

## 🧠 Tech Stack

- React  
- Redux Toolkit  
- Redux Persist  
- Tailwind CSS  
- Lucide React Icons  

---

## 📁 Project Structure

src/  
├── app/  
│   └── store.js  
├── features/  
│   └── books/  
│       └── bookSlice.js  
├── components/  
│   ├── Navbar.jsx  
│   ├── BookForm.jsx  
│   └── BookList.jsx  
├── App.jsx  
├── main.jsx  
└── index.css  

---

## ⚙️ Installation & Setup

1. Clone the repository  
git clone https://github.com/your-username/readshelf-react.git  

2. Navigate to project  
cd readshelf-react  

3. Install dependencies  
npm install  

4. Start development server  
npm run dev  

5. Open in browser  
http://localhost:5173  

---

## 📖 How the App Works

Add Book  
- Click Add Book  
- Enter title, author, description, image URL  
- Select book status (default: Wishlist)  
- Click Save  

Edit Book  
- Click the edit icon  
- Existing book details load into the form  
- Update and save  

Favorite Book  
- Click the heart icon  
- Confirm action  

Delete Book  
- Click the delete icon  
- Confirm deletion  

Filter Books  
- Use the filter dropdown near Add Book  
- Filter by status or favorites  

Pagination  
- Displays 8 books per page  
- Navigate using page numbers or Prev / Next buttons  

---

## 📦 Sample Book Object

{
  id: 1,
  title: "Atomic Habits",
  author: "James Clear",
  description: "Build better habits",
  image: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg",
  status: "WishList",
  isFavorite: false
}

---

## 📚 Book Cover Image Sources

Atomic Habits  
https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg  

The Psychology of Money  
https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg  

Rich Dad Poor Dad  
https://covers.openlibrary.org/b/isbn/9781612680194-L.jpg  

Ikigai  
https://covers.openlibrary.org/b/isbn/9780143130727-L.jpg  

---

## 💾 Persistence

ReadShelf uses redux-persist to store book data in localStorage. Data remains available even after refreshing or reopening the browser.

---

## 🎯 Purpose of This Project

This project was built to practice React fundamentals, Redux Toolkit state management, CRUD operations, persistent storage, and UI design basics.

---

## 🧑‍💻 Author

Built as a learning project by a React beginner.

---

## 📜 License

MIT License
