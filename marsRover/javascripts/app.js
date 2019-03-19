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

let rover2 = {
  direction: "N",
  x: 0,
  y: 1,
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

let obstacles = [
  {
    name: "meteor",
    x: 3,
    y: 2
  },
  {
    name: "crater",
    x: 9,
    y: 2
  },
  {
    name: "Elon Musk",
    x: 5,
    y: 5
  }
];

console.log(
  "Mars Rover.\nAvailable commands: turnLeft() [l], turnRight() [r], moveForward() [f], moveBackward() [b].\nAvailable rovers: rover."
);
console.log('To execute multiple commands: controller("string of commands")');
console.warn("Multiple rovers not yet supported");

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
  if (checkObstacle(rover) == true) {
    console.log("Please change direction and try again.");
  } else if (
    (rover.x >= 10 && rover.direction == "E") ||
    (rover.y >= 10 && rover.direction == "S")
  ) {
    console.log("Cliff! Please change direction and try again.");
  } else if (
    (rover.x <= 0 && rover.direction == "W") ||
    (rover.y <= 0 && rover.direction == "N")
  ) {
    console.log("Cliff! Please change direction and try again.");
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
    console.log("Cliff! Please change direction and try again");
  } else if (
    (rover.x <= 0 && rover.direction == "E") ||
    (rover.y <= 0 && rover.direction == "S")
  ) {
    console.log("Cliff! Please change direction and try again");
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

function controller(rover, commandString) {
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

function checkObstacle(rover) {
  for (let i = 0; i < obstacles.length; i++) {
    switch (rover.direction) {
      case "N":
        if (rover.y - 1 == obstacles[i].y && rover.x == obstacles[i].x) {
          console.log(
            "Watch out! There's a " +
              obstacles[i].name +
              " located at (" +
              obstacles[i].x +
              ", " +
              obstacles[i].y +
              ")"
          );

          return true;
        }
        break;
      case "E":
        if (rover.x + 1 == obstacles[i].x && rover.y == obstacles[i].y) {
          console.log(
            "Watch out! There's a " +
              obstacles[i].name +
              " located at (" +
              obstacles[i].x +
              ", " +
              obstacles[i].y +
              ")"
          );
          return true;
        }
        break;
      case "S":
        if (rover.y + 1 == obstacles[i].y && rover.x == obstacles[i].x) {
          console.log(
            "Watch out! There's a " +
              obstacles[i].name +
              " located at (" +
              obstacles[i].x +
              ", " +
              obstacles[i].y +
              ")"
          );
          return true;
        }
        break;
      case "W":
        if (rover.x - 1 == obstacles[i].x && rover.y == obstacles[i].y) {
          console.log(
            "Watch out! There's a " +
              obstacles[i].name +
              " located at (" +
              obstacles[i].x +
              ", " +
              obstacles[i].y +
              ")"
          );
          return true;
        }
        return false;
        break;
    }
  }
}

//Could probably be less repetitive
