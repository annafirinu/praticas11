import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.css";
import Novità from "./Component/Novità";
import NuoviEpisodi from "./Component/NuoviEpisodi";
import NuoviEpisodiLg from "./Component/NuoviEpisodiLg";
import NuoveUscite from "./Component/NuoveUscite";
import Altro from "./Component/Altro";
import Footer from "./Component/Footer";
import NavbarMobile from "./Component/NavbarMobile";
import { Container, Col, Row } from "react-bootstrap";
import NavbarDesktop from "./Component/NavbarDesktop";
function App() {
  return (
    <body className="background">
      <Container>
        <Row>
          <Col lg={1} className="d-none d-lg-block bgcolors2 ">
            <p className="text-white pt-3">
              <i className="bi bi-house-door text-danger p-1"></i>Home
            </p>
            <p className="text-white">
              <i className="bi bi-view-list text-danger p-1"></i>Novità
            </p>
            <p className="text-white">
              <i className="bi bi-broadcast text-danger p-1"></i>Radio
            </p>
          </Col>
          <Col lg={11}>
            <div className="background">
              <NavbarMobile />
              <NavbarDesktop />

              <Novità />
              <div>
                <h1 className="text-white mt-3 ms-3 mb-4 ms-lg-4 border-bottom border-secondary pb-3">
                  Nuovi episodi radio <i className="bi bi-caret-right"></i>
                </h1>
                <div className="container mt-4 m-3">
                  <div className="row row-cols-3 row-cols-lg-5">
                    <NuoviEpisodi
                      link="src/assets/images/2a.png"
                      text="Pròlogo con Abuelo"
                    />
                    <NuoviEpisodi
                      link="src/assets/images/2b.png"
                      text="The Wanderer"
                    />
                    <NuoviEpisodi
                      link="src/assets/images/2c.png"
                      text="Michael Bublè & Carly Pearce"
                    />
                    <NuoviEpisodiLg
                      link="src/assets/images/2d.png"
                      text="Stephan Moccio:The Zane Lowe Interview"
                    />
                    <NuoviEpisodiLg
                      link="src/assets/images/2e.png"
                      text="Chart Spotlight: Julia Michael"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-white mt-3 ms-3 mb-4 ms-lg-4 border-bottom border-secondary pb-3">
                  Nuove uscite <i className="bi bi-caret-right"></i>
                </h1>
                <div className="container mt-4 m-3">
                  <div className="row row-cols-3 row-cols-lg-5">
                    <NuoveUscite />
                  </div>
                </div>
              </div>
              <h1 className="text-white mt-3 ms-3 mb-4 ms-lg-4  pb-3">
                Altro da esplorare
              </h1>
              <div className="container mt-4 m-3">
                <div className="row row-cols-1 row-cols-lg-3">
                  <Altro text="Esplora per genere" />
                  <Altro text="Decenni" />
                  <Altro text="Attività e stati d'animo" />
                  <Altro text="Worldwide" />
                  <Altro text="Classifiche" />
                  <Altro text="Audio Spaziale" />
                  <Altro text="Video musicali" />
                  <Altro text="Nuovi artisti" />
                  <Altro text="Hit del passato" />
                </div>
              </div>

              <Footer />
            </div>
          </Col>
        </Row>
      </Container>
    </body>
  );
}

export default App;
