import {Container, Row, Col} from "react-bootstrap"
import backgroundImage from "../assets/jpeg/bg.jpg"

function Home() {
    return (
        <>
        <Container fluid>
            <Row>
                <Col className="p-0">
                    <div className="bg-primary p-5 text-secondary" style={{height: "40vh"}} >
                        <div style={{position: "relative", top: "50%", left: "0%", transform: ""}}>
                        <h1 className="fw-bold display-2">Sonicbeats</h1>    
                        <h3 className="fw-lighter">Handcrafted by Dan Vorstenbosch</h3>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        <Container fluid >
            <Row>
                <Col style={{height: "100vh"}} className="bg-secondary p-0">
                <img src={backgroundImage} style={{width: "100%", height: "80vh", objectFit: "cover"}} className="img-fluid"></img>
                </Col>
            </Row>
        </Container>
      </>
    );
}

export default Home