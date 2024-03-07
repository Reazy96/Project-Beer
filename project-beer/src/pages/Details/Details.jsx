import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Details.css";

const Details = () => {
  const [detail, setDetail] = useState([]);
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((resp) => resp.json())
      .then((allData) => setDetail(allData))
      .catch((err) => console.error("Fehler in Detail-Fetch", err));
  }, []);

  const { _id } = useParams();
  useEffect(() => {
    const find = detail.find((item) => String(item._id) === String(_id));
    setFiltered(find);
  }, [detail]);

  return (
    <section>
      <h1>Details</h1>
      {filtered ? (
        <article className="detail">
          <img src={filtered.image_url} alt="" />
          <h1>{filtered.name}</h1>
          <h2>{filtered.tagline}</h2>
          <div className="brewed">
            <p>First brewed:</p> <p>{filtered.first_brewed}</p>
          </div>
          <div>
            <p>Attenuation level:</p> <p>{filtered.attenuation_level}</p>
          </div>
          <p>{filtered.description}</p>
          <Link to="/all">Back</Link>
        </article>
      ) : (
        <p>Load...</p>
      )}
    </section>
  );
};

export default Details;

// attenuation_level: 75;
// brewers_tips: "The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.";
// contributed_by: "Sam Mason <samjbmason>";
// description: "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.";
// expireAt: "2024-03-06T07:00:13.277Z";
// first_brewed: "09/2007";
// image_url: "https://images.punkapi.com/v2/keg.png";
// name: "Buzz";
// tagline: "A Real Bitter Experience.";
// __v: 0;
// _id: "65e8147da8ee4b0002ae05df";
