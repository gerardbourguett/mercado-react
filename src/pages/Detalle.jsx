import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Detalle = () => {
  const { id } = useParams();
  const [detalle, setDetalle] = React.useState([]);

  const getData = async () => {
    const res = await axios.get(
      `http://api.mercadopublico.cl/servicios/v1/publico/licitaciones.json?estado=activas&ticket=54296D76-CAFF-4964-886F-35E9223D30B4&Codigo=${id}`
    );
    console.log(res.data.Listado);
    setDetalle(res.data.Listado);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {detalle?.map((item) => {
        return (
          <div key={item.CodigoExterno}>
            <h1>Detalle de Licitación: {item.CodigoExterno}</h1>
            <h2>{item.Nombre}</h2>
            <h3>{item.Descripcion}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Detalle;
