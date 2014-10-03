
var game = {
	boardSize: 8
};

game.makeBoardHTML = function (parent) {
    for(var tr = 0; tr < game.boardSize; tr++){
        var row = $("<tr/>");
        parent.append(row);
        for(var td = 0; td < game.boardSize; td++){
			if ((tr + td) & 1)
            	row.append($("<td class='cell'><div class='piece white'></div></td>"));
			else
            	row.append($("<td class='cell'><div class='piece black'></div></td>"));
				
        }
    }
}

$(document).ready( function () {
	game.makeBoardHTML($(".board"))
});

