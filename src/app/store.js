import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../features/books/bookSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig = {
  key: "books",
  storage,
};
// “Hey Redux, whenever books change, save them to localStorage.”

const persistedBookReducer = persistReducer(
  persistConfig,
  bookReducer
);

export const store = configureStore({
  reducer: {
    books: persistedBookReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
    // Redux Persist uses some non-serializable values internally. Without this, Redux throws warnings.“Don’t worry, I know what I’m doing.”
});


export const persistor = persistStore(store);
