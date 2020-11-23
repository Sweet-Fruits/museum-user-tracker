const initialState = {
  userId: null,
  entrance: null,
  exit: null,
  accessPoint: [null],
  exhibit: [null],
  wall: [null],
  positionThatWillUndo: null,
  counterAccessPoint: 0,
  counterExhibit: 0,
  counterWall: 0,
  counterAllPositions: 0,
  allPositions: [null],
  // Badges
  entranceBadge: 0,
  exitBadge: 0,
  accessPointBadge: 0,
  exhibitBadge: 0,
  //Dimensions of Room
  height: 23,
  width: 38,
  isResized: false,
  counterAPFromSquareComponent: 0,
  counterExhibitFromSquareComponent: 0,
  counterWallFromSquareComponent: 0,
  accessPointPositionArrayFromSquareComponent: [],
  exhibitPositionArrayFromSquareComponent: [],
  wallPositionArrayFromSquareComponent: [],
  nameOfTemplate: "Louvre Museum",
};

const extractPositionReducer = (state = initialState, action) => {
  state.positionThatWillUndo = null;
  switch (action.type) {
    case "CHANGE_IS_RESIZED":
      state.isResized = !state.isResized;
      return state;
    case "SEND_NAME_OF_TEMPLATE":
      state.nameOfTemplate = action.payload1;
      state.userId = action.payload2;
      return state;
    case "CHANGE_DIMENSIONS":
      state.height = action.payloadX;
      state.width = action.payloadY;
      state.entrance = null;
      state.exit = null;
      state.accessPoint = [null];
      state.accessPoint.length = 1;
      state.exhibit = [null];
      state.exhibit.length = 1;
      state.wall = [null];
      state.wall.length = 1;
      state.positionThatWillUndo = null;
      state.counterAccessPoint = 0;
      state.counterExhibit = 0;
      state.counterWall = 0;
      state.counterAllPositions = 0;
      state.allPositions = [null];
      state.allPositions.length = 1;
      state.entranceBadge = 0;
      state.exitBadge = 0;
      state.accessPointBadge = 0;
      state.exhibitBadge = 0;
      state.isResized = true;
      return state;
    case "RESET_ROOM":
      state.entrance = null;
      state.exit = null;
      state.accessPoint = [null];
      state.accessPoint.length = 1;
      state.exhibit = [null];
      state.exhibit.length = 1;
      state.wall = [null];
      state.wall.length = 1;
      state.positionThatWillUndo = null;
      state.counterAccessPoint = 0;
      state.counterExhibit = 0;
      state.counterWall = 0;
      state.counterAllPositions = 0;
      state.allPositions = [null];
      state.allPositions.length = 1;
      state.entranceBadge = 0;
      state.exitBadge = 0;
      state.accessPointBadge = 0;
      state.exhibitBadge = 0;
      state.isResized = true;
      state.counterAPFromSquareComponent = 0;
      state.counterExhibitFromSquareComponent = 0;
      state.counterWallFromSquareComponent = 0;
      state.accessPointPositionArrayFromSquareComponent = [];
      state.accessPointPositionArrayFromSquareComponent.length = 1;
      state.exhibitPositionArrayFromSquareComponent = [];
      state.exhibitPositionArrayFromSquareComponent.length = 1;
      state.wallPositionArrayFromSquareComponent = [];
      state.wallPositionArrayFromSquareComponent.length = 1;
      return state;
    case "EXTRACT_ENTRANCE_POSITION":
      state.entrance = action.payload;
      state.allPositions[state.counterAllPositions] = action.payload;
      state.counterAllPositions++;
      return state;
    case "EXTRACT_EXIT_POSITION":
      state.exit = action.payload;
      state.allPositions[state.counterAllPositions] = action.payload;
      state.counterAllPositions++;
      return state;
    case "EXTRACT_ACCESS_POINT_POSITION":
      state.accessPoint[state.counterAccessPoint] = action.payload;
      state.counterAccessPoint++;
      state.allPositions[state.counterAllPositions] = action.payload;
      state.counterAllPositions++;
      return state;
    case "EXTRACT_EXHIBIT_POSITION":
      state.exhibit[state.counterExhibit] = action.payload;
      state.counterExhibit++;
      state.allPositions[state.counterAllPositions] = action.payload;
      state.counterAllPositions++;
      return state;
    case "EXTRACT_WALL_POSITION":
      state.wall[state.counterWall] = action.payload;
      state.counterWall++;
      state.allPositions[state.counterAllPositions] = action.payload;
      state.counterAllPositions++;
      return state;
    case "EXTRACT_ENTRANCE_BADGE":
      if (state.entranceBadge < 1) {
        state.entranceBadge = state.entranceBadge + 1;
      }
      return state;
    case "EXTRACT_EXIT_BADGE":
      if (state.exitBadge < 1) {
        state.exitBadge = state.exitBadge + 1;
      }
      return state;
    case "EXTRACT_ACCESS_POINT_BADGE":
      state.accessPointBadge = state.accessPointBadge + 1;
      return state;
    case "EXTRACT_EXHIBIT_BADGE":
      state.exhibitBadge = state.exhibitBadge + 1;
      return state;
    case "SEND_SQUARE_COMPONENT_VARIABLES":
      state.counterAPFromSquareComponent = action.payload1;
      state.counterExhibitFromSquareComponent = action.payload2;
      state.counterWallFromSquareComponent = action.payload3;
      state.accessPointPositionArrayFromSquareComponent = action.payload4;
      state.exhibitPositionArrayFromSquareComponent = action.payload5;
      state.wallPositionArrayFromSquareComponent = action.payload6;
      return state;
    case "UNDO_AFTER_CLICKING":
      if (state.allPositions[state.counterAllPositions] !== null) {
        if (
          state.allPositions[state.counterAllPositions - 1] === state.entrance
        ) {
          state.entrance = null;
          state.allPositions.pop();
          state.counterAllPositions--;
          state.entranceBadge--;
        } else if (
          state.allPositions[state.counterAllPositions - 1] === state.exit
        ) {
          state.exit = null;
          state.allPositions.pop();
          state.counterAllPositions--;
          state.exitBadge--;
        } else if (
          state.allPositions[state.counterAllPositions - 1] ===
          state.accessPoint[state.counterAccessPoint - 1]
        ) {
          state.positionThatWillUndo =
            state.allPositions[state.counterAllPositions - 1];
          state.accessPoint[state.counterAccessPoint - 1] = null;
          state.allPositions.pop();
          if (state.counterAccessPoint > 0) {
            state.counterAccessPoint--;
            state.counterAllPositions--;
            state.accessPointBadge--;
          }
        } else if (
          state.allPositions[state.counterAllPositions - 1] ===
          state.exhibit[state.counterExhibit - 1]
        ) {
          state.positionThatWillUndo =
            state.allPositions[state.counterAllPositions - 1];
          state.exhibit[state.counterExhibit - 1] = null;
          state.allPositions.pop();
          if (state.counterExhibit > 0) {
            state.counterExhibit--;
            state.counterAllPositions--;
            state.exhibitBadge--;
          }
        } else if (
          state.allPositions[state.counterAllPositions - 1] ===
          state.wall[state.counterWall - 1]
        ) {
          state.positionThatWillUndo =
            state.allPositions[state.counterAllPositions - 1];
          state.wall[state.counterWall - 1] = null;
          state.allPositions.pop();
          if (state.counterWall > 0) {
            state.counterWall--;
            state.counterAllPositions--;
          }
        } else {
          return state;
        }
      }
    default:
      return { ...state };
  }
};

export default extractPositionReducer;
