import React,{Component} from 'react';
import './Navigation.css'
import {connect} from 'react-redux';
import {updateId,minusId,minusScore} from '../actions';
import arrow from '../assets/prev.jpg';
import {DATA} from '../Data';

class NAVIGATION extends Component {
    constructor(props){
    	super(props);
    	this.state = {};
      this.onClick = this.onClick.bind(this);
      this.onClickMinus = this.onClickMinus.bind(this)
    }
    onClick(){
      this.props.updateId()
    }
    onClickMinus(){
      this.props.minusId();
      this.props.minusScore(this.props.recent);
    }
    renderArrow(){
      if(this.props.question === DATA[0].id){
        return (
          <div className='arrow'>
            <img src={arrow} alt='arrow' className='nextQ' onClick={this.onClick}/>
          </div>
        )
      }
      else if(this.props.question === DATA.length){
        return(
          <div className='arrow'>
            <img src={arrow} alt='arrow' className='prevQ' onClick={this.onClickMinus}/>
          </div>
        )
      }
      else{
        return (
          <div className='arrow'>
            <img src={arrow} alt='arrow' className='prevQ' onClick={this.onClickMinus}/>
            <img src={arrow} alt='arrow' className='nextQ' onClick={this.onClick}/>
          </div>
        )
      }
    }
    render() {
        return (
            <div className="Navigation">
              {this.renderArrow()}
            </div>
        );
    }
}

function mapStateToProps({question,recent}) {
  return{question,recent}
}

export default connect(mapStateToProps,{updateId,minusId,minusScore})(NAVIGATION);
