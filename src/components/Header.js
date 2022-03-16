// impt
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Button from "./Button";

// rafce
const Header = ({ title, onAdd, showAddTask }) => {
  const location = useLocation();

  return (
    <header>
      <h1 className="header">
        {title}
        {location.pathname === "/" && (
          <Button
            color={showAddTask ? "red" : "green"}
            text={showAddTask ? "Close" : "Add"}
            onAdd={onAdd}
          />
        )}
      </h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
