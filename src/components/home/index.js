import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getContent} from '../../actions/index';

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(getContent());
  }
  
  
  render() {
    const {currentContent} = this.props;
    console.log(currentContent);
    return (
      <div className='home'>
        <div>Ok ready</div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    currentContent: state.content.currentContent
  }
}

export default connect(mapStateToProps, null)(Home);
