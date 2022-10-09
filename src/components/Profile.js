import style from "../styles/profile.module.css";


const Profile = () => {
  return (
    <profile className={style.profile}>
      <div className={style.profile_about}>
      <h3>Personal</h3>
      <p>
        <em>
        I am beginner passionate Junior Frontend/React.js Developer seeking to gain a
        rewarding position in a friendly team or a brilliant JS/React JS
        Develope trainee where I can participate in creating useful beautiful products
        and solving business problems. As an organised and responsible
        individual, I intend to grow professionally and improve my skills
        </em>
      </p>
      </div>
      <div  className={style.profile_education}>
      <h3>Education</h3>
      <h4>Belarusian State University, 2010-2015</h4>
      <p>Social Work Specialist. Psychologist</p>
      <h4>Belarusian State University, 2015-2017</h4>
      <p>Master's In Psychology</p>
      </div>
    </profile>
  );
};

export default Profile;
