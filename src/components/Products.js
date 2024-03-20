import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* <Navbar /> */}

      <div className="products">
        <h3 className="text-center text-light p-2 fs-4 fw-bold rounded-pill ">
          This is about the Products page
        </h3>
        <br />
        <input
          className="form-control rounded-pill"
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <br />

        <div className="row">
          {filteredProducts.map((product) => (
            <div className="col-md-4" key={product.id}>
              <div
                className="card mb-4"
                style={{ width: "400px", height: "350px" }}
              >
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  style={{ maxHeight: "200px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
