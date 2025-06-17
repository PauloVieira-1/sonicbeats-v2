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
import Product1d from "../assets/jpeg/Product1d.jpeg"

import { useEffect, useRef, useMemo } from "react";


const images = [
    {text: "Handcrafted speakers", image: Image1, subtext: "Experience the finest craftsmanship."},
    {text: "Portable power", image: Image2, subtext: "Unleash power on the go."},
    {text: "Sonic purity", image: Image3, subtext: "Hear the difference in every note."},
    {text: "Simplistic beauty", image: Image4, subtext: "Elegance in simplicity."},
];

function Home() {

    const headingRef = useRef<HTMLDivElement>(null);
    const subheadingRef = useRef<HTMLDivElement>(null);

    const revealRefs = useMemo(() => [headingRef, subheadingRef], [ headingRef, subheadingRef ]);


    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.target === headingRef.current && entry.isIntersecting) {
                    entry.target.classList.add('transition-slow');
                } 
                
                if (entry.target === subheadingRef.current && entry.isIntersecting) {
                    entry.target.classList.add('transition-slow');
                }
            });
        })

        revealRefs.forEach(ref => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => {
            revealRefs.forEach((ref) => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            });
        };
    }, [revealRefs, headingRef, subheadingRef]);

    return (
        <>
        <Container fluid>
            <Row>
                <Col className="p-0">
                    <div className="bg-primary p-5 text-secondary" style={{height: "40vh"}} >
                        <div style={{position: "relative", top: "50%", left: "0%", transform: ""}}>
                        <h1 className="fw-bold display-2 transition-slow">Sonicbeats</h1>    
                        <h3 className="fw-lighter transition-fast">Handcrafted by Dan Vorstenbosch</h3>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        <Container fluid className="d-none d-lg-block">
            <Row>
                <Col style={{height: "80vh"}} className="bg-secondary p-0">
                <img src={backgroundImage} style={{width: "100%", height: "100%", objectFit: "cover"}} className="img-fluid"></img>
                </Col>
            </Row>
        </Container>
        <Container fluid className="d-block d-lg-none">
            <Row>
                <Col style={{height: "40vh"}} className="bg-secondary p-0">
                <img src={backgroundImage} style={{width: "100%", height: "100%", objectFit: "cover"}} className="img-fluid"></img>
                </Col>
            </Row>
        </Container>
        <Container className="bg-secondary pt-5 d-flex align-items-center justify-content-center flex-column mt-5 mb-5" fluid >
            <Row style={{ height: "35vh" }} className="d-none d-lg-flex align-items-center">
    <Col className="ps-5" xs={4}>
        <div className="p-5 text-black">
            <h1 ref={headingRef} className="fw-bolder display-5">Our Speaker Collection</h1>
        </div>
    </Col>
    <Col xs={8}>
        <div className="p-5 text-primary d-flex align-items-center justify-content-center">
            <p className="fw-light fs-5 text-end">
                Explore our collection of past speaker models. Each product is unique, offering distinctive features and quality sound. These photos showcase some of our past and current designs, however, you can place orders for customized speakers tailored to your specific needs.
            </p>
        </div>
    </Col>
</Row>

             <Row   className="d-block d-lg-none">
                <Col className="ps-5" xs={12}>
                    <div className=" px-5 pt-4 text-black" style={{height: "100%"}} >
                        <h1 ref={headingRef} className="fw-bolder display-5">Our Speaker Collection</h1>
                    </div>
                </Col>
                <Col>
                    <div className=" p-5 text-primary justify-content-center d-flex align-items-center" >
                        <p className="fw-light fs-5 text-start mt-1 mb-5">Explore our collection of past speaker models. Each product is unique, offering distinctive features and quality sound. These photos showcase some of our past and current designs, however, you can place orders for customized speakers tailored to your specific needs.</p> 
                    </div>
                </Col>
            </Row>
            <Row  className="mt-1">
                <Col>
                <div>
                    <ProductCards></ProductCards>
                </div>
                    <div className="pt-4 d-flex justify-content-center">
                        <hr style={{border: "1px solid black ", width: "70%"}} />
                    </div>
                </Col>
            </Row>
        </Container>
        <Container
        fluid
        className="bg-primary d-flex align-items-center justify-content-center mt-5 text-secondary d-none d-lg-block"
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
        <Container
  fluid
  className="bg-primary d-block d-md-none text-secondary mt-5 px-3 pb-5"
>
  <Row>
    <Col xs={12} className="mb-3">
      <img
        src={Dan}
        alt="Dan"
        className="img-fluid w-100 object-fit-cover rounded-4"
        style={{ height: "40vh", objectFit: "cover" }}
      />
    </Col>
  </Row>
  <Row>
    <Col xs={12}>
      <div className="text-start">
        <h1 className="fw-bold display-4 mb-4">Our Story</h1>
        <h5 className="fw-lighter">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus vero excepturi velit est.
          Facilis laboriosam odit neque perspiciatis quis corporis saepe quisquam deleniti voluptatibus
          inventore sed, aut beatae ducimus nostrum dicta. Temporibus, dignissimos? Error, itaque labore
          quisquam omnis eius nisi? Error expedita reprehenderit exercitationem delectus nihil mollitia,
          maxime sed distinctio.
        </h5>
      </div>
    </Col>
  </Row>
  <Row className="mt-4">
    <Col className="d-flex justify-content-center">
      <CustomButton variant="secondary" href="/about">
        About us
      </CustomButton>
    </Col>
  </Row>
</Container>

        <Container className="bg-secondary pt-5 d-flex align-items-center justify-content-center flex-column mt-5 mb-1" fluid >
            <Row style={{ height: "35vh" }} className="d-none d-lg-flex align-items-center">
                <Col className="ps-5" xs={4}>
                    <div className=" ps-5 text-black" style={{height: "20vh"}} >
                        <h1 ref={headingRef} className="fw-bolder display-5">Additional Services</h1>
                    </div>
                </Col>
                <Col>
                    <div className=" p-5 text-primary justify-content-center d-flex align-items-center" >
                        <p className="fw-light fs-5 text-end">Explore our collection of past speaker models. Each product is unique, offering distinctive features and quality sound. These photos showcase some of our past and current designs, however, you can place orders for customized speakers tailored to your specific needs.</p> 
                    </div>
                </Col>
            </Row>
             <Row   className="d-block d-lg-none">
                <Col className="ps-5" xs={12}>
                    <div className=" px-5 pt-4 text-black" style={{height: "100%"}} >
                        <h1 ref={headingRef} className="fw-bolder display-5">Additional Services</h1>
                    </div>
                </Col>
                <Col>
                    <div className=" p-5 text-primary justify-content-center d-flex align-items-center" >
                        <p className="fw-light fs-5 text-start mt-1 mb-5">Explore our collection of past speaker models. Each product is unique, offering distinctive features and quality sound. These photos showcase some of our past and current designs, however, you can place orders for customized speakers tailored to your specific needs.</p> 
                    </div>
                </Col>
            </Row>
            <Row style={{height: "90vh"}}>
                <Col>
                <div>

                    <ExpandingCards images={images}></ExpandingCards>
                </div>
                </Col>
            </Row>
            <Row className="w-100 ">
  <Col className="d-flex justify-content-center">
    <hr
      style={{
        width: "70%",
        height: "2px",
        backgroundColor: "solid black",
        border: "none",
        margin: "2rem 0"
      }}
    />
  </Col>
</Row>
        </Container>
        <Container
        fluid
        className="bg-primary d-flex align-items-center justify-content-center mt-5 text-secondary d-none d-lg-block"
        >
        <div style={{ minWidth: "90%", maxWidth: "1000px", height: "70vh" }}>
            <Row className="h-100 d-flex align-items-center">
                <Col className="pe-4 h-100 text-start d-flex flex-column justify-content-between p-5">
                    <div className="p-3">
                        <h1 className="fw-bold display-2 mb-5">Design Process</h1>
                        <h4 className="fw-lighter">
                            Discover the meticulous design process that goes into creating our products. 
                            From initial concepts to the final touches, every step is crafted with precision 
                            and care, ensuring that each product not only looks stunning but also performs 
                            exceptionally. Join us as we delve into the art and science of design.
                        </h4>
                    </div>
                    <div className="d-flex justify-content-start p-3">
                        <CustomButton variant="secondary" href="/about">Learn More</CustomButton>
                    </div>
                </Col>
                <Col xs={4} className="ps-5 h-100">
                    <img
                    src={Product1d}
                    alt="Dan"
                    className="img-fluid w-100 h-100 object-fit-cover rounded-end-4"
                    />
                </Col>
            </Row>
        </div>
        </Container>
        <Container
  fluid
  className="bg-primary d-block d-md-none text-secondary mt-5 px-3 pb-5"
>
  <Row>
    <Col xs={12} className="mb-3">
      <img
        src={Product1d}
        alt="Design Process"
        className="img-fluid w-100 object-fit-cover rounded-4"
        style={{ height: "40vh", objectFit: "cover" }}
      />
    </Col>
  </Row>
  <Row>
    <Col xs={12}>
      <div className="text-start">
        <h1 className="fw-bold display-4 mb-4">Design Process</h1>
        <h5 className="fw-lighter">
          Discover the meticulous design process that goes into creating our products.
          From initial concepts to the final touches, every step is crafted with precision
          and care, ensuring that each product not only looks stunning but also performs
          exceptionally. Join us as we delve into the art and science of design.
        </h5>
      </div>
    </Col>
  </Row>
  <Row className="mt-4">
    <Col className="d-flex justify-content-center">
      <CustomButton variant="secondary" href="/about">
        Learn More
      </CustomButton>
    </Col>
  </Row>
</Container>

      </>
    );
}

export default Home