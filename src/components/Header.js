// impt
import PropTypes from "prop-types";
import Button from "./Button";

// rafce
const Header = ({ title, onAdd, showAddTask }) => {
  return (
    <header>
      <h1 className="header">
        {title}
        <Button
          color={showAddTask ? "red" : "green"}
          text={showAddTask ? "Close" : "Add"}
          onAdd={onAdd}
        />
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
