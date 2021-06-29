import React, { Component } from 'react';
import Slide from "react-reveal";
class Resume extends Component {
  render() {

    if (this.props.data) {
      // var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return <div key={education.school}><h3>{education.school}</h3>
          <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
          <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function (work) {
        return <div key={work.company}><h3>{work.company}</h3>
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
          <ul>
            <li>{work.description1}</li>
            <li>{work.description2}</li>
            <li>{work.description3}</li>
          </ul>
        </div>
      })
      // var skills = this.props.data.skills.map(function (skills) {
      //   var className = 'bar-expand ' + skills.name.toLowerCase();
      //   return <li key={skills.name}><span style={{ width: skills.level }} className={className}></span><em>{skills.name}</em></li>
      // })
    }

    return (
      <section id="resume">
    <Slide left duration={1300}>
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {education}
              </div>
            </div>
          </div>
        </div>


        <div className="row work">

          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {work}
          </div>
        </div>
      </Slide>


        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <div className="bars">
                <section id="skills" className="skills section-bg">
                  <div className="container">
                    <div className="skillsContainer  " >


                      <div className=" skillsrow skillscol">

                        <div className="skillsIMG hvr-float-shadow rotate-vert-center">
                          <i className="devicon-html5-plain devicons "></i>
                          <span>HTML5</span>
                        </div>
                        <div className="skillsIMG hvr-float-shadow rotate-vert-center">
                          <i className="devicon-css3-plain devicons"></i>
                          <span>CSS3</span>
                        </div>

                        <div className="skillsIMG hvr-float-shadow rotate-vert-center">
                          <i className="devicon-javascript-plain devicons"></i>
                          <span>JavaScript</span>
                        </div>

                        <div className="skillsIMG hvr-float-shadow rotate-vert-center">
                          <i className="devicon-react-original devicons"></i>
                          <span>React</span>
                        </div>
                        <div className="skillsIMG hvr-float-shadow rotate-vert-center">
                          <i className="devicon-python-plain devicons"></i>
                          <span>Python</span>
                        </div>
                      </div>

                      <div className=" skillsrow skillscol">

                        <div className="skillsIMG hvr-float-shadow rotate-vert-center" >
                          <i className="devicon-jquery-plain devicons"></i>
                          <span>jQuery</span>
                        </div>
                        <div className="skillsIMG hvr-float-shadow rotate-vert-center">
                          <i className="devicon-nodejs-plain devicons"></i>
                          <span>Node.js</span>
                        </div>
                        <div className="skillsIMG hvr-float-shadow rotate-vert-center">
                          <i className="devicon-postgresql-plain devicons"></i>
                          <span>PostgreSQL</span>
                        </div>
                        <div className="skillsIMG hvr-float-shadow rotate-vert-center">
                          <i className="devicon-sequelize-plain devicons"></i>
                          <span>Sequelize</span>
                        </div>
                        <div className="skillsIMG hvr-float-shadow rotate-vert-center">
                          <i className="devicon-redux-plain devicons"></i>
                          <span>Redux</span>
                        </div>
                      </div>
                      <div className="skillsrow skillscol">

                        <div className="skillsIMG hvr-float-shadow rotate-vert-center">
                          <i className="devicon-express-original devicons"></i>
                          <span>Express</span>
                        </div>
                        <div className="skillsIMG hvr-float-shadow rotate-vert-center">
                          <i className="devicon-github-original devicons"></i>
                          <span>GitHub</span>
                        </div>

                        <div className="skillsIMG hvr-float-shadow rotate-vert-center">
                          <i className="devicon-npm-original-wordmark devicons"></i>
                          <span>npm</span>
                        </div>
                        <div className="skillsIMG hvr-float-shadow rotate-vert-center">
                          <i className="devicon-visualstudio-plain devicons"></i>
                          <span>VS Code</span>
                        </div>
                        <div className="skillsIMG hvr-float-shadow rotate-vert-center">
                          <i className="devicon-bootstrap-plain devicons"></i>
                          <span>Bootstrap</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </Slide>
   </section >
    );
  }
}

export default Resume;
