all: 
	make vs_win

vs_win:
	./node_modules/.bin/babel-node ./visual_studio_setup/index.js && open ./visual_studio_setup/vs_win.pdf

clean:
	rm **/*.pdf