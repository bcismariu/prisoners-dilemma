# Prisoner's Dilemma

A simple strategy comparison game built on Atlantykron.

## What to do

In order to add you strategy to the game you need to follow these steps:
* build your on strategy class and plase the file in the `strategies` folder
* include your strategy in the `<head>` of `index.html`
* add your strategy as an option for **Player 1** and **Player 2**
* enjoy!

## Sample algorythm

```javascript
class Algorytm
{
    this.results = [];

    /**
     * returns 'T' to betray or 'C' to cooperate
     */
    this.answer = function ()
    {
        return 'T';
    }

    this.lastResult = function (result)
    {
        this.results.push(result);
    }
}
```

You can use any algorythm from the `strategies` folder as an inspiration.
