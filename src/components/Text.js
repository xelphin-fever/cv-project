import React, { Component } from "react";
import '../styles/text.css';

class Text extends Component {

  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.startEdit = this.startEdit.bind(this);
    this.stopEdit = this.stopEdit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  startEdit() {
    this.setState({edit: true});
  }

  stopEdit(event) {
    event.preventDefault();
    this.setState({edit: false});
    if (this.props.dataIndex){
      this.props.handlerUpdate(this.state.value, this.props.inputName, this.props.dataIndex);
    } else {
      this.props.handlerUpdate(this.state.value, this.props.inputName);
    }
    
  }

  render() {
    let font = {
      fontSize: this.props.fontSize,
    };
    let myType= null;
    if(this.props.type){
      myType = this.props.type;
    } else {
      myType = 'text';
    }
    return (
      <div>
        {this.props.onPreview || this.state.edit!==true
              ? <h3 onClick ={this.startEdit} style={font}>
                  {this.state.value ==='' ? this.props.placeholder : this.state.value}
                </h3>
              : <form onSubmit={this.stopEdit}>
                {/* In onSubmit, better to just also send handlerUpdate directly so that no need to do the above if/else */}
                  <input type={myType} style={font} value={this.state.value} placeholder={this.props.placeholder} onChange={this.handleChange}/>
                  <button style={font} className='textSubmit' type="submit">Submit</button>
                </form>  
        }
      </div>
    );
  }
  
};

export default Text;