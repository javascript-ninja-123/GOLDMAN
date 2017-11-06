import React,{Component} from 'react';
import './Question.css';
import {connect} from 'react-redux';
import {initialId,addScore,updateId,recentScore} from '../actions'
import {DATA} from '../Data';
import { Loader,Button } from 'semantic-ui-react'
import CARD from './Card';


class QUESTION extends Component {
    constructor(props){
    	super(props);
    	this.state = {data:[]};
      this.renderQuestion = this.renderQuestion.bind(this);
      this.movePage = this.movePage.bind(this);
    }
    componentWillMount() {
      this.props.initialId();
    }
    componentDidMount() {
      //I could use axios or fetch to fetch real question JSON data, but since I have to
      //create my own, I will showcase the right away to use JSON data to render without
      //Redux here.
      this.setState({data:DATA})
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

    //render answer choices
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

    //render a question
    renderQuestion(){
      let newData = [...this.state.data];
      return newData
      .filter(value => value.id === this.props.question)
      .map((value,index) => {
        return(
          <CARD
            key={index}
            question={value.question}
          >
            <div className='rowContainer'>
              {this.renderAnswerChoice(value.answerChoice)}
            </div>
          </CARD>
        )
      })
    }


    //render a loader till a question is loaded.
    renderDom(){
      if(this.state.data.length <=0){
        return <Loader active inline='centered' />
      }
      else{
        return (
          <div className='cardContainer'>
            {this.renderQuestion()}
          </div>
        )
      }
    }

    render() {
        return (
            <div className="Question">
                {this.renderDom()}
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

export default connect(mapStateToProps,{initialId,addScore,updateId,recentScore})(QUESTION);
