import PageComp from "../components/common/PageComp";
import { LogoData } from "../components/common/DataTimeline";
const About = ({ pageTitle }) => {
  return (
    <>
      <PageComp Title={pageTitle} />
      <section className="about_text">
        <p>
          Hello! My name is Prasad and I enjoy creating things that live on the
          internet. My interest in web development started back in 2018 when I
          decided to try editing html templates taught me a lot about HTML &
          CSS! Fast-forward to today, and I’ve had the privilege of working at
          an advertising agency, a start-up. My main focus these days is
          building accessible, inclusive some projects using React js library.
          My job is to build website so that it is functional and user-friendly
          but at the same time attractive.
        </p>

        <p>
          Outside of coding,I also love hitting gym to help me feel better and
          healthier.Traveling is another passion of mine—I enjoy exploring new
          places, immersing myself in different cultures and finding inspiration
          in the world around me.
        </p>
      </section>

      <section className="technical_sec">
        <h3 className="h3 clients-title">Technical skills</h3>
        <ul className="logos d-flex align-items-center gap-4 flex-wrap justify-content-center">
          {LogoData.map((elem) => {
            return (
              <>
                <li key={elem.id}>
                  <img src={elem.image} alt={elem.alt} />
                </li>
              </>
            );
          })}
        </ul>
      </section>
    </>
  );
};
export default About;
