function Game()
{
    this.rounds = 100;
    this.player1 = null;
    this.player2 = null;
    this.results = {
        'player1': 0,
        'player2': 0
    }

    this.run = function ()
    {
        for (var i = 0; i < this.rounds; i ++) {
            this.playRound();
        }
        return this.results;
    }

    this.playRound = function ()
    {
        var answers = this.getAnswers();
        var roundResults = this.getRoundResults(answers);
        this.registerResults(roundResults);
        this.sendResultsToPlayers(roundResults);
    }

    this.registerResults = function (roundResults)
    {
        this.results.player1 += roundResults[0];
        this.results.player2 += roundResults[1];
    }

    this.sendResultsToPlayers = function (results)
    {
        this.player1.lastResult(results[0]);
        this.player2.lastResult(results[1]);
    }

    this.getRoundResults = function (answers)
    {
        console.log(answers);
        switch (answers) {
            case 'CC': return [-1, -1]; break;
            case 'CT': return [-3, 0]; break;
            case 'TC': return [0, -3]; break;
            case 'TT': return [-2, -2]; break;
            default: return [0, 0]; break;
        }
    }

    this.getAnswers = function ()
    {
        return this.player1.answer() + this.player2.answer();
    }

    this.setPlayers = function (player1, player2)
    {
        this.player1 = player1;
        this.player2 = player2;
    }

    this.setRounds = function (rounds)
    {
        this.rounds = rounds;
    }
}
