import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";

import "./products.css";
import Prod from "./Prod";

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
    return;
  };

  // const PrdDetails = (data2) => {
  //   console.log(data2);
  // }

  const fetchData = () => {
    fetch("https://run.mocky.io/v3/4c63603a-db22-4e32-9bf9-797d356085c1")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
        setFilter(data);
        // PrdDetails(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {/* {console.log(typeof(data.id))} */}
      <div className="button d-flex justify-content-center mb-3">
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => setFilter(data)}
        >
          All Products
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filterProduct("men's clothing")}
        >
          Men's Collection
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filterProduct("women's clothing")}
        >
          Women's Collection
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filterProduct("jewelery")}
        >
          Jewelery
        </button>
      </div>

      <div className="clearfix">
        <div className="row justify-content-center">
          {filter.map((data) => (
            <div className="col-md-3 animated fadeIn d-flex mb-4" key={data.id}>
              <div className="card h-100 text-center">
                <div className="card-body text-center">
                  <div className="avatar" height="250px">
                    <img
                      src={data.image}
                      className="card-img-top"
                      alt=""
                      height="250px"
                    />
                  </div>

                  <div>
                    <h6 className="card-title text-center" href="/#">
                      {data.title.substring(0, 12)}
                    </h6>
                    {/* <p>{data.rating.rate}</p> */}
                    {/*correctedError*/}
                  </div>
                  {/* <NavLink
                    to={`./${data.id}`}
                    className="btn btn-outline-secondary text-center"
                  >
                    View Details
                  </NavLink> */}
                  <NavLink to={`./${data.id}`}>
                  <button
          className="btn btn-outline-dark me-2"
          // onClick={() => PrdDetails(data)}
        >
          View Details
        </button>
        </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* {console.log("CHECK")}
      {console.log(data)} */}
    </div>
  );
}

export default Products;
