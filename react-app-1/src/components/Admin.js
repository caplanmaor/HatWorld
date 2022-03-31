import React from "react";
import { useEffect } from "react";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    saveForm();
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

  const handleDelete = (e) => {
    e.preventDefault();
    deleteBike();
  };

  return (
    <div className="admin">
      <h1>Admin Tools</h1>
      <h2>Remove Bikes</h2>
      <div>
        <br />
        <select onChange={handleSelectChange}>
          {data.map((data) => (
            <option value={data.name}>{data.name}</option>
          ))}
        </select>
      </div>
      <button onClick={handleDelete}>remove</button>
      <h2>Add Bikes</h2>
      <form onSubmit={handleSubmit}>
        <h3>bike image</h3>
        <input
          type="text"
          name="image"
          value={image}
          onChange={handleInputChange}
        />
        <h3>bike name</h3>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
        <h3>bike price</h3>
        <input
          type="text"
          name="price"
          value={price}
          onChange={handleInputChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Admin;
