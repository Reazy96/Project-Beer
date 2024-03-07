import { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [random, setRandom] = useState();
  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((respo) => respo.json())
      .then((allData) => setRandom(allData))
      .catch((err) => console.error("Fehler in Random-Fetch", err));
  }, []);
  console.log(random);

  return (
    <section className="home">
      <article>
        <img src="../../../public/christin-hume-08tX2fsuSLg-unsplash.jpg" alt="" />
        <Link to="/all">
          <h1>All Beers</h1>
        </Link>
        <p>
          Lorem haram dolor, sit amet consectetur adipisicing elit. Ipsum maiores quia, sapiente adipisci facere
          voluptas.
        </p>
      </article>
      <article>
        <img src="../../../public/proriat-hospitality-flENqflm6xU-unsplash.jpg" alt="" />
        {random ? (
          <Link to={`/detail/${random._id}`}>
            <h1>Random Beer</h1>
          </Link>
        ) : (
          <p>load...</p>
        )}

        <p>
          Lorem haram dolor, sit amet consectetur adipisicing elit. Ipsum maiores quia, sapiente adipisci facere
          voluptas.
        </p>
      </article>
    </section>
  );
};

export default Home;
