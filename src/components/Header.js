import style from "../styles/header.module.css";


/* import logo from "./images/tms.jpeg" */

const Header = () => {
  return (
    <header className={style.header}>
      <img
        className={style.picture}
        alt="pic"
        width="170" 
        height="170" 
        src={process.env.PUBLIC_URL + "photo-cv.jpg"}
      />
      {/*           <img src={logo} alt="logo"/> */}
      <div className={style.header_info}>
      <h1 className={style.header_title}>Yana <strong>Yakimchuk</strong></h1>
      <h2 className={style.header_subtitle}>Front End Developer</h2>
      </div>
    </header>
  );
};

export default Header;