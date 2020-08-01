import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBInput,
  MDBAnimation,
  MDBBtnGroup,
  MDBNav,
  MDBNavLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";

import "./profile.css";

class Buttons extends React.Component {

  sendColumnMidIsOpen = () => {
    this.props.func('2');
  };

    render() {
      if (this.props.type === 'save') {
        return(
          <MDBBtn id="save" rounded color="success">
              <MDBIcon icon="save" style={{ marginRight: "1rem" }} />
                Save
             </MDBBtn>)
      } else if (this.props.type === 'group') {
        return (
          <MDBDropdown>
            <MDBDropdownToggle id="dd1" caret  rounded color="blue-grey">
              Choose Group
            </MDBDropdownToggle>
            <MDBDropdownMenu basic>
              <MDBDropdownItem>School</MDBDropdownItem>
              <MDBDropdownItem>Family</MDBDropdownItem>
              <MDBDropdownItem>Couple</MDBDropdownItem>
            </MDBDropdownMenu>
        </MDBDropdown>
        )
      } else if (this.props.type === 'people') {
        return (
          <MDBDropdown>
            <MDBDropdownToggle caret id="dd2" rounded color="blue-grey">
              Number of people
            </MDBDropdownToggle>
            <MDBDropdownMenu basic>
              <MDBDropdownItem>1</MDBDropdownItem>
              <MDBDropdownItem>2</MDBDropdownItem>
              <MDBDropdownItem>3</MDBDropdownItem>
            </MDBDropdownMenu>
        </MDBDropdown>
        )
      } else if (this.props.type === 'add') {
        return (
          <MDBBtn id='add' color="blue-grey"><MDBIcon icon="arrow-alt-circle-up" /> Add</MDBBtn>
        )
      } else if (this.props.type === 'run') {
        return (
          <MDBBtn id="run" rounded color="danger">
            <MDBIcon
              icon="tachometer-alt"
              style={{ marginRight: "1rem" }}
            />
            Run Simulation
        </MDBBtn>
        )
      } else if (this.props.type === 'home') {
        return (
          <MDBBtn className="styleBtn">
                <MDBIcon icon="home" style={{ marginRight: "1rem" }} />
                  Home
          </MDBBtn>
        )
      } else if (this.props.type === 'new') {
        return (
          <MDBBtn className="styleBtn" onClick={this.sendColumnMidIsOpen}>
            <MDBIcon
              icon="plus-circle"
              style={{ marginRight: "1rem" }}
              />
              New Template
          </MDBBtn>
        )
      } else if (this.props.type === 'load') {
        return (
          <MDBBtn className="styleBtn">
              <MDBIcon icon="sync" style={{ marginRight: "1rem" }} />
              Load Template
          </MDBBtn>
        )
      } else if (this.props.type === 'graph') {
        return (
          <MDBBtn className="styleBtn">
            <MDBIcon
              icon="chart-area"
              style={{ marginRight: "1rem" }}
            />
             Graphs
          </MDBBtn>
        )
      }
    }
}

export default Buttons;