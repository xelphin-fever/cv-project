import React, { Component } from "react";
import '../styles/text.css';

class TextArea extends Component {

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

  stopEdit() {
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
    return (
      <div>
        {this.props.onPreview || this.state.edit!==true
              ? <p onClick ={this.startEdit} style={font} className='aboutInfo'>
                  {this.state.value ==='' ? this.props.placeholder : this.state.value}
                </p>
              : <div>
                  <textarea type="text" style={font} value={this.state.value} placeholder={this.props.placeholder} onChange={this.handleChange}/>
                  <button style={font}  className='textSubmit' onClick={this.stopEdit}>Submit</button>
                </div>  
        }
      </div>
    );
  }
  
};

export default TextArea;