import React, {Component} from 'react';
import {connect} from 'react-redux';
if(process.env.WEBPACK) require('../../assets/bootstrap.css'); //only import this if webpack
if(process.env.WEBPACK) require('../../app.scss'); //only import this if webpack

import {getContent} from '../../actions/index';



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentContentThumb: '',
      currentIndex: 0,
      currentIndexDesc: '',
      nextIndexHeadline: ''
    }
  }

  componentWillMount() {
    this.props.dispatch(getContent());
  }

  //here we update component state with returned data from getContent action
  componentDidUpdate() {
    const {currentIndex, currentIndexDesc} = this.state;
    const {currentContent} = this.props;
    if (currentIndexDesc === '') {
      //index scroller
      const nextIndex = (currentIndex + 1) % currentContent.length;
      //replace line breaks with new lines
      const cleanedDesc = currentContent[currentIndex].description.replace(/<br\s*[\/]?>/gi, "\n");
      this.setState({
        currentIndexDesc: cleanedDesc,
        nextIndexHeadline: currentContent[nextIndex].title,
        currentContentThumb: `./assets/${currentContent[0].thumbnail}`
      })
    }
  }
  
  
  
  render() {
    const {currentContentThumb, currentIndex, currentIndexDesc, nextIndexHeadline} = this.state;
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
                <div className="row">
                  <div className="col-xs-12 col-md-4">
                    <img className="img-responsive" src={currentContentThumb}/>
                  </div>
                  <div className="col-xs-12 col-md-8 description">{currentIndexDesc}</div>
                </div>
              </div>
              <div className="panel-footer">
                <div className="row">
                  <div className="col-md-6 col-xs-12">
                    <button className="btn btn-primary pull-left">Prev</button>
                  </div>
                  <div className="col-md-6 col-xs-12">
                    <button className="btn btn-primary pull-right visible-block-md">
                      {nextIndexHeadline}
                    </button>
                  </div>
                </div>
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
