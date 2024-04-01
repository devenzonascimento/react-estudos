import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <nav>
        <ul>
          <li>
            <Link to="/contact/1">Contact 1</Link>
          </li>
          <li>
            <Link to="/contact/2">Contact 2</Link>
          </li>
          <li>
            <Link to="/contact/3">Contact 3</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Contact;
