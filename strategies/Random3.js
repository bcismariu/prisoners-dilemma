/**
 * Author: Bogdan Cismariu <bogdan.cismariu@gmail.com>
 *
 * A strategy that sends random answers, but at every 5 iterations
 * replies with the oponent's answer from 3 rounds ago
 *
 * Used as an example and starting point for other strategies
 */
function Random3()
{
    this.results = [];

    this.answer = function ()
    {

        if (this.shouldUseOponentAnswer()) {
            return this.oponentAnswerRoundsAgo(3);
        }

        return this.randomAnswer();
    }

    this.shouldUseOponentAnswer = function ()
    {
        if (this.results.length < 5) {
            return false;
        }

        return this.results.length % 5;
    }

    this.oponentAnswerRoundsAgo = function (how_many)
    {
        index = this.results.length - how_many;
        return this.getOponentAnswer(this.results[index]);
    }

    this.getOponentAnswer = function(roundValue)
    {
        if (roundValue < -1) {
            return 'T';
        }
        return 'C';
    }

    this.randomAnswer = function ()
    {
        if (this.random(2) < 1) {
            return 'T';
        }
        return 'C';
    }

    this.random = function (max)
    {
        return Math.floor(max * Math.random());
    }

    this.lastResult = function(result)
    {
        this.results.push(result);
    }
}
