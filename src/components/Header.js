// impt
import PropTypes from "prop-types";
import Button from "./Button";

// rafce
const Header = ({ title }) => {
  return (
    <header>
      <h1 className="header">
        {title}
        <Button text="Hello!" />
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
