function play()
{
    var game = new Game();
    game.setRounds(getRounds('rounds'));
    game.setPlayers(getPlayer('player_1'), getPlayer('player_2'));
    var results = game.run();
    displayResult(results);
}


function displayResult(results)
{
    document.getElementById('result_display').innerHTML = 
          'Player 1: ' + results.player1 + '<br>'
        + 'Player 2: ' + results.player2 + '<br>'
    ;
}

function getPlayer(element)
{
    var algorythm = getPlayerSelection(element);
    return new this[algorythm]();
}

function getRounds(element)
{
    return document.getElementById(element).value;
}

function getPlayerSelection(element)
{
    return document.getElementById(element).value;
}
