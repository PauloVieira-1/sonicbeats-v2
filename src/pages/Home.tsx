import {Container, Row, Col} from "react-bootstrap"
import backgroundImage from "../assets/jpeg/bg.jpg"
import Dan from "../assets/jpeg/DanBlack.jpg"
import ProductCards from "../Components/ProductCards/ProductCards"
import CustomButton from "../Components/Buttons/CustomButton"
import ExpandingCards from "../Components/ExplandingCards/ExpandingCards"
import Image1 from "../assets/jpeg/carousel-image-1.jpeg"
import Image2 from "../assets/jpeg/Product3.jpeg"
import Image3 from "../assets/jpeg/Product1b.jpeg"
import Image4 from "../assets/jpeg/simplisticbg.jpeg"

const images = [
    {text: "Handcrafted speakers", image: Image1},
    {text: "Portable power", image: Image2},
    {text: "Sonic purity", image: Image3},
    {text: "Simplistic beauty", image: Image4},
];

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
        <Container className="bg-secondary pt-5 d-flex align-items-center justify-content-center flex-column mt-5 mb-5" fluid >
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
            <Row style={{height: "110vh"}}>
                <Col>
                    <ProductCards></ProductCards>
                    <div className="pt-4 d-flex justify-content-center">
                        <hr style={{border: "1px solid black ", width: "70%"}} />
                    </div>
                </Col>
            </Row>
        </Container>
        <Container
        fluid
        className="bg-primary d-flex align-items-center justify-content-center mt-5 text-secondary"
        >
        <div style={{ minWidth: "90%", maxWidth: "1000px", height: "70vh" }}>
            <Row className="h-100 d-flex align-items-center">
            <Col xs={4} className="pe-5 h-100 ">
                <img
                src={Dan}
                alt="Dan"
                className="img-fluid w-100 h-100 object-fit-cover rounded-start-4"
                />
            </Col>
<Col className="ps-4 h-100 text-start d-flex flex-column justify-content-between">
    <div className="p-3">
        <h1 className="fw-bold display-2 mb-5">Our Story</h1>    
        <h4 className="fw-lighter">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus vero excepturi velit est. 
            Facilis laboriosam odit neque perspiciatis quis corporis saepe quisquam deleniti voluptatibus 
            inventore sed, aut beatae ducimus nostrum dicta. Temporibus, dignissimos? Error, itaque labore 
            quisquam omnis eius nisi? Error expedita reprehenderit exercitationem delectus nihil mollitia, 
            maxime sed distinctio.
        </h4>
    </div>

    <div className="d-flex justify-content-end p-3">
        <CustomButton variant="secondary" href="/about">About us</CustomButton>
    </div>
</Col>

            </Row>
        </div>
        </Container>
        <Container className="bg-secondary pt-5 d-flex align-items-center justify-content-center flex-column mt-5 mb-5" fluid >
            <Row  style={{height: "35vh"}}>
                <Col className="ps-5" xs={4}>
                    <div className=" p-5 text-black" style={{height: "20vh"}} >
                        <h1 className="fw-bolder display-5">Additional Services</h1>
                    </div>
                </Col>
                <Col>
                    <div className=" p-5 text-primary justify-content-center d-flex align-items-center" >
                        <p className="fw-light fs-5 text-end">We also offer additional services to help you get the best out of your speakers. From custom designs to repairs and maintenance, we have got you covered. Contact us to learn more about our services and how we can help you.</p> 
                    </div>
                </Col>
            </Row>
            <Row style={{height: "110vh"}}>
                <Col>
                <div>

                    <ExpandingCards images={images}></ExpandingCards>
                </div>
                </Col>
            </Row>
        </Container>
      </>
    );
}

export default Home