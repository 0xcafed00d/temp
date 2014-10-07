var reversi = {
    boardSize: 8,

    Piece: {
        none: 0,
        white: 1,
        black: 2
    }
};

// ----------------------------------------------------------------------------------------
// 	Board Visual
// ----------------------------------------------------------------------------------------

reversi.BoardVisual = function(parentElement) {
    this.parentElement = parentElement;
}

reversi.BoardVisual.prototype.makeID = function(x, y) {
    return "_" + x + "_" + y + "_";
}

reversi.BoardVisual.prototype.getPiece = function(x, y) {
    return $(this.parentElement).find(".piece#" + this.makeID(x, y));
}

reversi.BoardVisual.prototype.makeBoardHTML = function() {
    for(var tr = 0; tr < reversi.boardSize; tr++) {
        var row = $("<tr/>");
        this.parentElement.append(row);
        for(var td = 0; td < reversi.boardSize; td++) {
            row.append($("<td class='cell'><div class='piece' id='" + this.makeID(td, tr) + "'></div></td>"));
        }
    }
}

reversi.BoardVisual.prototype.resetBoard = function() {
    $(this.parentElement).find(".piece").removeClass("black white");
    this.setPiece(3, 3, reversi.Piece.white);
    this.setPiece(4, 4, reversi.Piece.white);
    this.setPiece(3, 4, reversi.Piece.black);
    this.setPiece(4, 3, reversi.Piece.black);
}

reversi.BoardVisual.prototype.setPiece = function(x, y, piece) {
    if(piece === reversi.Piece.none)
        this.getPiece(x, y).removeClass("black white");

    if(piece === reversi.Piece.white)
        this.getPiece(x, y).removeClass("black").addClass("white");

    if(piece === reversi.Piece.black)
        this.getPiece(x, y).removeClass("white").addClass("black");
}

reversi.BoardVisual.prototype.resetPlayableCells = function() {
    $(this.parentElement).find(".cell").removeClass("playable");
}

reversi.BoardVisual.prototype.setCellPlayable = function(x, y) {
    this.getPiece(x, y).parent().addClass("playable");
}

// ----------------------------------------------------------------------------------------
// 	Board Model
// ----------------------------------------------------------------------------------------

reversi.BoardModel = function() {
    this.board = [];
    for(var x = 0; x < reversi.boardSize; x++)
        a.push(new Array(reversi.boardSize));
}

reversi.BoardModel.prototype.resetBoard = function() {
    for(var x = 0; x < reversi.boardSize; x++)
        for(var y = 0; y < reversi.boardSize; y++)
            this.board[x][y] = reversi.Piece.none;

    this.setPiece(3, 3, reversi.Piece.white);
    this.setPiece(4, 4, reversi.Piece.white);
    this.setPiece(3, 4, reversi.Piece.black);
    this.setPiece(4, 3, reversi.Piece.black);
}

reversi.BoardModel.prototype.setPiece = function(x, y, piece) {
    this.board[x][y] = piece;
}

reversi.BoardModel.prototype.getPiece = function(x, y) {
    return this.board[x][y];
}

// ----------------------------------------------------------------------------------------
// 	Reversi Game Controller
// ----------------------------------------------------------------------------------------



// ----------------------------------------------------------------------------------------
// 	Reversi Game Start
// ----------------------------------------------------------------------------------------

$(document).ready(function() {
    reversi.visual = new reversi.BoardVisual($(".board"));
    reversi.visual.makeBoardHTML();
});