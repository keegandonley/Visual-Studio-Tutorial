all: 
	make vs_setup_win
	make vs_setup_mac

vs_setup_win:
	./node_modules/.bin/babel-node ./visual_studio_setup/index.win.js && open ./visual_studio_setup/vs_setup_win.pdf

vs_setup_mac:
	./node_modules/.bin/babel-node ./visual_studio_setup/index.mac.js && open ./visual_studio_setup/vs_setup_mac.pdf

package:
	find . -iname '*.pdf' -print0 | COPYFILE_DISABLE=1 xargs -0 tar -cf docs.tar
	
clean:
	rm **/*.pdf
	rm docs.tar