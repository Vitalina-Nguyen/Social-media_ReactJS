import { combineReducers } from "redux";
import { configureStore  } from "@reduxjs/toolkit";
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';


// Это как state - в каждом из этих файлов записаны данные по умолчанию
// Redux вызывает эти reduces изнакчально, чтобы забрать данные в state
let reducer = combineReducers({
    profilePage : profileReducer,
    dialogsPage : dialogsReducer,
    sidebar : sidebarReducer,
})

// Создали стор, в котором уже есть методы getSate, subscribe, 
// dispatches - нужно собрать в один объект и передать (сделано выше)

const store = configureStore ({
    reducer:  {
        profilePage : profileReducer,
        dialogsPage : dialogsReducer,
        sidebar : sidebarReducer,
    }
}); 
export default store;