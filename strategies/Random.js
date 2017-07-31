/**
 * Author: Bogdan Cismariu <bogdan.cismariu@gmail.com>
 *
 * A simple strategy that provides random answers
 */
function Random()
{
    this.results = [];

    this.answer = function ()
    {
        if (this.random()) {
            return 'C';
        }
        return 'T';
    }

    this.lastResult = function (result)
    {
        this.results.push(result);
    }

    this.random = function ()
    {
        return Math.floor(2 * Math.random());
    }
}
