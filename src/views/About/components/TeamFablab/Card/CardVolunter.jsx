import "./CardVolunter.css";
import gitlab from "./gitlab-icon.svg";
import linkedIn from "./linkedin-icon.svg";
import email from "./email-icon.svg";
import { Link } from "react-router-dom";
const default__user = {
  photo1: "",
  photo2: "",
  name: "Grecia Shaiel Bello Segovia",
  rol: "Lab Coordinator",
  link__gitlab: "",
  link__linkedin: "",
  link__email: "",
};
const CardVolunter = ({ user = default__user }) => {
  return (
    <div className="container__card">
      <div className="images__card">
        <img src={user.photo1} alt="user" className="user1" />
        <img src={user.photo2} alt="user" className="user2" />
      </div>
      <h3 className="name__user">{user.name}</h3>
      <p className="rol__user">{user.rol}</p>
      <section className="links__user">
        <a href={user.link__gitlab} target="__BLANK">
          <img src={gitlab} alt="icon__gitlab" className="link__user" />
        </a>
        <a href={user.link__linkedin} target="__BLANK" >
          <img src={linkedIn} alt="icon__linkedIn" className="link__user" />
        </a>
        <a href={`mailto:`+ user.link__email} target="__BLANK" >
          <img src={email} alt="icon__email" className="link__user" />
        </a>
      </section>
    </div>
  );
};

export default CardVolunter;
