/* global Pharser */

var game = new Phaser.Game(800,600, Phaser.AUTO, '');

game.state.add('Menu',ShapeStealer.Menu);
game.state.add('Game',ShapeStealer.Gameplay);

game.state.start('Menu');