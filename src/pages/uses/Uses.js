import usesBackgroundPlaceholder from 'assets/uses-background-placeholder.jpg';
import baymax from 'assets/baymax.mp4';
import { Footer } from 'components/Footer';
import { Link } from 'components/Link';
import { List, ListItem } from 'components/List';
import { Meta } from 'components/Meta';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from 'components/Table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import styles from './Uses.module.css';

export const Uses = () => {
  return (
    <Fragment>
      <Meta
        title="Uses"
        description="A list of hardware and software I use to do my thing"
      />
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={{ src: baymax }}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.85}
        />
        <ProjectHeader
          title="Uses"
          description="A somewhat comprehensive list of tools, apps, hardware, and more that I use on a daily basis to design and code things. And yeah, that is a Baymax Edit in the background."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Design</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://www.figma.com">Figma</Link> is my primary tool for
                    UI design these days. Made the switch from Adobe XD in 2020 and
                    haven’t looked back.
                  </ListItem>
                  <ListItem>
                    Any Vectors and Images I craft are created in Adobe Illustrator and
                    Photoshop . So far I haven’t found a non-Adobe product that’s as good.
                    If anyone has suggestions please{' '}
                    <Link href="/contact">message me</Link>.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    I use{' '}
                    <Link href="https://code.visualstudio.com/">Visual Studio Code</Link>{' '}
                    as my text editor, with the Mnokai Pro theme and Material Icon as my
                    Icon Theme of choice.
                  </ListItem>
                  <ListItem>
                    Opera GX is my main browser for both development and general use.
                  </ListItem>
                  <ListItem>
                    <Link href="https://reactjs.org/">React</Link> is my front end
                    Javascript library of choice. The component-centric mental model is
                    the first thing that truly made sense to me as a designer.
                  </ListItem>
                  <ListItem>
                    For 3D effects and image shaders I am learning{' '}
                    <Link href="https://threejs.org/">three.js</Link>. It has a bit of a
                    learning curve but you can do some really powerful stuff with it.
                  </ListItem>
                  <ListItem>
                    For CSS I’ve used a bootstrap and css-in-js solutions like
                    styled-components, but these days I’m using vanilla CSS.
                  </ListItem>
                  <ListItem>
                    For Javascript animations I use{' '}
                    <Link href="https://www.framer.com/motion/">Framer Motion</Link>, it’s
                    a great way to add spring animations to React and three.js.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>Hardware</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>CPU</TableHeadCell>
                    <TableCell>Intel I7 8570h</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>GPU</TableHeadCell>
                    <TableCell>Nvidia GTX 1050Ti</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Memory</TableHeadCell>
                    <TableCell>Crucial 16GB DDR4 3200mhz CAS 18</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableHeadCell>Keyboard</TableHeadCell>
                    <TableCell>Keychron Q1 V2</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Mouse</TableHeadCell>
                    <TableCell>Razer Viper Ultimate</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Laptop</TableHeadCell>
                    <TableCell>Dell XPS 15 9570</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
