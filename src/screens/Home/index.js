import React from "react";
import {
  Card,
  Carousel,
  Col,
  Container,
  Figure,
  Navbar,
  Row,
  MDBRow,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Img from "./Img/ART-13038_I2s2B42z5D4r6QHqQHWJ.jpg";
import Background from "./Img/skull-artwork-death-dark-2K-wallpaper.jpg";
import { filmesCadastrados } from "../../utils/mock"

function Home() {

  const [filmes, setFilmes] = React.useState([]);
  React.useEffect(() => {
    setFilmes(filmesCadastrados);
  }, []);

  return (
    <div
      style={{
        backgroundImage: "url(" + Background + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: 937,
        padding: 0,
        margin: 0,
        border: 0,
      }}
    >
      <Link to="/">
        <img src={Img} width="150" height="170" />
      </Link>
      <Navbar.Text
        style={{
          color: "white",
          fontSize: 30,
          fontFamily: "inherit",
          whiteSpace: "nowrap",
        }}
      >
        Filmes, Series e desenhos Online|
      </Navbar.Text>

      <Row>
        {filmesCadastrados.map((f) => {
          return (
            <>
              <Col md={2}>
                <Card style={{ backgroundColor: 'transparent' }}>
                  <Card.Img
                    style={{ height: 233, width: 204 }}
                    variant="top"
                    src={f.img}
                  />
                  <Card.Body>
                    <Card.Title style={{ color: 'red' }}>Card Title</Card.Title>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>


            </>
          )
        })}
      </Row>
    </div>
  );
}

export default Home;
