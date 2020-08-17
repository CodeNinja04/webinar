import React, { Component } from "react";
import { Menu, Segment,Header } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import ContactModal from './ContactModal';

export default class ButtonAppBar extends Component {
  
    state = { activeItem: "" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  
  getComponent = (event) => {
    return <ContactModal />;
  }
  render() {
    const { activeItem } = this.state;

    return (
      <Segment inverted>
        <Menu inverted secondary>
          <Menu.Item
            name="PAST EVENTS"
            active={activeItem === "past"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="UPCOMING EVENTS"
            active={activeItem === "upcoming"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="CONTACT US"
            active={activeItem === "contact"}
            onClick={this.getComponent}
          />

          <h1 className="title" style={{Color: "#89d4cf",marginTop:".6%",marginLeft:"7%",fontSize:"2.5rem"}}>IOTHINC WEBINAR</h1>
        </Menu>
      </Segment>
    );
  }
}



