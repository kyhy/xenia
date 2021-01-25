/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Jumbotron, Container, Nav } from 'reactstrap';
import { Link } from 'react-router-dom';

const Bharath = () => (
  <div>
    <div style={{ backgroundImage: 'linear-gradient(black, white, grey)' }}>
      <Container>
        <Nav>
          <div className="container-fluid">
            <div className="navbar-header" />
            <ul className="nav navbar-nav">
              <li className="active">
                <Link to="#">Home</Link>
              </li>
              <li>
                <Link to="#">Projects</Link>
              </li>
              <li>
                <Link to="#">Acheivements</Link>
              </li>
              <li>
                <Link to="#">Contact Me</Link>
              </li>
            </ul>
          </div>
        </Nav>
        <Jumbotron>
          <h1>Summary</h1>
          <p>
            Currently enrolled in Master’s in Computer Science at University of
            Dayton, Ohio. I have experience with C, C++, Java, HTML, CSS,
            JavaScript and MySQL. This knowledge will be an asset to this
            position.I would be thrilled to learn more alongside your
            cross-functional team of engineers and developers.
          </p>
        </Jumbotron>
        <h3>Education</h3>
        <ul>
          <li>
            University of Dayton, Ohio, USA - Master’s in Computer Science from
            2018- 2020.
          </li>
          <li>
            Jawaharlal Technological University, Anantapur, India - Bachelor of
            Technology in Computer Science Engineering from 2012- 2016.
          </li>
        </ul>
        <h3>Technical Skills</h3>
        <ul>
          <li>
            <b>Programming Languages:</b> C, C++, Java, Python
          </li>
          <li>
            <b>Database:</b> MySQL
          </li>
          <li>
            <b>Web Technologies:</b> HTML5, CSS, PHP, JavaScript
          </li>
          <li>
            <b>Software/Tools:</b> Angular JS, React JS, Eclipse, Microsoft
            Visual Code Studio
          </li>
        </ul>
        <h3>Experience</h3>
        <ul>
          <li>
            iBizTek Solutions, INC (July 2016 – November 2017), worked as Web
            Developer.
          </li>
        </ul>
        <p>
          {' '}
          I am a hard-working professional who has been consistent praised as
          focused my co-workers and management. Over the journey of my 2-year
          career, I’ve developed my skill set directly relevant to my course
          work. Overall, I have consistently demonstrated teamwork, management
          and creative thinking abilities in every aspect of my career with Web
          Developer role at iBizTek Solutions{' '}
        </p>
      </Container>
    </div>
  </div>
);

export default Bharath;
