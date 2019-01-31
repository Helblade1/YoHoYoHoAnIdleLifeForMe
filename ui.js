function setCurrentEra(game){
	var temp = game.era.currentEra;
  var currentEraName = "era";
  currentEraName = currentEraName.concat(String(temp),"Name")
	document.getElementById('CurrentGameEra').innerHTML = game.era[currentEraName];
}


function updateUI(){
  updateAboutYou();
  updateResourceTable();
}

function updateAboutYou(){
  var visibleSkillList = document.getElementsByClassName('VisibleSkillName');
  for(var i=0; i < visibleSkillList.length; i++){
    //getting the name of the skill to update
    var currentSkillName = visibleSkillList[i].innerHTML;
    //adding Info so we can get those class elements
    var currentSkillClass = currentSkillName.concat('Info');
    //time to mod those skills
    document.getElementById(currentSkillName.concat('Level')).innerHTML = game.player[currentSkillName.toLowerCase()].level;
    document.getElementById(currentSkillName.concat('XP')).innerHTML = game.player[currentSkillName.toLowerCase()].currentXP;
    document.getElementById(currentSkillName.concat('XPToLevelUp')).innerHTML = game.player[currentSkillName.toLowerCase()].reqXP - game.player[currentSkillName.toLowerCase()].currentXP;
  }
}

function updateResourceTable(){
  for(var i=0; i < game.player.resources.length;i++){
    document.getElementById(game.player.resources[i]).innerHTML = game.player[game.player.resources[i]];
  }
}

//for setting currency for each era
function setCurrency(){
  var currEraCurr = "era";
  currEraCurr = currEraCurr.concat(String(game.era.currentEra).concat("Currency"));
  for(var i=0; i < game.era[currEraCurr].length; i++){
    var cellName = "Resource";
    document.getElementById(cellName.concat(i,'Name')).innerHTML = game.era[currEraCurr][i];
    document.getElementById(cellName.concat(i,'Amount')).innerHTML = game.player[game.era[currEraCurr][i]];
    //sets the id of the resource table
    document.getElementById(cellName.concat(i,'Amount')).id = game.era[currEraCurr][i];
  }
}

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e){
  if(document.getElementById('leveluptabbadge').innerHTML != "!"){
    var elements = document.getElementsByClassName("levelupbadge");
    for(var i = 0; i<elements.length; i++){
      elements[i].innerHTML = "";
    }
  }
});

$('a[id="about-you-tab"]').on('shown.bs.tab', function (e){
  document.getElementById('leveluptabbadge').innerHTML = '';
});

function uiLevelUpSkill(name){
  document.getElementById('leveluptabbadge').innerHTML = '!';
  if(document.getElementById(name.concat('badge')).innerHTML == ""){
    document.getElementById(name.concat('badge')).innerHTML = 1;
  }
  else{
    document.getElementById(name.concat('badge')).innerHTML = parseInt(document.getElementById(name.concat('badge')).innerHTML) + 1;
  }

}
