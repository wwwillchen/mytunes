// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('dequeue', function(song) {
      if (song === this.at(0)) {
        this.remove(song);
        this.playFirst();
      }
      this.remove(song);
    }, this);
    this.on('add', function(song) {
      if (this.at(0) === song) {
        this.playFirst();
      }
    }, this);
    this.on('ended', function(song) {
      this.at(0).dequeue();
      if (this.length > 0) {
        this.playFirst();
      }
    }, this);
  },
  playFirst: function() {
    this.at(0).play();
  }

});
