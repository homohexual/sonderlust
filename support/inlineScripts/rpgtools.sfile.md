---
obsidianUIMode: preview
---

Shortcuts to help in playing tabletop rpgs, either group or solo.


__
__
```js
// Make a roll from 1 to max.
function roll(max) { return Math.trunc(Math.random() * max + 1); }

// Pick an item from array a.
function aPick(a) { return a[roll(a.length)-1]; }

// Pick an item from array a, weighted by element wIndex of the item.  If theRoll is
// passed, use that as the roll.
function aPickWeight(a, wIndex, theRoll)
{
	wIndex = wIndex || 1;
	theRoll = theRoll || roll(a.last()[wIndex]);
	for (let i = 0; i < a.length; i++)
	{
		if (a[i][wIndex] >= theRoll)
		{
			return a[i];
		}
	}
	return a.last();
}
```
__
Helper scripts


__
```
^tbl twist$
```
__
```js
// Data
let target = ["enviornment","ally","enemy","unknown","something","information"];
let circumstance = ["missing / gone / lost / forgotten","explosive / dangerous / sensitive","blocked / hidden / trapped","arrived / recent / new","dead / destroyed / unrecoverable","broken / damaged / injured","flooded / overflowed / exceeded","sabotaged / captured / taken","corrupted / twisted / insane","false / fake / lying / treason","mistaken / error / false / wrong","leaked / discovered / known","erratic / unreliable / failing / insufficient","disrupted / modified / artifical","surprising / altered / unexpected","younger / older / newer / obsolete","sick / hazardous / poison / toxic","prepared / armed / expected","unprepared / unarmed / unexpected","delayed / timed / wait"];

// Roll from the data and return the result.  The final empty string allows
// formatting to be removed by the caller.
return expFormat([ "Twist:\n", aPick(target), " - ", aPick(circumstance), "" ]);

```
__
tbl twist - Rolls a plot twist from random tables.  <a href='https://jvhouse.xyz/plot-twist-situations'>Source</a>.
