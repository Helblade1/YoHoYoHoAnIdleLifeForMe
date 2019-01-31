function initializeActivities(game){
  var streetThievery = new Activity;
  streetThievery.id = "pillage";
  streetThievery.name = "Street Thievery";
  streetThievery.affectedSkills = ['pillage'];
  streetThievery.affectedSkillsBaseXP = [1];
  streetThievery.rewards = ['copper'];
  streetThievery.rewardsBaseValues = [1];

  game.activities.push(streetThievery);
}
