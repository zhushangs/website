import React from 'react';
import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';


const { Panel } = Collapse;

function Experience(){
    return(
        <div id="experience" className="block expBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Work Experience</h2>
                </div>


                <Collapse bordered={false} expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />} 
                          defaultActiveKey={['1','2','3']}  className="site-collapse-custom-collapse" >
                    <Panel header="ESFE" key="1">
                        <li>Full Stack Developer Intern <a href="https://www.nycesfe.com/">  (https://www.nycesfe.com/) </a> <span className="date"> Nov 2020 – present </span></li>
                        <ul>
                            <li> Built a Contact free order and payment system to help small businesses in
                                 community that reducing physical touching with customers due to COVID-19. </li>
                            <li> Worked in Agile-driven environment to effectively maintain • project timelines. </li>
                            <li> Researched new technologies and software packages for use which reduced workload by 30%. </li>
                            <li> Implemented Front End connectivity with a RESTful API to manipulate dynamic datasets. </li>
                        </ul>
                    </Panel>
                    <Panel header="WalkSpan" key="2">
                        <li>Full Stack Developer Intern <a href="https://www.walkspan.com/">  (https://www.walkspan.com/) </a> <span className="date"> Jul 2020 – Aug 2020 </span></li>
                        <ul>
                            <li> Built a modern real estate HTML5 and mobile friendly website using ReactJS web framework technology. </li>
                            <li> Collaborated with the web designer to create sleek and innovative UI design. </li>
                            <li> Trained and supervised 5 team members for ongoing web projects. </li>
                        </ul>
                    </Panel>
                    <Panel className="panelHeader" header="Startby" key="3">
                        <li>Quality Assurance Volunteer <span className="date"> Jun 2020 – Jun 2020 </span></li>
                        <ul>
                            <li> Tested functionality of website and created feature test plans </li>
                            <li> Approached website testing using a user’s prospective and QA’s best practices </li>
                            <li> Document all findings and assigned pass/fail statuses </li>
                        </ul>
                    </Panel>
                </Collapse>

                <div className="titleHolder">
                    <h2>Project Experience</h2>
                </div>
                <Collapse bordered={false} expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />} 
                          defaultActiveKey={['1', '2']}  className="site-collapse-custom-collapse" >
                    <Panel header="Salary-Regression-Analytics" key="1">
                        <li>Jupyter Notebook</li>
                        <ul>
                            <li> Analyzing Income Data from Census to determine the relationship between salary and attributes of people. </li>
                            <li> Exploratory Data Analysis (EDA) is used to visualize the main characteristics. </li>
                            <li> Normalized numerical features and categorical independent variables to conduct
                                 data regression analysis by Logistic Regression and SVM Model. </li>
                            <li> Integrate around 100k data through Python csv connector and applied data transformation with pandas, seaborn and NumPy.</li>
                        </ul>
                    </Panel>
                    <Panel header="Reminder" key="2">
                        <li>Mobile App (Android Studio)</li>
                        <ul>
                            <li> The reminder mobile app allows users to login with Gmail account, and then able to
                                 add, edit, select and delete reminders. </li>
                            <li> This app is built by Android Studio and using Firebase to store data. </li>
                            <li> Collaborated on a Group of 5 on weekly basis discussing documentation, ideas and updates. </li>
                            <li> Documentation: UML, Design Document, Project Plan, User Manuel, Test Plan. </li>
                        </ul>
                    </Panel>
                </Collapse>


            </div>
        </div>        
    );
}

export default Experience;