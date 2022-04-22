import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Tabla = () => {
  const [tabla, setTabla] = React.useState([]);

  const getData = async () => {
    const res = await axios.get(
      "http://api.mercadopublico.cl/servicios/v1/publico/licitaciones.json?estado=activas&ticket=54296D76-CAFF-4964-886F-35E9223D30B4"
    );
    console.log(res.data.Listado);
    setTabla(res.data.Listado);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <h1>Tabla</h1>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Codigo Externo</th>
            <th scope="col">Nombre</th>
            <th scope="col">Fecha Cierre</th>
            <th scope="col">#</th>
          </tr>
        </thead>
        <tbody>
          {tabla.map((item) => (
            <tr scope="row" key={item.CodigoExterno}>
              <th>
                <span>{item.CodigoExterno}</span>
              </th>
              <td>
                <span>{item.Nombre}</span>
              </td>
              <td>
                <span>{item.FechaCierre}</span>
              </td>
              <Link to={`/detalle/${item.CodigoExterno}`}>
                <button className="btn btn-secondary">Detalle</button>
              </Link>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabla;
