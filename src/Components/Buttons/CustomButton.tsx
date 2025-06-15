import { Button } from "react-bootstrap";
 
const CustomButton = ({ variant = "secondary", isActive = false, ...props }) => {
    let variantClass = "";
    switch (variant) {
        case "primary":
            variantClass = "btn-primary";
            break;
        case "secondary":
            variantClass = "btn-secondary";
            break;
        case "primary-outline":
            variantClass = "btn-outline-primary";
            break;
        case "secondary-outline":
            variantClass = "btn-outline-secondary";
            break;
        case "success":
            variantClass = "btn-success";
            break;
        case "danger":
            variantClass = "btn-danger";
            break;
        case "warning":
            variantClass = "btn-warning";
            break;
        case "info":
            variantClass = "btn-info";
            break;
        case "light":
            variantClass = "btn-light";
            break;
        case "dark":
            variantClass = "btn-dark";
            break;
        default:
            variantClass = "btn-secondary";
    }

    return (
        <Button
            className={`btn-rounded mx-2 px-5 rounded-5 ${variant  === "primary" ? "active-light" : "active"} ${variantClass} ${isActive ? " shadow-transition" : ""}`}
            {...props}
        >
            {props.children}
        </Button>
    );
};

export default CustomButton;

