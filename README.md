# Connect4
Play a classic game of Connect4




  
##  TODO: 
### Current: 
- Refactor code, clean up state objects and tighten logic. 
- Specifically, update board array. make a 2d array (maybe of objects?)
	- information in each object: 
		- coordinates (x, y)
		- space color
		- Winning token? (highlighting all tokens in winning set)


### Features: 
-  Play over internet. 

### Look and feel:
	
- Board:	
	- make/find a .svg of the board with empty holes for the game.
- Tokens: 	
	- make tokens drop in to place behind the board
	- make tokens into svgs of the tokes, render based on who's turn it is. 
	- make winning tokens shine. 
- Interface:
	- Add Start Game button with blurred layers beneath
	- Add menu:
		- Reset Game
		- Toggle for "Keep Score"
		- Clear Score (localStorage clear())

