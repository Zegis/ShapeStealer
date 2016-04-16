var playerMode = { Normal : 0, JumpPoint : 1 };

function Player(game,x,y,image){
console.log("Create player!");
	Phaser.Sprite.call(this,game,x,y,image,0);
	
	game.physics.enable(this, Phaser.Physics.ARCADE);
	this.enableBody = true;
	this.body.bounce.y = 0;
	this.body.bounce.x = 0;
	
	
	this.body.gravity.y = 100;
	this.body.collideWorldBounds = true;
	
	this.mode = playerMode.Normal;
}

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.ChangeMode = function()
{
	if(this.mode === playerMode.Normal)
	{
		this.mode = playerMode.JumpPoint;
		this.frame = 1;
	}
	else if(this.mode === playerMode.JumpPoint)
	{
		this.mode = playerMode.Normal;
		this.frame = 0;
	}
}