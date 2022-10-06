import style from "../styles/main.module.css";
/* import logo from "./images/tms.jpeg" */

const Main = () => {
    return(
        <main className={style.main}>       
            <p>это страница с блоками для резюме</p>
            <img
            className={style.picture}
            alt="pic"
            src={process.env.PUBLIC_URL + "logo512.png"} 
            />
  {/*           <img src={logo} alt="logo"/> */}
            <h1>ЯнаЯна</h1>
        </main>
    )


}

export default Main;