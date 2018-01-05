all: 
	make vs_setup_win
	make vs_setup_mac

vs_setup_win:
	./node_modules/.bin/babel-node ./visual_studio_setup/index.win.js && open ./visual_studio_setup/vs_setup_win.pdf

vs_setup_mac:
	./node_modules/.bin/babel-node ./visual_studio_setup/index.mac.js && open ./visual_studio_setup/vs_setup_mac.pdf

clean:
	rm **/*.pdf