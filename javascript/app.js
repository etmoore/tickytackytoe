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
          self.checkWin();
          self.switchPlayer();
        }
      });
    },
    cellEmpty: function(cell) {
      return $(cell).is(':empty');
    },
    checkWin: function() {
      var firstRow = $('.row:first > .cell:nth-child(1)').html() +
                $('.row:nth-child(1) > .cell:nth-child(2)').html() +
                $('.row:nth-child(1) > .cell:nth-child(3)').html();
      if (firstRow === "XXX" || firstRow === "OOO"){ this.win(); }

      var secondRow = $('.row:nth-child(2) > .cell:nth-child(1)').html() +
                $('.row:nth-child(2) > .cell:nth-child(2)').html() +
                $('.row:nth-child(2) > .cell:nth-child(3)').html();
      if (secondRow === "XXX" || secondRow === "OOO"){ this.win(); }

      var thirdRow = $('.row:nth-child(3) > .cell:nth-child(1)').html() +
                $('.row:nth-child(3) > .cell:nth-child(2)').html() +
                $('.row:nth-child(3) > .cell:nth-child(3)').html();
      if (thirdRow === "XXX" || thirdRow === "OOO"){ this.win(); }

      var firstColumn = $('.row:nth-child(1) > .cell:nth-child(1)').html() +
                $('.row:nth-child(2) > .cell:nth-child(1)').html() +
                $('.row:nth-child(3) > .cell:nth-child(1)').html();
      if (firstColumn === "XXX" || firstColumn === "OOO"){ this.win(); }

      var secondColumn = $('.row:nth-child(1) > .cell:nth-child(2)').html() +
                $('.row:nth-child(2) > .cell:nth-child(2)').html() +
                $('.row:nth-child(3) > .cell:nth-child(2)').html();
      if (secondColumn === "XXX" || secondColumn === "OOO"){ this.win(); }

      var thirdColumn = $('.row:nth-child(1) > .cell:nth-child(3)').html() +
                $('.row:nth-child(2) > .cell:nth-child(3)').html() +
                $('.row:nth-child(3) > .cell:nth-child(3)').html();
      if (thirdColumn === "XXX" || thirdColumn === "OOO"){ this.win(); }

      var firstDiagonal = $('.row:nth-child(1) > .cell:nth-child(1)').html() +
                $('.row:nth-child(2) > .cell:nth-child(2)').html() +
                $('.row:nth-child(3) > .cell:nth-child(3)').html();
      if (firstDiagonal === "XXX" || firstDiagonal === "OOO"){ this.win(); }

      var secondDiagonal = $('.row:nth-child(1) > .cell:nth-child(3)').html() +
                $('.row:nth-child(2) > .cell:nth-child(2)').html() +
                $('.row:nth-child(3) > .cell:nth-child(1)').html();
      if (secondDiagonal === "XXX" || secondDiagonal === "OOO"){ this.win(); }
    },
    dropMark: function(cell) {
      if (this.playerOne){ $(cell).html('O'); }
      else { $(cell).html('X'); }
    },
    switchPlayer: function() {
      this.playerOne = !this.playerOne;
    },
    win: function() {
      console.log('winner!');
    }
  };

  App.init();
}());
