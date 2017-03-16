import React, {Component} from 'react';
import {connect} from 'react-redux';

class Home extends Component {
  render() {
    return (
      <div className='home'>
        <div>Ok ready</div>
      </div>
    );
  }
}

export default connect()(Home);
