import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";
// import styles from "./Home.module.css"
import perfil from "../assets/Perfil.jpg"
import NavBar from "./Navbar";

function Home() {
  return (
    <>
      
      <section style={{ height: "100vh", width: "100vw" }}>
        {/* <Particle /> */},
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <div style={{ display: "flex", alignItems: "center", flexDirection: "row", gap: "70px", flexWrap: "wrap" }}>
                <img style={{ borderRadius: "50%", marginLeft: "5%" }} src={perfil} alt="perfil" />
                <div>
                  <h1 style={{ paddingBottom: 15 }} className="heading-name">
                    <strong className="main-name">
                      Fernando Daniel Valls
                    </strong>
                  </h1>
                  <h1 className="heading-name">
                    <strong className="main-name-second">
                      <p style={{ fontSize: "15px !important" }}> Analista en Sistemas</p>
                    </strong>
                  </h1>
                  <h1 className="heading-name">
                    <strong className="main-name-second">
                      <p style={{ fontSize: "15px !important" }}> Estudiante de Lic. Ciencia de Datos</p>
                    </strong>
                  </h1>
                  <h1 style={{ paddingBottom: 15 }} className="heading-name">
                    <strong className="main-name-second">
                      1123029425
                    </strong>
                  </h1>
                  <h1 style={{ paddingBottom: 15 }} className="heading-name">
                    <strong className="main-name-second">
                      fernandodanielvalls@gmail.com
                    </strong>

                  </h1>
                </div>
              </div>
              <br />
              <article style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", flexWrap: "wrap" }}>
                <div>
                  <h1 className="heading-name">
                    <p>
                      Acerca de mi
                    </p>
                  </h1>
                </div>
                <div>
                  <h1 className="heading-name">
                    <p>
                      Estudios
                    </p>
                  </h1>
                </div>
                <div>
                  <h1 className="heading-name">
                    <p>
                      Exp.Laboral
                    </p>
                  </h1>
                </div>
                <div>
                  <h1 className="heading-name">
                    <p>
                      Stack Tencologico
                    </p>
                  </h1>
                </div>
              </article>
              <div
                style={{
                  padding: 100,
                  flexDirection: "row",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <div>
                  <h1 className="heading-name">
                    <p>
                      GitHub / proyectos
                    </p>
                  </h1>
                </div>
                <div>
                  <h1 className="heading-name">
                    <p>
                      Deploy's:
                    </p>
                  </h1>
                </div>
              </div>
            </Col>
            <Col
              md={5}
              style={{
                // paddingBottom: 20,
                textAlign: "center",
                alignSelf: "center",
              }}
            >
            </Col>
          </Row>
        </Container>
      </section >
    </>
  );
}

export default Home;
