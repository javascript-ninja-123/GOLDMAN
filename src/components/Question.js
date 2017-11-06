import React,{Component} from 'react';
import './Question.css';
import {connect} from 'react-redux';
import {initialId,addScore,updateId,recentScore} from '../actions'
import {DATA} from '../Data';
import { Loader,Button } from 'semantic-ui-react'
import CARD from './Card';
import ANSWER from './Answer';


class QUESTION extends Component {
    constructor(props){
    	super(props);
    	this.state = {data:[]};
      this.renderQuestion = this.renderQuestion.bind(this);

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

    //render a question
    renderQuestion(){
      let newData = [...this.state.data];
      return newData
      .filter(value => value.id === this.props.question)
      .map((value,index) => {
        return(
          <ANSWER
          key={index}
          header={value.question}
          answerChoice={value.answerChoice}
           />
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
