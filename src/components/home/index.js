import React, {Component} from 'react';
import {connect} from 'react-redux';
if(process.env.WEBPACK) require('../../assets/bootstrap.css'); //only import this if webpack
if(process.env.WEBPACK) require('../../app.scss'); //only import this if webpack

import {getContent} from '../../actions/index';



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      currentIndexDesc: '',
      nextIndexHeadline: ''
    }
  }

  componentWillMount() {
    this.props.dispatch(getContent());
  }

  componentDidUpdate() {
    const {currentIndex, currentIndexDesc} = this.state;
    const {currentContent} = this.props;
    if (currentIndexDesc === '') {
      const nextIndex = (currentIndex + 1) % currentContent.length;
      this.setState({
        currentIndexDesc: currentContent[currentIndex].description,
        nextIndexHeadline: currentContent[nextIndex].title
      })
    }
  }
  
  render() {
    const {currentIndex, currentIndexDesc, nextIndexHeadline} = this.state;
    const {currentContentTitle, currentContent} = this.props;
    return (
      <div className="home">
        <div className="row">
          <div className="col-xs-12 col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-heading">
                {currentContentTitle}
              </div>
              <div className="panel-body">
                {currentIndexDesc}
              </div>
              <div className="panel-footer">
                {nextIndexHeadline}
              </div>
            </div>
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
