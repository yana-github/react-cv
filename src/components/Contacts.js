import style from "../styles/contacts.module.css";
import ln from "../images/linkedin.png";
import gh from "../images/github.png";
/* import logo from "./images/tms.jpeg" */

const Contacts = () => {
  return (
    <contacts className={style.contacts}>
      <div className={style.contacts_about}>
        <h3>Contacts</h3>
        <h4>Phone</h4>
        <p>+375 29 123-77-75</p>
        <h4>Email</h4>
        <p>yana.0.yakimchuk@gmail.com</p>
        <h4>City</h4>
        <p>Minsk, ready to relocate</p>
        <h4>Profiles</h4>
        <a href="https://github.com/yana-github" className={style.contacts__link}>
          <img src={ln} alt="linkedin" />
        </a>
        <a href="https://www.linkedin.com/in/yana-yakimchuk-06a40618b/" className={style.contacts__link}>
          <img src={gh} alt="github" />
        </a>
      </div>
      <div className={style.contacts_skills}>
        <h3>Skills</h3>
        <p>HTML+CSS</p>
        <p>Java Script</p>
        <p>React</p>
        <p>Redux</p>
        <p>B1 English</p>
        <div>
          <h3>Certificates</h3>
          <h4>Front End Developer Certification, 2022</h4>
          <h4>React Developer Certification, 2022</h4>
        </div>
      </div>
    </contacts>
  );
};

export default Contacts;
