import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";

function NuoveUscite() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Errore nel fetch:", err);
        setLoading(false);
      });
  }, []);

  /* return (
    <div className="container mt-4">
      <div className="col  text-white p-1">
        {users.map((user) => (
          <img src={user.picture} className="img-fluid" />
        ))}
      </div>
    </div>
  );*/
}

export default NuoveUscite;
