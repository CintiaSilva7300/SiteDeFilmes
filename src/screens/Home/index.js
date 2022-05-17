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
import Img from "./Img/esboço.PNG";
import Background from "./Img/skull-artwork-death-dark-2K-wallpaper.jpg";
import { filmesCadastrados } from "../../utils/mock"
import { FaCloudDownloadAlt, FaSearchPlus } from 'react-icons/fa';

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
        minHeight: 940,
        padding: 0,
        margin: 0,
        border: 0,
      }}
    >

      <Container>
        <Navbar>
          <h1 style={{ color: 'white', fontSize: 30, marginTop: 10, marginLeft: '55%' }}>
            Filmes, Series e desenhos Online|
          </h1></Navbar>

        <h2 variant="secondary" style={{
          color: "white",
          fontSize: 20,
          marginTop: 20,
        }}>Terror|</h2>

        <Row md={1}>
          {filmesCadastrados.map((f) => {
            return (
              <>
                <Col md={2}>
                  <Card style={{ backgroundColor: 'transparent' }}>
                    <Card.Img
                      style={{ height: 233, width: 170, display: 'inline-block' }}
                      variant="top"
                      src={f.img}
                    />
                    <Card.Body>
                      <Button variant="secondary" style={{
                        fontSize: 13,
                        width: 150
                      }}><FaCloudDownloadAlt /> Baixar
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </>
            )
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
