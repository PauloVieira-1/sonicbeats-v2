import {Container, Row, Col} from "react-bootstrap"
import backgroundImage from "../assets/jpeg/bg.jpg"
import ProductCards from "../Components/ProductCards/ProductCards"

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
                <Col style={{height: "80vh"}} className="bg-secondary p-0">
                <img src={backgroundImage} style={{width: "100%", height: "100%", objectFit: "cover"}} className="img-fluid"></img>
                </Col>
            </Row>
        </Container>
        <Container className="bg-secondary pt-5 d-flex align-items-center justify-content-center flex-column mt-5" fluid >
            <Row  style={{height: "35vh"}}>
                <Col className="ps-5" xs={4}>
                    <div className=" p-5 text-black" style={{height: "20vh"}} >
                        <h1 className="fw-bolder display-5">Our Speaker Collection</h1>
                    </div>
                </Col>
                <Col>
                    <div className=" p-5 text-primary justify-content-center d-flex align-items-center" >
                        <p className="fw-light fs-5 text-end">Explore our collection of past speaker models. Each product is unique, offering distinctive features and quality sound. These photos showcase some of our past and current designs, however, you can place orders for customized speakers tailored to your specific needs.</p> 
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ProductCards></ProductCards>
                </Col>
            </Row>
        </Container>
      </>
    );
}

export default Home