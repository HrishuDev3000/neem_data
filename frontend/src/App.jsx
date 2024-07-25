import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/sys")
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, []);

  return (
    
        <table className="table">
          <thead className="head">
            <tr>
              <th>ID</th>
              <th>Ingredient</th>
              <th>Used</th>
              <th>Weight</th>
              <th>Unit Price</th>
              <th>Nominal Price</th>
              <th>Actual Price</th>
              <th>Avg Density</th>
              <th>Density</th>
              <th>Price Grams</th>
              <th>PPM</th>
              <th>GST Tax</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={d.ID}>
                <td>{d.ID}</td>
                <td>{d.ingredient}</td>
                <td>{d.used}</td>
                <td>{d.weight}</td>
                <td>{d.unit_price}</td>
                <td>{d.nominal_price}</td>
                <td>{d.actual_price}</td>
                <td>{d.avg_density}</td>
                <td>{d.density}</td>
                <td>{d.price_grams}</td>
                <td>{d.ppm}</td>
                <td>{d.gst_tax}</td>
                <td>{d.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
  );
}

export default App;

