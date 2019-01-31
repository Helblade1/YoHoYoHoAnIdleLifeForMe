function Game(){
	this.player = new Player;
	this.era = new Era;
	this.activities = [];
	this.upgrades = [];
	this.multitaskedActivities = [];
	this.crewActivities = [];
	this.inProgressActivities = [];
}

function setStartingResources(){
  var currEraCurr = "era";
  currEraCurr = currEraCurr.concat(String(game.era.currentEra).concat("Currency"));
  for(var i=0; i < game.era[currEraCurr].length; i++){
    game.player.resources.push(i);
  }
}
