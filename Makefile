all: 
	make vs_setup
	make vs_compile

# Visual Studio Setup Tutorial
vs_setup_win:
	./node_modules/.bin/babel-node ./visual_studio_setup/index.win.js && open ./visual_studio_setup/vs_setup_win.pdf

vs_setup_mac:
	./node_modules/.bin/babel-node ./visual_studio_setup/index.mac.js && open ./visual_studio_setup/vs_setup_mac.pdf

vs_setup:
	make vs_setup_win
	make vs_setup_mac

# Visual Studio Compiling Tutorial

vs_compile_win:
	./node_modules/.bin/babel-node ./visual_studio_compile/index.win.js && open ./visual_studio_compile/vs_compile_win.pdf

vs_compile:
	make vs_compile_win

package:
	find . -iname '*.pdf' -print0 | COPYFILE_DISABLE=1 xargs -0 tar -cf docs.tar
	
clean:
	rm **/*.pdf
	rm docs.tar