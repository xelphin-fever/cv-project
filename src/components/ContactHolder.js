import React, { Component } from "react";
import ContactBox from "./ContactBox";



class ContactHolder extends Component {

  constructor(props) {
    super(props);

    this.state = {
      iconsContact: [
        {iconName: "phone", placeholder:"Phone Number", type:'number',},
        {iconName: "email", placeholder:"Email Address", type:'email',},
        {iconName: "web", placeholder:"Website", type:'text',},
      ],
      iconsSocials: [
        {iconName: "facebook", placeholder:"Facebook Username", type:'text',},
        {iconName: "twitter", placeholder:"Twitter Username", type:'text',},
        {iconName: "instagram", placeholder:"Instagram Username", type:'text',},
        {iconName: "linkedIn", placeholder:"LinkedIn Username", type:'text',},
      ],
    };
  }

  render() {
    let myCategory=null;
    if (this.props.category==='contact'){
      myCategory = this.state.iconsContact;
    } else {
      myCategory = this.state.iconsSocials;
    }

    return (
      <div>
        {myCategory.map((icon) => {
          if (this.props.onPreview!==true || this.props.entries[icon.iconName]!==''){
            return <ContactBox className='contactBox' key={icon.iconName} icon={icon.iconName} placeholder={icon.placeholder} onPreview={this.props.onPreview} inputName={icon.iconName} fontSize="18px" handlerUpdate={this.props.handlerUpdate} type={icon.type}/>
          }
          return <div key={icon.iconName}></div>
        })}
      </div>
    );
  }
  
};

export default ContactHolder;