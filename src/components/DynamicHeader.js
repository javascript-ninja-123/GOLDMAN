import React,{Component} from 'react';
import {connect} from 'react-redux';
import HEADER from './Header'
import {DATA} from '../Data';

class DYNAMICHEADER extends Component {



    render() {
        return (
            <div>
                <HEADER text={`Pop Quiz - step ${this.props.question}/${DATA.length}`}/>
            </div>
        );
    }
}

function mapStateToProps({question}) {
  return{
    question
  }
}

export default connect(mapStateToProps)(DYNAMICHEADER)
