import { configureStore } from "@reduxjs/toolkit";
import picturesReducer from "../feature/pictures.slice"


export default configureStore({
  // On va pouvoir combiner tous nos reducers
  reducer: {
    pictures: picturesReducer,
  },
});
