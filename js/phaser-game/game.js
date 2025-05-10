// Vienkārša platformera spēle, kur var savākt "Feramas Studios" tokenus
function create() {
  this.player = this.physics.add.sprite(100, 100, 'player');
  this.tokens = this.physics.add.group();
  
  this.physics.add.overlap(
    this.player, 
    this.tokens, 
    (player, token) => token.disableBody(true, true)
  );
}
