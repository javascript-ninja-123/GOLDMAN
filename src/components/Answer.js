import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addScore,recentScore,updateId} from '../actions'
import { Button } from 'semantic-ui-react'
import CARD from './Card';
import {DATA} from '../Data';

class ANSWER extends Component {
  constructor(props){
  	super(props);
  	this.state = {};
      this.movePage = this.movePage.bind(this);
  }
    movePage(value){
    let newPromise = new Promise(resolve => {
      this.props.addScore(value.score)
      this.props.recentScore(value.score)
      resolve();
    })
    newPromise
    .then(() => {
      if(this.props.question === DATA.length){
            alert(`Your final score is ${this.props.score}`)
        }
      else{
        this.props.updateId();
        }
    })
    }

    renderAnswerChoice(data){
      return data.map((value,index) => {
        return (
          <Button
          key={index}
          onClick={() => this.movePage(value)}
          >{value.answer}</Button>
        )
      })
    }

    render() {
        return (
            <div>
              <CARD
                key={this.props.key}
                question={this.props.header}
              >
                <div className='rowContainer'>
                  {this.renderAnswerChoice(this.props.answerChoice)}
                </div>
              </CARD>
            </div>
        );
    }
}

function mapStateToProps({question,score}) {
  return{
    question,
    score
  }
}

export default connect(mapStateToProps,{addScore,recentScore,updateId})(ANSWER);
