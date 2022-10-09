import style from "../styles/experience.module.css";

const Experience = () => {
  return (
    <experience className={style.experience}>
          <div className={style.experience_hobbies}>
         <h3>Hobbies</h3>
      <p>Stretching</p>
      <p>Swimming</p>
      <p>SUP surfing</p>
      <p>Reading books</p>
    </div>
    <div className={style.experience_works}>
      <h3>Experience</h3>
      <h4>2014-2017 BSU Law College | Psychologist</h4>
      <p>Specialist in socio-pedagogical and psychological service</p>
      <h4>2017-2019 SEO Expert | Copywriter</h4>
      <p>
        Writing texts on various topics for projects, publication the texts on
        project sites
      </p>
      <h4>2019-2022 Pingwin | SEO Specialist</h4>
      <p>
        Sites promotion in search engines Google, Yandex. Client's 
websites administration. Creation of technical specifications for programmers and
        designers, tasks execution control
      </p>
      </div>
    </experience>
  );
};

export default Experience;
