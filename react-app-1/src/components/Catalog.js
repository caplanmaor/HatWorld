import React, { useEffect, useState } from "react";

function Catalog() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://127.0.0.1:5000/bikes");

      const bikesData = await response.json();
      setData(bikesData);
    };
    fetchData();
  }, []);

  return (
    <div className="catalog">
      {data.map((bike) => (
        <div className="bike" key={bike.id}>
          <h3 className="bike-name">{bike.name}</h3>
          <img className="bike-img" src={bike.img}></img>
          <h2 className="bike-price">{bike.price}$</h2>
        </div>
      ))}
    </div>
  );
}

export default Catalog;
