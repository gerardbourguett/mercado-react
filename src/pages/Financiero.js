/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Financiero = () => {
  const URL = "https://mindicador.cl/api/";

  const [indicador, setIndicador] = useState([]);

  const getDolar = async () => {
    const res = await axios.get(URL);
    console.log(res.data);
    setIndicador(res.data);
  };

  useEffect(() => {
    getDolar();
  }, []);

  return (
    <div className="container row">
      <div className="text-light">
        <h1 className="display-1 text-center">
          <span>Indicadores Financieros</span>
        </h1>
      </div>
      <hr />
      <div className="row">
        <div className="col">
          <div className="card text-center" style={{ width: "10rem" }}>
            <img
              className="card-img-top"
              src="https://cdn.pixabay.com/photo/2014/10/23/10/10/dollars-499481__480.jpg"
              alt="Card image cap"
              style={{ width: "10rem", height: "10rem" }}
            />
            <div className="card-body">
              <h5 className="card-title">Dólar</h5>
              <p className="card-text">
                <span className="fw-light">${indicador?.dolar?.valor}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-center" style={{ width: "10rem" }}>
            <img
              className="card-img-top"
              src="https://is2-ssl.mzstatic.com/image/thumb/Purple118/v4/58/af/f5/58aff51f-61e0-b564-aead-0f1f2397e783/source/256x256bb.jpg"
              alt="Card image cap"
              style={{ width: "10rem", height: "10rem" }}
            />
            <div className="card-body">
              <h5 className="card-title">UF</h5>
              <p className="card-text">
                <span className="fw-light">${indicador?.uf?.valor}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-center" style={{ width: "10rem" }}>
            <img
              className="card-img-top"
              src="https://upload.wikimedia.org/wikipedia/commons/5/56/Reverso_1_euro.jpg"
              alt="Card image cap"
              style={{ width: "10rem", height: "10rem" }}
            />
            <div className="card-body">
              <h5 className="card-title">Euro</h5>
              <p className="card-text">
                <span className="fw-light">${indicador?.euro?.valor}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-center" style={{ width: "10rem" }}>
            <img
              className="card-img-top"
              src="https://www.utmhoy.cl/wp-content/uploads/2020/05/valor-utm-hoy.jpg"
              alt="Card image cap"
              style={{ width: "10rem", height: "10rem" }}
            />
            <div className="card-body">
              <h5 className="card-title">UTM</h5>
              <p className="card-text">
                <span className="fw-light">${indicador?.utm?.valor}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Financiero;
