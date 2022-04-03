import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const axios = require("axios");

function Admin() {
  //create bike
  const [formData, setFormData] = React.useState({
    image: "",
    name: "",
    price: "",
  });

  const { image, name, price } = formData;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const saveForm = () => {
    axios
      .post(`http://localhost:5000/createBike`, {
        data_image: image,
        data_name: name,
        data_price: price,
      })
      .then(function (res) {
        console.log(res);
      });
  };

  // bikes for select
  const [data, setData] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/bikes");
      const bikesData = await response.json();
      setData(bikesData);
    };
    fetchData();
  }, []);

  // select

  let [select, setSelect] = React.useState("select a bike");

  const handleSelectChange = (e) => {
    setSelect(e.target.value);
  };

  // remove

  const deleteBike = () => {
    axios
      .post("http://localhost:5000/deleteBike", {
        data: select,
      })
      .then(function (res) {
        console.log(res);
      });
  };

  let navi = useNavigate();
  function handleReturnClick() {
    navi("/");
  }

  const handleDelete = (e) => {
    e.preventDefault();
    deleteBike();
    navi("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveForm();
    navi("/");
  };

  return (
    <div className="admin">
      <h1 className="admin-title">Admin Tools</h1>
      <button className="admin-btn" onClick={handleReturnClick}>
        Exit Admin Tools
      </button>
      <h2>Add item</h2>
      <form onSubmit={handleSubmit}>
        <h3>item image</h3>
        <input
          type="text"
          name="image"
          value={image}
          onChange={handleInputChange}
        />
        <h3>item name</h3>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
        <h3>item price</h3>
        <input
          type="text"
          name="price"
          value={price}
          onChange={handleInputChange}
        />
        <br />
        <button type="submit">Add</button>
        <h2>Remove item</h2>
        <div>
          <br />
          <select onChange={handleSelectChange}>
            {data.map((data) => (
              <option value={data.name}>{data.name}</option>
            ))}
          </select>
        </div>
        <button onClick={handleDelete}>remove</button>
      </form>
    </div>
  );
}

export default Admin;
