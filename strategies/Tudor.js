function Tudor()
{
	this.results = [];	
	this.ok = 0;
	this.contor = 0;
	this.answer = function()
	{
		this.rounds_collaborate = 2;
		this.rounds_betray = 3
		if(ok == 0)
			return collaborate(rounds_collaborate);
		if(ok == 1)
			return betray(rounds_betray);
	}
	this.lastRestul = function (result)
	{
		this.results.push(result);
	}
	this.collaborate = function(rounds)
	{
		if(contor == rounds)
		{
			ok = 1;
			contor = 1;
			return 'T';
		}
		if(ok == 0)
		{
			contor++;
			return 'C';
		}
	}
	this.betray = function (rounds)
	{
		if(contor == rounds)
		{
			ok = 0;
			contor = 1;
			return 'C';
		}
		if(ok == 1)
		{
			contor++;
			return 'T';
		}
	}
}