import React, { Component } from "react";
import Text from "./Text";
import TextArea from './TextArea';

class InfoBox extends Component {

  render() {
    const typeInfo = [
      {
        type: "experience",
        mainTitle: "Job Title",
        subTitle: "Company Name",
        description: "Job Description",
      },
      {
        type: "education",
        mainTitle: "Education Degree",
        subTitle: "Institue Name",
        description: "Education Description",
      },
    ];

    let myInfo = typeInfo.filter(info => info.type === this.props.inputName)[0];
    console.log(myInfo);
    
    return (
      <div>
        <Text dataIndex={this.props.dataIndex} placeholder={myInfo.mainTitle} handlerUpdate={this.props.handlerUpdate} onPreview={this.props.onPreview} inputName='title' fontSize='35px' />
        <div className='dateHolder'>
          <Text dataIndex={this.props.dataIndex} placeholder="Started" handlerUpdate={this.props.handlerUpdate} onPreview={this.props.onPreview} inputName='startDate' fontSize='18px' type='date'/>
          <h3> &#160; - &#160; </h3>
          {this.props.onPreview && this.props.endDate===''
              ? <h3>Current</h3>
              : <Text dataIndex={this.props.dataIndex} placeholder="Ended" handlerUpdate={this.props.handlerUpdate} onPreview={this.props.onPreview} inputName='endDate' fontSize='18px' type='date'/> 
          }
        </div>
        <Text dataIndex={this.props.dataIndex} placeholder={myInfo.subTitle} handlerUpdate={this.props.handlerUpdate} onPreview={this.props.onPreview} inputName='location' fontSize='25px' />
        <TextArea dataIndex={this.props.dataIndex} placeholder={myInfo.description} onPreview={this.props.onPreview} inputName="decription" fontSize="15px" handlerUpdate={this.props.handlerUpdate}/>
        {this.props.onPreview
              ? <div></div>
              : <button data-index={this.props.dataIndex} onClick = {this.props.handlerDelete}>Delete</button>
        }
      </div>
    );
  }
  
};

export default InfoBox;