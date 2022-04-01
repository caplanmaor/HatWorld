import React, { useEffect, useState } from "react";

let allItems = [];
function Catalog() {
  // copy all items

  // get all bikes from DB
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://127.0.0.1:5000/bikes");
      const items = await response.json();
      allItems = items;
      setData(items);
    };
    fetchData();
  }, []);

  // get price and name filters
  const [formData, setFormData] = React.useState({
    name: "",
    price: "",
  });
  let { name, price } = formData;
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // save form
  const handleSubmit = (e) => {
    e.preventDefault();
    let newData = filterData();
    setData(newData);
  };

  // filter items
  const filterData = () => {
    let newData = allItems.filter((item) => {
      let item_name = item.name;
      if (
        (item_name.toLocaleLowerCase().includes(name.toLocaleLowerCase()) ||
          name == "") &&
        (item.price <= price || price == "")
      ) {
        return item;
      }
    });
    return newData;
  };

  return (
    <div className="catalog">
      <div className="filter">
        <form onSubmit={handleSubmit}>
          <h4>NAME</h4>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
          <h4>MAX PRICE</h4>
          <input
            type="text"
            name="price"
            value={price}
            onChange={handleInputChange}
          />
          <div>
            <button className="refresh-btn" type="submit">
              REFRESH
            </button>
          </div>
        </form>
      </div>
      <div className="items">
        {data.map((bike) => (
          <div className="bike" key={bike.id}>
            <h3 className="bike-name">{bike.name}</h3>
            <img className="bike-img" src={bike.img}></img>
            <h2 className="bike-price">{bike.price}$</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;
