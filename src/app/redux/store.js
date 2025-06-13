// const { configureStore } = require("@reduxjs/toolkit");

// //configure store helps us to create a store
// export const store = configureStore({
//  reducer: {},
// })
// store.js
const { configureStore } = require('@reduxjs/toolkit');
import UsersReducer from "./slice";
import todoReducer from "./todoslice";

const store = configureStore({
  reducer: {
    usersData: UsersReducer,
    todoData: todoReducer
  }
});

module.exports = store;
