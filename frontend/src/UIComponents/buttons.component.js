import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {
  MDBIcon,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBAnimation,
} from "mdbreact";

import "../styles/workstation.css";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/auth";
import {
  dropSecondColumn,
  dropSecondColumnLoad,
  updateFirstDropDown,
  updateSecondDropDown,
  enableButtonsAfterClicking,
  enableDropDownOptions,
  undoAfterClicking,
  resetRoom,
  resetTypeOfDraggable,
} from "../actions/workstation";
import { sendRoomData } from "../actions/auth";
import Modal from "./modal.component";

const Buttons = (props) => {
  const [buttonProp, setButtonProp] = useState(props);
  const dispatch = useDispatch();
  const history = useHistory();

  const routeChange = () => {
    let path = "";
    history.push(path);
  };

  const logOut = () => {
    dispatch(logout());
    console.log("Logged out!");
  };

  const peopleType = useSelector((state) => state.dropdownSelectionsReducer);

  const peopleNum = useSelector(
    (state) => state.dropdownSecondSelectionsReducer
  );

  const handleDropDown = async (index) => {
    if (index !== peopleType) {
      await dispatch(updateFirstDropDown(index));
      await dispatch(updateSecondDropDown("NUMBER OF PEOPLE"));
    }
  };

  const handleSecondDropDown = async (testing) => {
    await dispatch(updateSecondDropDown(testing));
  };

  const groupDropDownOptions = (x, y) => {
    const array = y[x].num.map((value) => (
      <MDBDropdownItem onClick={() => handleSecondDropDown(value)}>
        {value}
      </MDBDropdownItem>
    ));
    return <MDBDropdownMenu basic>{array}</MDBDropdownMenu>;
  };

  let entranceNumberBadge = useSelector(
    (state) => state.extractPositionReducer.entranceBadge
  );

  let exitNumberBadge = useSelector(
    (state) => state.extractPositionReducer.exitBadge
  );

  let accessPointNumberBadge = useSelector(
    (state) => state.extractPositionReducer.accessPointBadge
  );

  let exhibitNumberBadge = useSelector(
    (state) => state.extractPositionReducer.exhibitBadge
  );

  let enableRestOfButtons = useSelector(
    (state) => state.buttonEnablingReducer.disabledBtn
  );

  let enableDropDownButtons = useSelector(
    (state) => state.buttonEnablingReducer.disabledGroupBtns
  );

  const RestOfButtonsEnabled = () => {
    dispatch(enableButtonsAfterClicking());
  };

  const DropDownEnabled = () => {
    dispatch(enableDropDownOptions());
  };

  let enableAdd = peopleNum === "NUMBER OF PEOPLE";

  // let enableSave = !(
  //   entranceNumberBadge === 1 &&
  //   exitNumberBadge === 1 &&
  //   accessPointNumberBadge >= 1 &&
  //   exhibitNumberBadge >= 1
  // );

  const dropdownItems = [
    {
      type: "School",
      num: [5, 10, 15],
      isActive: 1,
    },
    {
      type: "Family",
      num: [3, 4, 5, 6],
      isActive: 2,
    },
    {
      type: "Other",
      num: [2, 3, 4],
      isActive: 3,
    },
    {
      type: "Choose Group",
      num: ["Choose a group first!"],
      isActive: 4,
    },
  ];

  let roomdData = useSelector((state) => state.extractPositionReducer);

  // const handleSave = (e) => {
  //   // dispatch(sendRoomData(roomdData));
  //   // .then(() => {
  //   //   // console.log('Success');
  //   // })
  //   // .catch(() => {
  //   //   // console.log('Fail');
  //   // });
  // };

  const handleNew = (e) => {
    dispatch(dropSecondColumn());
    dispatch(resetRoom());
    dispatch(resetTypeOfDraggable());
  };

  const handleLoad = (e) => {
    dispatch(resetRoom());
    dispatch(resetTypeOfDraggable());
    dispatch(dropSecondColumnLoad());
  };

  // if (buttonProp.type === "save") {
  //   return (
  //     <MDBBtn
  //       onClick={() => {
  //         RestOfButtonsEnabled();
  //         handleSave();
  //       }}
  //       disabled={enableSave}
  //       id="save"
  //       rounded
  //       color="success"
  //     >
  //       <MDBIcon icon="save" style={{ marginRight: "1rem" }} />
  //       Save
  //     </MDBBtn>
  //   );
  if (buttonProp.type === "group") {
    return (
      <div className="d-flex flex-row justify-content-around">
        <MDBDropdown>
          <MDBDropdownToggle
            disabled={enableDropDownButtons}
            id="dd1"
            caret
            rounded
            color="blue-grey"
          >
            {dropdownItems[peopleType].type}
          </MDBDropdownToggle>
          <MDBDropdownMenu basic>
            <MDBDropdownItem onClick={() => handleDropDown(0)}>
              {dropdownItems[0].type}
            </MDBDropdownItem>
            <MDBDropdownItem onClick={() => handleDropDown(1)}>
              {dropdownItems[1].type}
            </MDBDropdownItem>
            <MDBDropdownItem onClick={() => handleDropDown(2)}>
              {dropdownItems[2].type}
            </MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
        <MDBDropdown>
          <MDBDropdownToggle
            disabled={enableDropDownButtons}
            caret
            id="dd2"
            rounded
            color="blue-grey"
          >
            {peopleNum}
          </MDBDropdownToggle>
          {groupDropDownOptions(peopleType, dropdownItems)}
        </MDBDropdown>
      </div>
    );
  } else if (buttonProp.type === "add") {
    return (
      <MDBBtn disabled={enableAdd} id="add" color="blue-grey">
        <MDBIcon icon="arrow-alt-circle-up" style={{ marginRight: "3px" }} />{" "}
        Add
      </MDBBtn>
    );
  } else if (buttonProp.type === "run") {
    return (
      <MDBBtn
        onClick={() => DropDownEnabled()}
        disabled={enableRestOfButtons}
        id="run"
        rounded
        color="danger"
      >
        <MDBIcon icon="tachometer-alt" style={{ marginRight: "9px" }} />
        Run Simulation
      </MDBBtn>
    );
  } else if (buttonProp.type === "home") {
    return (
      <MDBBtn
        className="styleBtn"
        onClick={() => window.location.reload(false)}
      >
        <MDBIcon icon="home" style={{ marginRight: "1rem" }} />
        Home
      </MDBBtn>
    );
  } else if (buttonProp.type === "new") {
    return (
      <MDBBtn
        className="styleBtn"
        onClick={() => {
          handleNew();
        }}
      >
        <MDBIcon icon="plus-circle" style={{ marginRight: "1rem" }} />
        New Template
      </MDBBtn>
    );
  } else if (buttonProp.type === "load") {
    return (
      <MDBBtn
        className="styleBtn"
        onClick={() => {
          handleLoad();
        }}
      >
        <MDBIcon icon="sync" style={{ marginRight: "1rem" }} />
        Load Template
      </MDBBtn>
    );
  } else if (buttonProp.type === "graph") {
    return (
      <MDBBtn className="styleBtn">
        <MDBIcon icon="chart-area" style={{ marginRight: "1rem" }} />
        Graphs
      </MDBBtn>
    );
  } else if (buttonProp.type === "logout") {
    return (
      <MDBBtn
        onClick={() => {
          logOut();
          routeChange();
        }}
        className="styleBtn2"
      >
        <span>
          <MDBIcon icon="sign-out-alt" style={{ marginRight: "1rem" }} />
          Log Out
        </span>
      </MDBBtn>
    );
  } else if (buttonProp.type === "reset") {
    return (
      <MDBBtn className="styleBtn2" style={{ marginTop: "5rem" }}>
        <span>
          <MDBIcon icon="undo" style={{ marginRight: "1rem" }} />
          Reset Password
        </span>
      </MDBBtn>
    );
  } else if (buttonProp.type === "undo") {
    return (
      <MDBBtn
        onClick={() => {
          dispatch(undoAfterClicking());
        }}
        className="styleBtn2"
        style={{
          display: "grid",
          gridTemplateColumns: "2rem auto",
          marginLeft: "25px",
          paddingLeft: "1rem",
          paddingRight: "5.2rem",
          textAlign: "center",
        }}
      >
        <MDBIcon
          icon="backspace"
          style={{ marginRight: "6px", marginTop: "4.5px" }}
        />
        Undo
      </MDBBtn>
    );
  }
};

export default Buttons;
