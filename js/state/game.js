ShapeStealer.Gameplay = function() { };

ShapeStealer.Gameplay.prototype = {

	preload: function() {
	},
	
	create: function() {
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		
		this.prepareHero();
		
		this.cursors = game.input.keyboard.createCursorKeys();
	},
	
	update: function() {
		this.player.body.velocity.x=0;
		if(this.cursors.left.isDown)
		{
			this.player.body.velocity.x = -150;
		}
		else if(this.cursors.right.isDown)
		{
			this.player.body.velocity.x = 150;
		}
	
	}
};

ShapeStealer.Gameplay.prototype.prepareHero = function(){
	this.player = this.game.add.sprite(30,30, 'hero');
	
	this.game.physics.arcade.enable(this.player);
	
	this.player.body.bounce.y = 0;
	this.player.body.gravity.y = 100;
	this.player.body.collideWorldBounds = true;
};