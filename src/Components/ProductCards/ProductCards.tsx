import { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CustomButton from "../Buttons/CustomButton";

import "./ProductCards";
import { ProductExamples } from "./ProductExampls";

type ProductKey = 'Product1' | 'Product2' | 'Product3' | 'Product4';

function ProductCards() {
  const [product, setProduct] = useState<ProductKey>("Product1");

  const handleSelect = (product: ProductKey) => {
    setProduct(product);
  };

  return (
    <Container className="mt-5 bg-light px-5 pt-5 pt-4 rounded-5 shadow mb-5 text-primary">
      <Row>
        <Col xs={12} md={12}>
          <h2>Our Speaker Selection</h2>
          <p>
            Explore our collection of past speaker models. Each product is
            unique, offering distinctive features and quality sound. These
            photos showcase some of our past and current designs, however, you
            can place orders for customized speakers tailored to your specific
            needs.
          </p>
        </Col>
        <Col xs={6} md={4}></Col>
      </Row>
      <Row className="mt-3 d-flex justify-content-center gy-3">
        <Col xs={6} md={3} className="mt-3">
          <CustomButton
            variant={product === "Product1" ? "primary" : "secondary"}
            isActive={product === "Product1"}
            onClick={() => handleSelect("Product1")}
          >
            {ProductExamples["Product1"].name}
          </CustomButton>
        </Col>
        <Col xs={6} md={3} className="mt-3">
          <CustomButton
            variant={product === "Product2" ? "primary" : "secondary"}
            isActive={product === "Product2"}
            onClick={() => handleSelect("Product2")}
          >
            {ProductExamples["Product2"].name}
          </CustomButton>
        </Col>
        <Col xs={6} md={3} className="mt-3">
          <CustomButton
            variant={product === "Product3" ? "primary" : "secondary"}
            isActive={product === "Product3"}
            onClick={() => handleSelect("Product3")}
          >
            {ProductExamples["Product3"].name}
          </CustomButton>
        </Col>
        <Col xs={6} md={3} className="mt-3">
          <CustomButton
            variant={product === "Product4" ? "primary" : "secondary"}
            isActive={product === "Product4"}
            onClick={() => handleSelect("Product4")}
          >
            {ProductExamples["Product4"].name}
          </CustomButton>
        </Col>
      </Row>
      <Row>
        <div className="mt-4 mb-5">
          <Container>
            <Row className="rounded-3 bg-white border">
              <Col className="p-0" sm={12} lg={6}>
                <img
                  src={ProductExamples[product].image}
                  alt={ProductExamples[product].title}
                  className="img-fluid rounded-3 h-100"
                  style={{
                    maxHeight: "430px",
                    minWidth: "100%",
                    objectFit: "cover",
                    minHeight: "430px",
                  }}
                />
              </Col>
              <Col className="px-5 py-4" sm={12} lg={6}>
                <h3 className="mb-3">{ProductExamples[product as ProductKey].title}</h3>
                <p>{ProductExamples[product as ProductKey].description}</p>
                <ul className="fw-lighter ml-0">
                  {Object.entries(ProductExamples[product].specifications).map(
                    ([key, value]) => (
                      <li key={key} className="text-start bullets">
                        {key.replace(/_/g, " ")}: {value}
                      </li>
                    )
                  )}
                  {ProductExamples[product].aditionalInfo.map(
                    (info, index) => (
                      <li className="text-start bullets" key={index}>
                        {info}
                      </li>
                    )
                  )}
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
      </Row>
    </Container>
  );
}

export default ProductCards;



