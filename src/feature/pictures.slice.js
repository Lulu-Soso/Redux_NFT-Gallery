import { createSlice } from "@reduxjs/toolkit";

export const picturesSlice = createSlice({
  // On va pouvoir combiner l'action et le reducer
  name: "picture",
  initialState: {
    pictures: null,
  },
  reducers: {
    // setPictureData permet d'aller chercher donnée pictures dans notre serveur
    setPicturesdata: (state, { payload }) => {
      state.pictures = payload;
    },
    addPicture: (state, { payload }) => {
      state.pictures.push(payload);
    },
    editPicture: (state, { payload }) => {
      state.pictures = state.pictures.map((pic) => {
        if (pic.id === payload[1]) {
          return {
            ...pic,
            artist: payload[0],
          };
        } else {
          return pic;
        }
      });
    },
    deletePicture: (state, { payload }) => {
      // fitre et retourne tous les pics qui ne sont pas égals à pic.id
      state.pictures = state.pictures.filter((pic) => pic.id !== payload);
    },
  },
});

export const { setPicturesdata, addPicture, editPicture, deletePicture } =
  picturesSlice.actions;
export default picturesSlice.reducer;
