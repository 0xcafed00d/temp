var game = {
    boardSize: 8,

    Piece: {
        none: 0,
        white: 1,
        black: 2
    }
};

game.BoardVisual = function(parentElement) {
    this.parentElement = parentElement;
}

game.BoardVisual.prototype.makeID = function(x, y) {
    return "_" + x + "_" + y + "_";
}

game.BoardVisual.prototype.getPiece = function(x, y) {
    return $(this.parentElement).find(".piece#" + this.makeID(x, y));
}

game.BoardVisual.prototype.makeBoardHTML = function() {
    for(var tr = 0; tr < game.boardSize; tr++) {
        var row = $("<tr/>");
        this.parentElement.append(row);
        for(var td = 0; td < game.boardSize; td++) {
            row.append($("<td class='cell'><div class='piece' id='" + this.makeID(td, tr) + "'></div></td>"));
        }
    }
}

game.BoardVisual.prototype.resetBoard = function() {
    $(this.parentElement).find(".piece").removeClass("black white");
}

game.BoardVisual.prototype.setPiece = function(x, y, piece) {
    if(piece === game.Piece.none)
        this.getPiece(x, y).removeClass("black white");

    if(piece === game.Piece.white)
        this.getPiece(x, y).removeClass("black").addClass("white");

    if(piece === game.Piece.black)
        this.getPiece(x, y).removeClass("white").addClass("black");
}

game.BoardVisual.prototype.resetPlayableCells = function() {
    $(this.parentElement).find(".cell").removeClass("playable");
}

game.BoardVisual.prototype.setCellPlayable = function(x, y) {
	this.getPiece(x, y).parent().addClass("playable");
}

game.BoardModel = function() {

}

game.BoardModel.prototype.setPiece = function(x, y, piece) {

}


$(document).ready(function() {
    game.visual = new game.BoardVisual($(".board"));
    game.visual.makeBoardHTML();
});