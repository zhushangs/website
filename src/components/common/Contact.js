import React from 'react';
import { Row, Col } from 'antd';

const items = [
    {
        key: '1',
        icon:  <a href="mailto:zhushangs@gmail.com" ><i class="fas fa-envelope-open-text"></i></a>,
        title: 'Email',
    },    
    {
      key: '2',
      icon: <a href="https://www.linkedin.com/in/shangshang-zhu-61a60017a/" target="_blank" rel="noopener noreferrer"> <i className="fab fa-linkedin-in"></i></a>,
      title: 'LinkedIn',
    },
    {
        key: '3',
        icon:  <a href="https://github.com/zhushangs" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>,
        title: 'Github',
      },
]

function Contact(){
    return(
        <div id="contact" className="block contactBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Contact Me</h2>
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
                            </div>
                        </Col>
                        );
                    })}
                </Row>


            </div>

       </div>
    );
}


export default Contact;