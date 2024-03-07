import { useEffect, useState } from "react";
import "./AllProducts.css";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((respo) => respo.json())
      .then((allData) => setProducts(allData))
      .catch((err) => console.error("Fehler in Produkt-Fetch", err));
  }, []);
  console.log(products);

  return (
    <>
      <h1>All Beers</h1>
      <section className="all-beers">
        {products ? (
          products.map((singleProduct, index) => (
            <article key={index}>
              <div>
                <img src={singleProduct.image_url} alt="bild" />
              </div>
              <div className="all-content">
                <h2>{singleProduct.name}</h2>
                <h3>{singleProduct.tagline}</h3>
                <p> Created by: {singleProduct.name}</p>
                <Link to={`/detail/${singleProduct._id}`}>Details</Link>
              </div>
            </article>
          ))
        ) : (
          <p>load...</p>
        )}
      </section>
    </>
  );
};

export default AllProducts;
