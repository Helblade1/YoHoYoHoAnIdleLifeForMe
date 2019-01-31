var game = new Game;
window.onload = function(){
	//can expand this later for the loading function but for now it is just going to be starting a new game
	setCurrentEra(game);
  initializeActivities(game);
  updateUI();
  setCurrency();
  setPlayerCurrency();
};
