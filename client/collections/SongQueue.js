// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('dequeue', function(song) {
      this.remove(song);
    }, this);
    this.on('add', function(song) {
      if (this.at(0) === song) {
        this.playFirst();
      }
    }, this);
    this.on('ended', function(song) {
      console.log('song queue ended');
      this.at(0).dequeue();
      //this.remove(this.at(0));
      // this.currentSong.set(songQueue.at(0));
      if (this.length > 0) {
        this.playFirst();
      }
    }, this);
  },
  playFirst: function() {
    this.at(0).play();
    // this.currentSong.set(songQueue.at(0))
    // fire off the change:currentSong event
  }

});
