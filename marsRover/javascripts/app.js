// Rover Object Goes Here
// ======================
let rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [],
  moveNumber: 0,
  keepTrack: function() {
    this.moveNumber++;
    currentPosition =
      " \n" +
      this.moveNumber +
      ". Position: [" +
      this.x +
      ", " +
      this.y +
      "]. Facing: " +
      this.direction +
      " ";
    this.travelLog.push(currentPosition);
    console.log("History log: " + this.travelLog);
  }
};

console.log(
  "Mars Rover.\nAvailable commands: turnLeft() [l], turnRight() [r], moveForward() [f], moveBackward() [b].\nAvailable rovers: rover."
);
console.log('To execute multiple commands: controller("string of commands")');
console.warn("Obstacles and collision not supported");
const mars = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, "meteor", 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, "crater", 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
// ======================
function turnLeft(rover) {
  rover.keepTrack();
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "E":
      rover.direction = "N";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "W":
      rover.direction = "S";
      break;
  }
  console.log("Now facing: " + rover.direction);
}

function turnRight(rover) {
  rover.keepTrack();
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
  console.log(rover.direction);
}

function moveForward(rover) {
  if (
    (rover.x >= 10 && rover.direction == "E") ||
    (rover.y >= 10 && rover.direction == "S")
  ) {
    console.log("Please change direction and try again");
  } else if (
    (rover.x <= 0 && rover.direction == "W") ||
    (rover.y <= 0 && rover.direction == "N")
  ) {
    console.log("Please change direction and try again");
  } else {
    rover.keepTrack();
    switch (rover.direction) {
      case "N":
        rover.y = rover.y - 1;
        break;
      case "E":
        rover.x = rover.x + 1;
        break;
      case "S":
        rover.y = rover.y + 1;
        break;
      case "W":
        rover.x = rover.x - 1;
        break;
    }
    console.log(
      "New position: " +
        rover.x +
        ", " +
        rover.y +
        ". Currently facing: " +
        rover.direction
    );
  }
}

function moveBackward(rover) {
  if (
    (rover.x >= 10 && rover.direction == "W") ||
    (rover.y >= 10 && rover.direction == "N")
  ) {
    console.log("Please change direction and try again");
  } else if (
    (rover.x <= 0 && rover.direction == "E") ||
    (rover.y <= 0 && rover.direction == "S")
  ) {
    console.log("Please change direction and try again");
  } else {
    rover.keepTrack();
    switch (rover.direction) {
      case "N":
        rover.y = rover.y + 1;
        break;
      case "E":
        rover.x = rover.x - 1;
        break;
      case "S":
        rover.y = rover.y - 1;
        break;
      case "W":
        rover.x = rover.x + 1;
        break;
    }
    console.log(
      "New position: " +
        rover.x +
        ", " +
        rover.y +
        ". Currently facing: " +
        rover.direction
    );
  }
}

function controller(commandString) {
  for (let i = 0; i < commandString.length; i++) {
    let character = commandString[i];
    switch (character) {
      case "r":
        turnRight(rover);
        break;
      case "l":
        turnLeft(rover);
        break;
      case "f":
        moveForward(rover);
        break;
      case "b":
        moveBackward(rover);
        break;
      default:
        break;
    }
  }
}
