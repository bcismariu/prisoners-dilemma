/**
 * Author: Bogdan Cismariu <bogdan.cismariu@gmail.com>
 *
 * A simple strategy that always betrays
 */
function Tradator()
{
    this.results = [];

    this.answer = function ()
    {
        return 'T';
    }

    this.lastResult = function(result)
    {
        this.results.push(result);
    }
}
