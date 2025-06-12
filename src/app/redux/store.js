// const { configureStore } = require("@reduxjs/toolkit");

// //configure store helps us to create a store
// export const store = configureStore({
//  reducer: {},
// })
// store.js
const { configureStore } = require('@reduxjs/toolkit');
import reducer from "./slice";


const store = configureStore({
  reducer: reducer
});

module.exports = store;
