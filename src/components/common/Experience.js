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
                          defaultActiveKey={['1']}  className="site-collapse-custom-collapse" >
                    <Panel header="WalkSpan" key="1">
                        <li>Software Engineer Intern <span className="date"> Jul 2020 – Aug 2020 </span></li>
                        <ul>
                            <li> Managed and lead the project to build out the real estate company website </li>
                            <li> Built a modern real estate HTML5 and mobile friendly website using ReactJS web framework technology </li>
                            <li> Implemented Front End connectivity with a RESTful API built in Java </li>
                            <li> Collaborated on an AGILE team of 5 on a weekly basis providing updates or any roadblocks </li>
                        </ul>
                    </Panel>
                    <Panel header="Startby" key="2">
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
                          defaultActiveKey={['1']}  className="site-collapse-custom-collapse" >
                    <Panel header="Data-Analytics" key="1">
                        <li>Jupyter Notebook</li>
                        <ul>
                            <li>Collected the Income Data from Census using Python and different models to craft a decision function to assign a label regarding the salary range and information </li>
                            <li> Using Exploratory Data Analysis (EDA) to summarize and visualize the main characteristics </li>
                            <li> Analyzing data using Linear Regression Model, Data Visualization, Logistics Regression to determine the relationship between a dependent variable and one or more independent variables </li>
                        </ul>
                    </Panel>
                    <Panel header="Reminder" key="2">
                        <li>Mobile App</li>
                        <ul>
                            <li> Documentation: UML, Design Document, Project Plan, User Manuel, Test Plan </li>
                            <li> Using Android Studio to create a mobile application which allows end users to add, edit, delete reminders with different types </li>
                            <li> Personal task: testing the application and then recorded results in Test Cases Tables </li>
                        </ul>
                    </Panel>
                </Collapse>


            </div>
        </div>        
    );
}

export default Experience;