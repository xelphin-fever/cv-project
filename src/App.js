import './App.css';
import React, { Component } from "react";
import Text from "./components/Text";
import TextArea from "./components/TextArea";
import ContactHolder from './components/ContactHolder';
import InfoHolder from './components/InfoHolder';

class App extends Component {
  constructor() {
    super();

    this.state = {
      onPreview: false,
      entries : {
        name: '',
        profession: '',
        about: '',
        phone: '',
        email: '',
        web: '',
        facebook: '',
        twitter: '',
        instagram: '',
        linkedIn: '',
        experience: [],
        education: [],
      },
    };

    this.updateEntry = this.updateEntry.bind(this);
    this.togglePreview = this.togglePreview.bind(this);
  }

  updateEntry(value, entryName){
    this.setState(prevState => {
      let entries = { ...prevState.entries };
      entries[entryName] = value;               
      return { entries };
    })
    console.log(this.state.entries);
  }
  togglePreview(){
    this.setState((state) => ({
      onPreview: !this.state.onPreview, 
    }));
    
  }

  render() {

    return (
      <div className="project-div">
        <h2 className="project-title">Create CV</h2>
        <div className="cv-div">
          <div className="top-cv-div">
            <Text placeholder="Full Name" onPreview={this.state.onPreview} inputName="name" fontSize="55px" handlerUpdate={this.updateEntry}/>
            <Text placeholder="Profession" onPreview={this.state.onPreview} inputName="profession" fontSize="30px" handlerUpdate={this.updateEntry}/>
          </div>
          <div className="main-cv-div">
            <div className="left-cv-div">
              <h3 className="entry-title">About Me</h3>
                <TextArea placeholder="Write About Yourself" onPreview={this.state.onPreview} inputName="about" fontSize="18px" handlerUpdate={this.updateEntry}/>
              <h3 className="entry-title">Contact</h3>
                <ContactHolder category='contact' onPreview={this.state.onPreview} entries={this.state.entries} handlerUpdate={this.updateEntry}/>
              <h3 className="entry-title">Socials</h3>
              <ContactHolder category='socials' onPreview={this.state.onPreview} entries={this.state.entries} handlerUpdate={this.updateEntry}/>
            </div>
            <div className="right-cv-div">
              <h3 className="entry-title">Experience</h3>
                <InfoHolder onPreview={this.state.onPreview} handlerUpdate={this.updateEntry} inputName="experience"/>
              <h3 className="entry-title">Education</h3>
              <InfoHolder onPreview={this.state.onPreview} handlerUpdate={this.updateEntry} inputName="education"/>
            </div>
          </div>
        </div>
        <button className='toggle' onClick={this.togglePreview}>Toggle Preview</button>
      </div>
    );
  }
}


export default App;
