import React, {Component} from 'react';
import {connect} from 'react-redux';
if(process.env.WEBPACK) require('../../assets/bootstrap.css'); //only import this if webpack
if(process.env.WEBPACK) require('../../app.scss'); //only import this if webpack

import {getContent} from '../../actions/index';

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(getContent());
  }
  
  
  render() {
    const {currentContentTitle, currentContent} = this.props;
    return (
      <div className="home">
        <div>Ok readiest</div>
        <div className="panel panel-default">
          <div className="panel-heading">
            {currentContentTitle}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    currentContentTitle: state.content.currentContentTitle,
    currentContent: state.content.currentContent
  }
}

export default connect(mapStateToProps, null)(Home);
