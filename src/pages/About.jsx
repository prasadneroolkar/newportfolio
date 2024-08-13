import PageComp from "../components/common/PageComp";
import { LogoData } from "../components/common/DataTimeline";
import SubSection from "../components/common/SubSection";

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

      <SubSection title="Technical skills">
        <ul className="logos d-flex align-items-center flex-wrap">
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
      </SubSection>

      <SubSection
        title="
        At client side , agency side or as freelancer
      "
      ></SubSection>
    </>
  );
};
export default About;
