ShapeStealer.Gameplay = function() { };

ShapeStealer.Gameplay.prototype = {

	preload: function() {
	},
	
	create: function() {
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		
		this.prepareHero();
	},
	
	changeKey : false,
	
	update: function() {
		this.player.body.velocity.x=0;	
		if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
			this.player.body.velocity.x = -150;
		}
		else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
			this.player.body.velocity.x = 150;
		}
		
		if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) && this.player.body.onFloor())// && this.player.body.touching.down)
		{
			console.log(this.player.mode);
			console.log(playerMode.JumpPoint);
			if(this.player.mode != playerMode.JumpPoint)
			{
				console.log("Normal...");
				this.player.body.velocity.y = -20;
			}
			else
			{
				console.log("Jumping point!");
				this.player.body.velocity.y = -200;
			}
		}
		
		if(game.input.keyboard.isDown(Phaser.Keyboard.SHIFT))
		{
			if(!this.changeKey)
			{
			console.log("Bioboost!");
			this.player.ChangeMode();
			this.changeKey = true;
			}
		}
		else
		{
			this.changeKey = false;
		}
	}
};

ShapeStealer.Gameplay.prototype.prepareHero = function(){
	this.player = new Player(game,30,30,'hero');
	
	game.add.existing(this.player);
};