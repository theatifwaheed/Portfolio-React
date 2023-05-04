import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';
import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
import sliceTexturePlaceholder from 'assets/slice-app-placeholder.jpg';
import blogHome from 'assets/Blog-Home.jpg';
import blogHomelarge from 'assets/Blog-Home-large.jpg';
import Omnifood from 'assets/Omnifood.jpg';
import Twitter from 'assets/Twitter.jpg';
import Airbnb from 'assets/Airbnb.jpg';
import pakmedicMobile from 'assets/pakmedic.png';
import pakmedicMobile2 from 'assets/pakmedic2.png';
import alphatalk from 'assets/Alphatalk.jpg';
import vikiHome from 'assets/Viki-Home.jpg';
import vikiAgent from 'assets/Viki-Agent.jpg';
import bloopHome from 'assets/Bloop-Home.jpg';
import bloopDetails from 'assets/Bloop-Details.jpg';

import spaceX from 'assets/SpaceX.jpg';
import spaceXlarge from 'assets/SpaceX-large.jpg';
// import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const disciplines = ['Designer', 'Strategist', 'Writer', 'Manager', 'Creator'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();
  const projectSix = useRef();
  const projectSeven = useRef();
  const projectEight = useRef();
  const projectNine = useRef();

  const details = useRef();

  useEffect(() => {
    const sections = [
      intro,
      projectOne,
      projectTwo,
      projectThree,
      projectFour,
      projectFive,
      projectSix,
      projectSeven,
      projectEight,
      projectNine,
      details,
    ];

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
        description="Developing a platform to help Pakistan Reinvent it's healthcare sector in a Data Driven User Centric Approach"
        buttonText="Coming Soon"
        buttonLink="https://github.com/FA19-BCS-Pakmedic"
        model={{
          type: 'phone',
          alt: 'Pakmedic',
          textures: [
            {
              srcSet: [pakmedicMobile, pakmedicMobile],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [pakmedicMobile2, pakmedicMobile2],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-7"
        sectionRef={projectSeven}
        visible={visibleSections.includes(projectSeven.current)}
        index={2}
        alternate
        title="AirBnb Clone"
        description="Full Stack Airbnb Clone built using Next.js 13 using new experimental app directory, server and client components and latest changes in the framework."
        buttonText="View Web Application"
        buttonLink="https://airbnbclone-haris.vercel.app"
        model={{
          type: 'laptop-left',
          alt: 'AirBnb Clone',
          textures: [
            {
              srcSet: [Airbnb, Airbnb],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-8"
        sectionRef={projectEight}
        visible={visibleSections.includes(projectEight.current)}
        index={3}
        title="Twitter Clone"
        description=" Full Stack Web app built using built using Next Js, Tailwind CSS, Prisma, MongoDB & Next Auth."
        buttonText="View Web Application"
        buttonLink="https://twitter-clone-haris.vercel.app"
        model={{
          type: 'laptop',
          alt: 'Twitter Clone',
          textures: [
            {
              srcSet: [Twitter, Twitter],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={4}
        title="A Wiki application for Valorant"
        description="Solving the problem to provide wiki for Valorant on a mobile platform, a game that is growing in popularity."
        buttonText="View Mockups"
        buttonLink="https://www.figma.com/file/1nZBvWIhJJlJ0GCJr8h60i/Viki-A-Valorant-WIKI?node-id=1%3A25&t=prQePWjc9crdQiXn-1"
        model={{
          type: 'phone',
          alt: 'Viki, A Valorant Wiki',
          textures: [
            {
              srcSet: [vikiHome, vikiHome],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [vikiAgent, vikiAgent],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />

      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={5}
        title="An NFT based Community for Artists and Collectors"
        description="A social platform for artists and collectors to showcase their work and interact with each other."
        buttonText="View Live Deployment"
        buttonLink="https://alphatalk-5xxjxfjvr-hx2labs.vercel.app"
        model={{
          type: 'laptop',
          alt: 'Annotating a NFT platform',
          textures: [
            {
              srcSet: [alphatalk, alphatalk],
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
        index={6}
        title="An NFC based Social Link Sharing Platform"
        description="A one stop solution for all your social media links, a platform that allows you to share your social media links with a single tap."
        buttonText="View Application"
        buttonLink="https://github.com/MohammadHarisZia/Bloop"
        model={{
          type: 'phone',
          alt: 'NFC React Native App',
          textures: [
            {
              srcSet: [bloopHome, bloopHome],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [bloopDetails, bloopDetails],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />

      <ProjectSummary
        id="project-5"
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={7}
        title="Blog CMS With Admin Support and Stripe API"
        description="Engaging the writers with a responsive and dynamic CMS, an Admin Panel for the CEO to manage resources. "
        buttonText="View project"
        buttonLink="https://github.com/MohammadHarisZia/Laravel_project-Content-Blog-Management-System"
        model={{
          type: 'laptop',
          alt: 'Blog CMS',
          textures: [
            {
              srcSet: [blogHome, blogHomelarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />

      <ProjectSummary
        id="project-6"
        alternate
        sectionRef={projectSix}
        visible={visibleSections.includes(projectSix.current)}
        index={8}
        title="Falcon 9 Space X Prediction Using Python"
        description="An End to End Data Science Project starting from EDA to Prediction of the Launch with an Iterative approach and descriptive Data Visualizations to Present the Data Story."
        buttonText="View project"
        buttonLink="https://github.com/MohammadHarisZia/Falcon9-SpaceX-Launch-DataScienceProject"
        model={{
          type: 'laptop-left',
          alt: 'Falcon 9 Space X Prediction Using Python',
          textures: [
            {
              srcSet: [spaceX, spaceXlarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />

      <ProjectSummary
        id="project-9"
        sectionRef={projectNine}
        visible={visibleSections.includes(projectNine.current)}
        index={9}
        title="OmniFood, A healthy food delivery service Landing Page"
        description="The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs."
        buttonText="View Deployment"
        buttonLink="https://omnifood-hariszia.netlify.app"
        model={{
          type: 'laptop',
          alt: 'Omnifood',
          textures: [
            {
              srcSet: [Omnifood, Omnifood],
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
