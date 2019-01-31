function PlayerSkill(iD, lev, gro, currxp, needxp, useMult, xpmultscale, usePow, xppowscale){
  this.id = iD;
  this.level = lev;
	this.growth = gro;
	this.currentXP = currxp;
	this.reqXP = needxp;
  this.baseXP = needxp;
	//multiplicative right now, might turn exponential
  this.usesMult = useMult;
	this.xPMultScaling = xpmultscale;
  this.usesPow = usePow;
	this.xPPowerScaling = xppowscale;
}

function Player(){
	//currencies
	this.copper = 0;
	this.silver = 0;
	this.gold = 0;
	//can add more

  //to keep track of resources since I am garbage at HTML and CSS
  this.resources = [];

	//skills
	this.pillage = new PlayerSkill('pillage',0,0,0,100,true,3,false,0);
}

function matchNameToSkill(player, iD){
  switch(iD){
    case 'pillage':
          return 'pillage';
  }
}

function setPlayerCurrency(){
  var currEraCurr = "era";
  currEraCurr = currEraCurr.concat(String(game.era.currentEra).concat("Currency"));
  for(var i=0; i < game.era[currEraCurr].length; i++){
    game.player.resources.push(game.era[currEraCurr][i]);
  }
}

function levelUp(name){
  if(game.player[name].currentXP >= game.player[name].reqXP)
  {
    game.player[name].level +=1;
    game.player[name].currentXP = 0;
    if(game.player[name].usesMult && !game.player[name].usesPow){
      //the formula for multiplicative leveling
      game.player[name].reqXP = game.player[name].baseXP * Math.pow(game.player[name].xPMultScaling,game.player[name].level);
      uiLevelUpSkill(name);
    }
    else if (game.player[name].usesPow && !game.player[name].usesMult){
      //the formula for exponential leveling

    }
    else {
      //the formula for multiplicative and exponential leveling

    }
  }
}
