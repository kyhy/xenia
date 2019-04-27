import React, { Component } from 'react';
import './index.css';
import icon from './assets/saranya.jpg';
import Sarainfo from './Sarainfo';

class Sarah1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: [
        {
          name: 'Saranya',
          image: icon,
          content:
            'A dreamer,learner and coder doing Masters in University Of Dayton.Worked as Systen Engineer for three years with application development,deployment,administration as VB.Net and Java developer.I love learning new skills and glad to upgrade myself now and then.I always make an extra step I whatever I do',
        },
      ],
    };
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const { info } = this.state;
    return (
      <div>
        <Sarainfo info={info[0]} />
      </div>
    );
  }
}

export default Sarah1;
