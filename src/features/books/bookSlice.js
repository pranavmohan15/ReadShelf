import { createSlice } from "@reduxjs/toolkit";


const bookSlice=createSlice({
    name:"books",
    initialState:{list:[]},
    reducers:{
        addBook:(state,action)=>{
            state.list.push(action.payload)
        },
        // Redux Toolkit uses Immer,You write mutation-style code, but Redux still behaves immutably.
        updateBook:(state,action)=>{
            const index=state.list.findIndex(
                (book)=>book.id === action.payload.id
            );
            if(index !== -1){
                state.list[index]=action.payload
            }
        },
        deleteBook:(state,action)=>{
            state.list=state.list.filter(
                (book)=>book.id !== action.payload
            );
        },

        toggleFav: (state, action) => {
        const book = state.list.find(
        (bk) => bk.id === action.payload
        );

        if (book) {
        book.isFavorite = !book.isFavorite;
        }
        }

    }
})
export const{addBook,updateBook,deleteBook,toggleFav}=bookSlice.actions
export default bookSlice.reducer;