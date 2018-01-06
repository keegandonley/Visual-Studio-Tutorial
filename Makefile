all:
	make vs_setup
	make vs_compile

# Visual Studio Setup Tutorial
vs_setup_win:
	./node_modules/.bin/babel-node ./visual_studio_setup/index.win.js && [[ $$FILE_OPEN == 1 ]] && open ./visual_studio_setup/vs_setup_win.pdf || echo "not opening file..."

vs_setup_mac:
	./node_modules/.bin/babel-node ./visual_studio_setup/index.mac.js && [[ $$FILE_OPEN == 1 ]] && open ./visual_studio_setup/vs_setup_mac.pdf || echo "not opening file..."

vs_setup:
	make vs_setup_win
	make vs_setup_mac

# Visual Studio Compiling Tutorial

vs_compile_win:
	./node_modules/.bin/babel-node ./visual_studio_compile/index.win.js && [[ $$FILE_OPEN == 1 ]] &&  open ./visual_studio_compile/vs_compile_win.pdf || echo "not opening file..."

vs_compile:
	make vs_compile_win

# Specific Course Setup

CS10:
	make clean
	make vs_setup_win
	make vs_compile_win
	make package

package:
	find . -iname '*.pdf' -print0 | COPYFILE_DISABLE=1 xargs -0 tar -cf docs.tar
	
clean:
	rm **/*.pdf
	rm docs.tar