import React, { Component } from "react";
import Text from "./Text";
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import WebIcon from '@material-ui/icons/Web';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

class ContactBox extends Component {


  render() {
    const iconComponents = {
      phone: PhoneIcon,
      email: MailOutlineIcon,
      web: WebIcon,
      facebook: FacebookIcon,
      twitter: TwitterIcon,
      instagram: InstagramIcon,
      linkedIn: LinkedInIcon,
    }
    let MyIcon = iconComponents[this.props.icon];
    let myType=null;
    if(this.props.type){
      myType = this.props.type;
    } else {
      myType = 'text';
    }

    return (
      <div className='contactBox-div'>
        <MyIcon/>
        <Text placeholder={this.props.placeholder} onPreview={this.props.onPreview} inputName={this.props.inputName} fontSize={this.props.fontSize} handlerUpdate={this.props.handlerUpdate} type={myType}/>
      </div>
    );
  }
  
};

export default ContactBox;