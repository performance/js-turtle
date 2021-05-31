#Project Information
##History
This project was forked from bjpop/js-కుంచిక. This project had the basic కుంచిక
functions, **animate** function, the immediate execution of the **command**
line, and the editable **definitions** area. This was a substantial portion of
this project, and overall had brilliant ideas.

##File Structure
This project consists of several files which are used for a single HTML page.

- **కుంచిక.html** is the basic HTML page. It includes the platform layout and the content of the language reference.
- **కుంచిక.css** controls the formatting and styling of the page.
- **కుంచిక.js** contains the Javascript code for the Logo Turtle Javascript
  functions. This code could be included in other projects that want కుంచిక
graphics without the console functions.
- **కుంచికConsole.js** contains the Javascript code for the platform controls
  (e.g., language reference
clickons, **Command** box, **RESET** button, **RUN DEMO** button, **STOP** button)
- **examples** is a directory the contains example code in both a native form
  (e.g., example.js) and in a string assignment (e.g., example.str.js) form
where the native form is passed as a Javascript string variable to be included
in the platform.
- **examples.js** is the file containing the processed example code for
  inclusion in the console. It is built with the **make** command (see below).
- **Makefile** used for maintaining the example Javascript code files for
  inclusion into the platform page (see below).
- **jsTojsString** is an executable shell script for converting a Javascript
  example programs into a Javascript string which can be loaded into the
**Example** box (see below).
- **README.md** is the general read me documentation file for this project and includes a basic user manual.
- **INFORMATION.md** is this documentation file.

##Example Code Processing
JavaScript does not have functions that allow it to read files on the computer
where it is being executed. This protects the user from mischievous code, but
makes it somewhat difficult to load files dynamically. Toward this end, the
JavaScript examples are converted to strings that can be loaded as text into
the **Example** box. This processing does two things. First it makes the lines
of the program into a JavaScript string and assigns that string to a JavaScript
variable. It appends a backslash '/' character to the end of each line which
tells JavaScript that the line is continued on the next line. The second thing
it does is to inject a '\n' at the end of each line so that when JavaScript
loads the string into the **Example** box, it know where the original lines
ended.

This processing is done with a Linux shell program. This was developed on a
Macintosh and should work on Linux machines. A **Makefile** is used to keep
track of when a particular example program file needs to be updated. This
allows the updating to be performed with a simple **make** command.

New example files require:
- inclusion within the **Makefile** so that they are updated with the **make** command.
- inclusion of the Javascript string files (e.g., &lt;script
  src=example.str.js>&lt;/script>) within the **కుంచిక.html** so that the
strings are accessible to Javascript.
- inclusion of the &lt;option> in the **Examples** select within **కుంచికConsole.js** file.
##Initial Enhancements

The following are the initial enhancements to the forked project:

* re-formatted the language reference to use and unordered list and paragraph tags.
* dropped jQuery thinking that it really wasn't needed and wanted the code to be "easier" to read in the sence that one would have to know less to read it. With the number of onclick events, this is now somewhat questionable.
* made the **language reference**examples be "clickable", so that they load the **command** line
and are executed when clicked.
* added synonyms for commands (e.g., colour=color, fd=forward).
* added **xనియోగించు()** to **yనియోగించు()** functions to change only the x or y coodinate.
* changed **రంగు_మార్చు()** to use 16 *standard* logo colors (integer) as well as strings for
all of the Javascript color variations.
* added buttons and samples of the 16 logo *standard* colors to the reference.
* changed **వ్రాయి()** function to apply text along direction of కుంచిక.
* added **కుడివైపు_చాపాము()** and **ఎడమవైపు_చాపాము()** functions to draw arcs with the కుంచిక.
* changed **circle** function to draw circles or arcs centered on the కుంచిక.
* added **నిండు_వృత్తము()** function to draw filled circles centered on the కుంచిక.
* changed **యాదృచఛిక_సంఖ్య()** function to allow use with only a high value.
* added **Stop** button for animations.
* added **విలంబించు()** function as an alternative for animations.
* added **Run Demo** button for example code in the **definitions** box.
* added select element for selecting and loading Javascript examples.
* developed the shell tools to convert Javascript examples into strings that can be
dynamically loaded into the **definitions** box.
* changed various examples to make them work with the above language changes.


##Things To Do
- [x] develop a test example that tests the various features of the extensions.
- [x] clean up the triggers for the <code> tags
- [X] handle errors better. Logo used a red background and white text at bottom of canvas for
its errors. This implements red text on a white background
- [X] make the design responsive to work on smaller screens.
- [X] added a drawer handle to the **language reference** to allow it to be closed and give
more room to the canvas.
- [x] allow the examples select and **definitions** box to be hidden to give more room to the canvas.
- [x] make the command box execute on a second ENTER without other changes (onkeypress?)
- [X] విలంబించు() needs to have a way to turn off the **Stop** button. Perhaps it could include this in
the delayed function mechanism.
- [ ] add a page of example outputs
     - [ ] make each output the same size
     - [ ] make each example fill the canvas
     - [ ] create a make file to process the .png's (especially creating .gif's)
     - [ ] example page should be auto generated and fully responsive
- [ ] link the examples to the IDE with the example loaded
- [ ] add more examples:

     - [x] fix arc and cirle test to test 360 degree arcs from various angles and rotations
     - [x] fix arc and cirle test to be proportional for the turbine
     - [x] Koch snowflake
     - [x] వృత్తము eye
     - [x] dividing a circle
     - [x] random stick men
     - [x] jumping jack
     - [ ] walking stick man
     - [x] hexagon tesselation
     - [x] simple traffic light simulator
     - [x] integrate intersection simulator
     - [x] more fractal examples
	- [x] Sierpinski triangle
	- [x] dragon curve
	- [x] Hilbert curve
	- [x] Gosper curve
	- [x] Conway pinwheel
     - [ ] asymmetric tree
     - [ ] more tessellation examples
	   - [x] pentagons 
	   - [ ] herring bone
	   - [ ] squares
	   - [ ] shifted squares
	   - [ ] two square sizes
	   - [ ] triangles
	   - [ ] shifted trangles
	   - [x] two triangle size
 - [x] Conway Pinwheel
 - [x] star evolution
	 - [x] basic 5-pointed star
	 - [x] open up points
	 - [x] move star (dx, dy)
	 - [x] grow star (dSize)
	 - [x] spin star (dAngle)
	 - [x] move and grow and spin star
	 - [x] acceleration
	 - [x] array of stars
- [ ] star burst... just lines that emanate from the center
- [ ] interconnected points moving at different velocities
- [x] digital clock with 7-segment display
	 - [x] function to draw segmented display from segment map
	 - [x] function to convert digit to segment map
- [x] digital clock with binary number display
	 - [x] function to draw binary number with dots
	 - [ ] Do year (hundreds), month, day, hour, minute, sec, 1/100 sec
	 - [ ] Add field labels
- [ ] re-label current binary clock as a BCD clock and maybe add year month day + field labels
- [x] compass rose
- [x] వృత్తము limit compass rose
- [ ] want to add something to make the project more interactive
	 - [ ] buttons
	 - [ ] values
	 - [ ] slider values
- [X] development tools to automatically add examples to the code by placing a '.js' file in 
'examples' directory with the Linux 'make' command. This is partially done, but needs improvements.
It would be better to combine all of the outputs into a single .js file. Perhaps that file could
also configure the examples select.
- [x] develop lessons to lead a student throught some basic programming concepts. [This may be a
separate selector from the example selector].
 - [x] moving the కుంచిక and executing a command
 - [x] drawing a square
 - [x] using iteration to draw a square
 - [x] using a function to draw many squares
 - [x] using recursion to do something repeatedly (Koch snowflake)
 - [x] animating a function

 - [ ] make the definitions pane stand out more by moving the examples select to the bottom of that pane
 - [ ] make it more obvious that the definitions pane can be modified
 - [ ] A better way to control positioning of the three panels, like some sort of sliding division
 - [ ] Get more error messages to show up, especially when pressing "RUN"
 - [ ] Fix the Run button, so that it executes the command line also.
 - [ ] A way to fill a closed polygon
	 - [ ] this may be a mode that turns off the incremental drawing: fillStart, fillEnd
	 - [ ] such a feature may be great for drawing the fractals also
 - [ ]Better integration of an instructional pane
	 - [ ] It should have a lesson: some instruction and some things to do
	 - [ ] It should have a ghost outline of something to draw
	 - [ ] It should make sure that the student has accomplised the task.
	 - [ ] This really duplicates what is done on the Kahn code academy... is this what you want to do??
 - [ ] should have load and save capability to encourage program development
 - [ ] maybe record things clicked on the language reference to build programs more easily
 - [ ] do you need lint? would that be easy to add?
 - [ ] do you need syntax highlighting? or at least discuss it.
 - [ ] include the intersection simulator as an example of using the కుంచిక.js as a library on a standalone page.
 - [ ] figure out how to load examples on the fly.
 - [ ] figure out a way to display examples hierarchically
 - [ ] bring in bitsbox style commands (more like javascript)
 - [ ] display the cursor x, y coordinates somewhere


#Bugs
* make the run button better
	- [ ] if demo() is undefined, just say "Run"
	* [ ] make enter work all of the time on the command line
	* [ ] demo() needs to be cleared when changing examples (e.g., flag to clock, binary)
	* [ ] demo() may be should be called automatically when the example is loaded
* [ ] add a visible version number to this thing somewhere
* [ ] need some protection from infinite loops (hard to do without injecting code somewhere)mo
* [ ] arc and curve test is missing third example
	* Should add example for rounded rectangles
* [ ] hexagon tessellation is not working
* [ ] వృత్తము eye could be bigger, maybe different colors for each inscribed circle
* [ ] color changing dots is not working, should start with a చెరిపి_వేయి
* [ ] dividing a వృత్తము is not working *****Fixed without identifying problem*****
* [ ] Add tag //*sourceURL=foo.js to bottom of all examples for debugging purposes (or just add ~=definitions.js via the exec command?) <--alternate is better because it works for user entered code
* optionally 
* [ ] కుడివైపు_చాపాము and ఎడమవైపు_చాపాము are not working from all start angles
*  [ ] run demo is rough
	-    should be consistent about errors
	-    need to catch errors in repeat and delay and STOP!
*  [ ] names in reference aren't proper camel case
*  [ ] కుంచిక context not saved and restored properly
    color, కోణము, position, width is not restored
*  [ ] error handling is inconsistant
*  [ ] examples should be consistant
	-    [ ] include demo()
	-    [ ] include ఆది_స్థితి()
*  [ ] add example checker
	-    [ ] no single quote
	-    [ ] Name Capitalized
	-    [ ] demo function
	-    [ ] reset function? ok for those that build like graphitti
*  [ ] can a pause button be implemented? -- just an asyncronous event
*  [ ] resume uses the play/run button. If pause in progress, resume, else play from start

*  [ ] ఆది_స్థితి() sets stokeStyle to "నలుపు". is that complete?
   [ ] see also other references...

* [ ] decahedron graph does not auto start while animation in progress
* [ ] need to reset
* [ ] n drop first examples
* [ ] hirshhorn name not loading.
* [ ] niefah mizen6 has missing figure
* [ ] niefah mizen has black edge inconsistantly showing
* [ ] squiggle needs a reset
* [ ] miura should be scaled a bit ... 1-2 inches, at least 5x5
* [ ] rotate mountain tesselation 90°
* [ ] pentahex needs to be scaled
* [ ] rhombic star should hide కుంచిక
* [ ] rice pentellation needs more fill

*tutorial got really short. should at least have progression on the square. 
tutorial has bugs


*fix icons to make more consistant
*credit icons
<div>Icons made by <a href="https://www.flaticon.com/authors/robin-kylander" title="Robin Kylander">Robin Kylander</a> from <a href="https://www.flaticon.com/" ⇥·······⇥·······⇥·······    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" ⇥⇥·······⇥·······    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>





#Proposed Turtle Graphics Lesson Outline

- Environment
	- The panes
	- The buttons
	- Help
- First steps, basic drawing
    - Forward
    - Backward
    - Right
    - Left
    - వ్రాయి(Hello World)
- Repeat loop
    - Drawing a square
    - Repeat
	- While
	- for
- then add size
- Pen control
    - Pen up
    - Pen down
    - Color
    - Pen size/width
- Function
    - Random
	- variables… show polygon functions. first #sides - Stamping
    - స్థానము_మార్చు(x,y)
    - Set heading/కోణము
    - xనియోగించు
    - yనియోగించు
- Variables
- Parameters
- Arcs and curves
    - ఎడమవైపు_చాపాము
    - కుడివైపు_చాపాము
    - Circle
    - Dot
- Conditionals
- Recursion
    - Koch snowflake
    - Sierpinski triangle
- Animation
    - Animate
    - Delay
