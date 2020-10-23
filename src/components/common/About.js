import React from 'react';
import { Row, Col } from 'antd';
import phote from '../../assets/images/photo.jpg'

const items = [
    {
      key: '1',
      icon:  <i className="fas fa-desktop"></i>,
      title: 'Software',
      content: 'Eclipse, Dev C++, Git, Jupyter, Visual Studio, Microsoft Office',
    },
    {
        key: '2',
        icon:  <i class="fas fa-globe"></i>,
        title: 'Language',
        content: 'Java, SQL, Python, C++, HTML5, JavaScript, CSS, ReactJS',
    },
    {
      key: '3',
      icon: <i className="fas fa-certificate"></i>,
      title: 'Certification',
      content: 'Google Analytics',
    },
  ]
  
function About(){
    return(
        <div id="about" className="block aboutBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <img className="proPhoto" src = {phote}></img>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p>A Recent Computer Science graduate specializing in full software development life cycle, gathering requirement specifications and user documentation</p>
                </div>
                <div className="contentHolder">
                    <p >Queens College <span className="date"> Jan 2017 - Jan 2020</span> </p>
                    {/* <span className="education">Computer Science Bachelor of Science Computer Science</span> */}
                    <p >Queensborough Community College <span className="date"> Jan 2015 - Jan 2017</span> </p>
                </div>
               
                <Row gutter={[16, 16]}>   
                    {items.map(item => {
                        return (
                        <Col md={{ span: 8 }} key={item.key}>
                            <div className="content">
                            <div className="icon">
                                {item.icon}
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.content}</p>
                            </div>
                        </Col>
                        );
                    })}
                </Row>


            </div>
        </div>
    )
}
export default About;