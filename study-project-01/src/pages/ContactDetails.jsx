import { useParams } from "react-router-dom";

const ContactDetails = () => {
  const { id } = useParams();
  return <h1>Show more informations of contact {id}</h1>;
};

export default ContactDetails;
