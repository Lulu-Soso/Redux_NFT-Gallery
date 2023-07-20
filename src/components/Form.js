import axios from "axios";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addPicture } from "../feature/pictures.slice";

const Form = ({ getPictures }) => {
  const inputArt = useRef();
  const inputYear = useRef();
  const formRef = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      artist: inputArt.current.value,
      year: inputYear.current.value,
      photo: `https://picsum.photos/400/${Math.round(
        Math.random() * 200 + 300
      )}`,
    };

    axios
      .post("http://localhost:5000/pictures", data)
      .then(() => {
        dispatch(addPicture(data)); // Pour envoyer la nouvelle donnée data dans le store
        // Remettre le formulaire à zéro
        formRef.current.reset();
      })
      .then(() => {
        dispatch(getPictures()); // Pour récupérer l'id pour pouvoir supprimer 
      });
  };

  return (
    <div className="form-container">
      <div className="form">
        <h3>Enregistrer une nouvelle photo</h3>
        <form onSubmit={(e) => handleSubmit(e)} ref={formRef}>
          <input type="text" placeholder="Artiste" ref={inputArt} />
          <input type="text" placeholder="Année" ref={inputYear} />
          <input type="submit" value="Envoyer" />
        </form>
      </div>
    </div>
  );
};

export default Form;
