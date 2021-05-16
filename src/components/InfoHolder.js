import React, { Component } from "react";
import uniqid from "uniqid";
import InfoBox from './InfoBox';

class InfoHolder extends Component {

  constructor(props) {
    super(props);

    this.state = {
      infoArray: [],
    };

    this.addInfo = this.addInfo.bind(this);
    this.updateInfo = this.updateInfo.bind(this);
    this.deleteInfo = this.deleteInfo.bind(this);
  }

  deleteInfo(event){
    const id = event.currentTarget.getAttribute('data-index');
    console.log('delete index at: ', id);
    this.setState({
      infoArray: this.state.infoArray.filter(info =>info.dataIndex !== id),
    });
  }

  updateInfo(value, entryName, dataIndex){
    console.log(`dataIndex: ${dataIndex}, value: ${value}, entryName: ${entryName}`);
    this.setState({
      infoArray: this.state.infoArray.map(info => {
        if (info.dataIndex === dataIndex){
          info[entryName]=value;
        }
        return info;
      }),
    });
    console.log('infoArray: ',this.state.infoArray);
    // Updates in App.js
    this.props.handlerUpdate(this.state.infoArray, this.props.inputName);
  }

  addInfo(){
    let infoObject = {
      dataIndex: uniqid(),
      title:'',
      startDate:'',
      endDate:'',
      location:'',
      decription:'',
    }
    this.setState({
      infoArray: this.state.infoArray.concat(infoObject),
    });
  }

  render() {


    return (
      <div>
        {this.state.infoArray.map((info) => {
        return <InfoBox onPreview={this.props.onPreview} dataIndex={info.dataIndex} endDate={info.endDate}
         key={info.dataIndex} handlerUpdate={this.updateInfo} handlerDelete={this.deleteInfo}
         inputName={this.props.inputName}
         />
      })}
        
        {this.props.onPreview === true
              ? <div></div>
              : <button onClick={this.addInfo}>+</button>
        }
      </div>
    );
  }
  
};

export default InfoHolder;