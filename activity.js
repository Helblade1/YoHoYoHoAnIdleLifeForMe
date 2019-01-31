function Activity(){
  this.id = 'id';
  this.name = 'name';
  this.affectedSkills = ['none'];
  this.affectedSkillsBaseXP = [0];
  this.rewards = ['none'];
  this.rewardsBaseValues = [0];
  this.rewardMult = 1;
  this.flavorText = "";
}

function performActivity(name, isPlayer, crewMemebers){
  //determine if it is a player doing it or not.
  if(isPlayer){
    var activity = matchNameToActivity(game.activities, name);
    for(var i=0; i < activity.affectedSkills.length; i++){
      //how activities affect skills
      var skill = matchNameToSkill(game.player, activity.affectedSkills[i]);
      game.player[skill].currentXP += activity.affectedSkillsBaseXP[i]*game.player[skill].growth;
    }
    for(var i=0; i<activity.rewards.length; i++){
      //the formula for determing rewards
      var skill = matchNameToSkill(game.player, activity.affectedSkills[i]);
      game.player[activity.rewards[i]] += (activity.rewardsBaseValues[i] * game.player[skill].level);
      //gotta check for levelup
      levelUp(skill);
    }
  }
  //else will be for when crew is implemented
  updateUI();
}

function matchNameToActivity(activityArray, name){
  for(var i=0; i<activityArray.length; i++){
    if(name == activityArray[i].id){
      return activityArray[i];
    }
  }
}
