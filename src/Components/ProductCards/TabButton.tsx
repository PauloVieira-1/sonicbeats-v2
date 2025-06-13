import { Button, ButtonProps } from "react-bootstrap";
import "./ProductCards.css";

interface TabButtonProps extends ButtonProps {
  isActive?: boolean;
}

const TabButton = ({ children, onSelect, isActive, ...props }: TabButtonProps) => (
  <li>
    <Button
      onClick={onSelect}
      className={`btn-rounded wide ${isActive ? "active shadow-transition" : ""}`}
      variant="outline-secondary"
      {...props}
    >
      {children}
    </Button>
  </li>
);

export default TabButton;

