$(function () {
  'use strict';

  var App = {
    init: function() {
      this.setEventListeners();
      this.playerOne = true;
    },
    setEventListeners: function() {
      var self = this;
      $('.board').on('click', '.cell', function(){
        if ( self.cellEmpty(this) ){
          self.dropMark(this);
          self.switchPlayer();
        }
      });
    },
    cellEmpty: function(cell) {
      return $(cell).is(':empty');
    },
    dropMark: function(cell) {
      if (this.playerOne){ $(cell).html('O'); }
      else { $(cell).html('X'); }
    },
    switchPlayer: function() {
      this.playerOne = !this.playerOne;
    }
  };

  App.init();
}());
