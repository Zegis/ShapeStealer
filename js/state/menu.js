var ShapeStealer = {};

ShapeStealer.Menu = function(){};

ShapeStealer.Menu.prototype = {

	preload : function(){
		this.game.load.image('startbtn', 'assets/button.png',193,71);
		this.game.load.spritesheet('hero', 'assets/hero.png',56,80);
	},
	
	create : function(){
		var button = this.game.add.button(this.game.world.centerX - 95,
										  this.game.world.centerY - 30,
										  'startbtn', changeState, this);
	},
	
	update: function() {
	}
};

function changeState(){
	this.game.state.start('Game');
};