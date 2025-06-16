import "./cards.css";
import { useState } from "react";

interface ImageObject {
    text: string;
    image: string;
    subtext: string
}

const ExpandingCards = ({ images = [] as ImageObject[] }) => {

    const [active, setActive] = useState(0);

    return (
        <div className="container-box">
            {images.map((image, index) => (
                <div onClick={() => setActive(index)} className={active === index ? "panel active" : "panel"} style={{backgroundImage: `url(${image.image})`, backgroundSize: "cover"}}>
                    <h3 className="p-3 fw-bold">{image.text}</h3>
                    <p className="fw-light p-3">{image.subtext}</p>
                </div>
            ))}
        </div>
    );
    
}

export default ExpandingCards
