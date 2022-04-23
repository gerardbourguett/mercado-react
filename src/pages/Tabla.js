import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import moment from "moment";
import DataTable from "react-data-table-component";

const Tabla = () => {
  const [tabla, setTabla] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [pending, setPending] = React.useState(true);

  const getData = async () => {
    const res = await axios.get(
      "http://api.mercadopublico.cl/servicios/v1/publico/licitaciones.json?estado=activas&ticket=54296D76-CAFF-4964-886F-35E9223D30B4"
    );
    setTabla(res.data.Listado);
  };

  const filtro = tabla.filter(
    (item) =>
      item.Nombre.toLowerCase().includes(search.toLowerCase()) |
      item.CodigoExterno.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    getData();
    const timeout = setTimeout(() => getData(), 5000);
    setPending(false);
    return () => clearTimeout(timeout);
  }, []);

  const columns = [
    {
      name: "Codigo Externo",
      selector: (row) => row.CodigoExterno,
      sortable: true,
    },
    {
      name: "Nombre",
      selector: (row) => row.Nombre,
      sortable: true,
    },
    {
      name: "fecha Cierre",
      selector: (row) => moment(row.FechaCierre).format("YYYY/MM/DD kk:mm"),
      sortable: true,
    },
    {
      name: "#",
      selector: (row) => (
        <Link to={`/licitacion/${row.CodigoExterno}`}>
          <button className="btn btn-secondary">Detalle</button>
        </Link>
      ),
    },
  ];

  return (
    <div className="container table-responsive-xl">
      <div className="row">
        <input
          type="text"
          placeholder="Búsqueda por Código o Nombre"
          className="form-control bg-dark text-white border-0 mt-4 mb-4 text-center"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <DataTable
        title="Licitaciones Mercado Público al Día de Hoy"
        columns={columns}
        data={filtro}
        theme="dark"
        progressPending={pending}
        fixedHeader
        pagination
        persistTableHead
        responsive
        subHeaderAlign="right"
        subHeaderWrap
      />
      {/* <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">Codigo Externo</th>
            <th scope="col">Nombre</th>
            <th scope="col">Fecha Cierre</th>
            <th scope="col">#</th>
          </tr>
        </thead>
        <tbody>
          {filtro.map((item) => (
            <tr key={item.CodigoExterno}>
              <th scope="row">
                <span>{item.CodigoExterno}</span>
              </th>
              <td>
                <span>{item.Nombre}</span>
              </td>
              <td>
                <span>
                  {moment(item.FechaCierre).format("YYYY/MM/DD kk:mm")}
                </span>
              </td>
              <td>
                <Link to={`/licitacion/${item.CodigoExterno}`}>
                  <button className="btn btn-secondary">Detalle</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default Tabla;
