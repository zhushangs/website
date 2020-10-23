import React from 'react';
import { Carousel } from 'antd';

const items = [
  {
    key: '1',
    title: 'Hi, It \' s Shangshang Zhu',
    content: '',
  },
  {
    key: '2',
    title: 'Sincere, Hardworking, Self-motivated',
    content: '',
  },

]

function MainPage() {
  return (
    <div id="main" className="mainpage">
      <Carousel>
        {items.map(item => {
          return (
            <div key={item.key} className="container-fluid">
              <div className="content">
                <h3>{item.title}</h3>
              </div>
            </div>  
          );
        })}
      </Carousel>
    </div>
  );
}

export default MainPage;