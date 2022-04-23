import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import moment from "moment-timezone";

const Detalle = () => {
  const { id } = useParams();
  const [detalle, setDetalle] = React.useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `http://api.mercadopublico.cl/servicios/v1/publico/licitaciones.json?estado=activas&ticket=54296D76-CAFF-4964-886F-35E9223D30B4&Codigo=${id}`
      );
      console.log(res.data.Listado);
      setDetalle(res.data.Listado);
    };

    getData();
  }, [id]);

  return (
    <div className="text-light">
      {detalle.map((item) => {
        return (
          <div key={item.CodigoExterno}>
            <h1 className="display-1 text-center">
              <span>Detalle de Licitación: {item.CodigoExterno}</span>
            </h1>
            <div className="container mt-4">
              <dl className="row">
                <dt className="col-sm-3">Nombre:</dt>
                <dd className="col-sm-9">{item.Nombre}</dd>
                <dt className="col-sm-3">Estado:</dt>
                <dd className="col-sm-9">{item.Estado}</dd>
                <dt className="col-sm-3">Tipo:</dt>
                <dd className="col-sm-9">{item.Tipo}</dd>
                <dt className="col-sm-3">Tiempo restante:</dt>
                <dd className="col-sm-9">{item.DiasCierreLicitacion} días</dd>
                <dt className="col-sm-3">Descripción:</dt>
                <dd className="col-sm-9">
                  <p>
                    <span className="fw-light">{item.Descripcion}</span>
                  </p>
                </dd>
              </dl>
              <hr />
              <div className="container mb-4">
                <h3 className="display-3 text-center">Información Comprador</h3>
              </div>
              <div className="container">
                <dl className="row">
                  <dt className="col-sm-3">Nombre Organismo:</dt>
                  <dd className="col-sm-9">{item.Comprador.NombreOrganismo}</dd>
                </dl>
                <hr />
                <dl className="row">
                  <dt className="col-sm-3">Rut:</dt>
                  <dd className="col-sm-9">{item.Comprador.RutUnidad}</dd>
                </dl>
                <hr />
                <dl className="row">
                  <dt className="col-sm-3">Nombre Unidad:</dt>
                  <dd className="col-sm-9">{item.Comprador.NombreUnidad}</dd>
                </dl>
                <hr />
                <dl className="row">
                  <dt className="col-sm-3">Comuna / Región:</dt>
                  <dd className="col-sm-9">
                    {item.Comprador.ComunaUnidad} /{" "}
                    {item.Comprador.RegionUnidad}
                  </dd>
                </dl>
                <hr />
                <dl className="row">
                  <dt className="col-sm-3">Usuario/a encargado/a:</dt>
                  <dd className="col-sm-9">{item.Comprador.NombreUsuario}</dd>
                </dl>
                <hr />
                <dl className="row">
                  <dt className="col-sm-3">Cargo Usuario/a:</dt>
                  <dd className="col-sm-9">{item.Comprador.CargoUsuario}</dd>
                </dl>
                <hr />
              </div>
              <hr />
              <div className="container">
                <h3 className="display-3 text-center">Fechas</h3>
              </div>
              <div className="container">
                <div className="row mt-4">
                  <div className="col">
                    <dl className="row">
                      <dt className="col-sm-3">Fecha Creación:</dt>
                      <dd className="col-sm-9">
                        {moment(item.Fechas.FechaCreacion).format(
                          "DD/MM/YYYY kk:mm"
                        )}
                      </dd>
                      <dt className="col-sm-3">
                        Fecha Publicación Respuestas:
                      </dt>
                      <dd className="col-sm-9">
                        {moment(item.Fechas.FechaPubRespuestas).format(
                          "DD/MM/YYYY kk:mm"
                        )}
                      </dd>
                      <dt className="col-sm-3">Fecha Adjudicación:</dt>
                      <dd className="col-sm-9">
                        {moment(item.Fechas.FechaAdjudicacion).format(
                          "DD/MM/YYYY kk:mm"
                        )}
                      </dd>
                      <dt className="col-sm-3">Fecha Estimada Firma:</dt>
                      <dd className="col-sm-9">
                        {moment(item.Fechas.FechaEstimadaFirma).format(
                          "DD/MM/YYYY kk:mm"
                        )}
                      </dd>
                    </dl>
                  </div>
                  <div className="col">
                    <dl className="row">
                      <dt className="col-sm-3">Fecha Cierre:</dt>
                      <dd className="col-sm-9">
                        {moment(item.Fechas.FechaCierre).format(
                          "DD/MM/YYYY kk:mm"
                        )}
                      </dd>
                      <dt className="col-sm-3">Fecha Apertura Técnica:</dt>
                      <dd className="col-sm-9">
                        {moment(item.Fechas.FechaActoAperturaTecnica).format(
                          "DD/MM/YYYY kk:mm"
                        )}
                      </dd>
                      <dt className="col-sm-3">Fecha Estimada Adjudicación:</dt>
                      <dd className="col-sm-9">
                        {moment(item.Fechas.FechaEstimadaAdjudicacion).format(
                          "DD/MM/YYYY kk:mm"
                        )}
                      </dd>
                      <dt className="col-sm-3">Fecha Usuario:</dt>
                      <dd className="col-sm-9">
                        {moment(item.Fechas.FechasUsuario).format(
                          "DD/MM/YYYY kk:mm"
                        )}
                      </dd>
                    </dl>
                  </div>
                  <div className="w-100"></div>
                  <div className="col">
                    <dl className="row">
                      <dt className="col-sm-3">Fecha Inicio:</dt>
                      <dd className="col-sm-9">
                        {moment(item.Fechas.FechaInicio).format(
                          "DD/MM/YYYY kk:mm"
                        )}
                      </dd>
                      <dt className="col-sm-3">Fecha Apertura Económica:</dt>
                      <dd className="col-sm-9">
                        {moment(item.Fechas.FechaActoAperturaEconomica).format(
                          "DD/MM/YYYY kk:mm"
                        )}
                      </dd>
                      <dt className="col-sm-3">Fecha Soporte Físico:</dt>
                      <dd className="col-sm-9">
                        {moment(item.Fechas.FechaSoporteFisico).format(
                          "DD/MM/YYYY kk:mm"
                        )}
                      </dd>
                      <dt className="col-sm-3">Fecha Visita:</dt>
                      <dd className="col-sm-9">
                        {moment(item.Fechas.FechaVisitaTerreno).format(
                          "DD/MM/YYYY kk:mm"
                        )}
                      </dd>
                    </dl>
                  </div>
                  <div className="col">
                    <dl className="row">
                      <dt className="col-sm-3">Fecha Final:</dt>
                      <dd className="col-sm-9">
                        {moment(item.Fechas.FechaFinal).format(
                          "DD/MM/YYYY kk:mm"
                        )}
                      </dd>
                      <dt className="col-sm-3">Fecha Publicación:</dt>
                      <dd className="col-sm-9">
                        {moment(item.Fechas.FechaPublicacion).format(
                          "DD/MM/YYYY kk:mm"
                        )}
                      </dd>
                      <dt className="col-sm-3">Fecha Tiempo Evaluación:</dt>
                      <dd className="col-sm-9">
                        {moment(item.Fechas.FechaTiempoEvaluacion).format(
                          "DD/MM/YYYY kk:mm"
                        )}
                      </dd>
                      <dt className="col-sm-3">Fecha Entrega Antecedentes:</dt>
                      <dd className="col-sm-9">
                        {moment(item.Fechas.FechaEntregaAntecedentes).format(
                          "DD/MM/YYYY kk:mm"
                        )}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="container">
              <h3 className="display-3 text-center">Items</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Detalle;
