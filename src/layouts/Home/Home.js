import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';
import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
import sliceTexturePlaceholder from 'assets/slice-app-placeholder.jpg';
import blogHome from 'assets/Blog-Home.jpg';
import blogHomelarge from 'assets/Blog-Home-large.jpg';
import pakmediclarge from 'assets/PakMedic-large.jpg';
import pakmedic from 'assets/PakMedic.jpg';
import streetfestlarge from 'assets/StreetFest.jpg';
import streetfest2large from 'assets/StreetFest2-large.jpg';
import streetfest from 'assets/StreetFest-large.jpg';
import streetfest2 from 'assets/StreetFest2.jpg';
import spaceX from 'assets/SpaceX.jpg';
import spaceXlarge from 'assets/SpaceX-large.jpg';
import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const disciplines = ['Designer', 'Developer', 'Writer', 'Manager', 'Creator'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Designer + Developer"
        description="Design portfolio of Mohammad Haris Zia — an amateur product manager working on web & mobile apps and with a mission to solve problems in a user centric data driver approach."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Revamping the Future of Healthcare In Pakistan"
        description="Designing a platform to help Pakistan Reinvent it's healthcare sector in a Data Driven User Centric Approach"
        buttonText="Coming Soon"
        buttonLink=""
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [pakmedic, pakmediclarge],
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Food Delivery App to Help People with Efficient Solutions"
        description="Designing low and high fidelity Mockups for a Fast Food Chain to Build A Mobile Application."
        buttonText="View website"
        buttonLink="https://www.behance.net/gallery/127992395/Design-a-menu-and-payment-app-for-fast-food-chain"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [streetfest, streetfestlarge],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [streetfest2, streetfest2large],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Blog CMS With Admin Support and Stripe API"
        description="Engaging the writers with a responsive and dynamic CMS, an Admin Panel for the CEO to manage resources. "
        buttonText="View project"
        buttonLink="https://github.com/MohammadHarisZia/Laravel_project-Content-Blog-Management-System"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [blogHome, blogHomelarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />

      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Falcon 9 Space X Prediction Using Python"
        description="An End to End Data Science Project starting from EDA to Prediction of the Launch with an Iterative approach and descriptive Data Visualizations to Present the Data Story."
        buttonText="View project"
        buttonLink="https://github.com/MohammadHarisZia/Falcon9-SpaceX-Launch-DataScienceProject"
        model={{
          type: 'laptop-left',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [spaceX, spaceXlarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />

      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
