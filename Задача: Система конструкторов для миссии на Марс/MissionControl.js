const Spacekraft = require("./Spacekraft");
const MarsRover = require("./MarsRover");

function MissionControl(missionName, launchDate, spaceKraft, marsRover) {
  this.missionName = missionName;
  this.launchDate = launchDate;
  this.spaceKraft = spaceKraft;
  this.marsRover = marsRover;
  this.initiateLaunch = function () {
    return this.spaceKraft.launch();
  };
  this.deployMarsRover = function () {
    return this.marsRover.move("Марс");
  };
  this.coordinateMission = function () {
    this.marsRover.collectData("Провели исследование поверхности");
  };
  this.monitorMissionProgress = function () {
    console.log(this.marsRover.sendDataToEarth());
    console.log(this.spaceKraft.checkFuel());
  };
}

const spaceKraft = new Spacekraft("AbobaCraft", "diesel");
const marsRover = new MarsRover("1337", "huevaya");
const newMission = new MissionControl(
  "Aboba mission",
  "01.03.1999",
  spaceKraft,
  marsRover
);

console.log(newMission.initiateLaunch());
console.log(newMission.deployMarsRover());
newMission.coordinateMission();
newMission.monitorMissionProgress();
