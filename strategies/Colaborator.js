/**
 * Author: Bogdan Cismariu <bogdan.cismariu@gmail.com>
 *
 * A simple strategy that always cooperates
 */
function Colaborator()
{
    this.results = [];

    this.answer = function ()
    {
        return 'C';
    }

    this.lastResult = function (result)
    {
        this.results.push(result);
    }
}
