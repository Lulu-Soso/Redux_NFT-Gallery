import { useEffect, useState } from "react";
import axios from "axios";
import Form from "./components/Form";
import PicCard from "./components/PicCard";
import { useDispatch, useSelector } from "react-redux";
import { setPicturesdata } from "./feature/pictures.slice";

const App = () => {
  // const [picsData, setPicsData] = useState([]);
  const dispatch = useDispatch(); // sert à déclencher les actions et incrémenter le store
  const picsData = useSelector((state) => state.pictures.pictures); // sert à faire appel aux données qui sont dans notre store

  const getPictures = () => {
    axios
      .get("http://localhost:5000/pictures")
      // .then((res) => setPicsData(res.data));
      .then((res) => dispatch(setPicturesdata(res.data))); // On incremente notre store
  };

  useEffect(() => {
    getPictures();
  }, []);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/pictures")
  //     // .then((res) => setPicsData(res.data));
  //     .then((res) => dispatch(setPicturesdata(res.data))); // On incremente notre store
  // }, []);

  return (
    <>
      <h1>NFT Gallery</h1>
      <Form getPictures={getPictures} />
      <div className="cards-container">
        {picsData?.map((pic, index) => (
          <PicCard key={index} pic={pic} />
        ))}
      </div>
    </>
  );
};

export default App;
