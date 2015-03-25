# codeprint

<!-- [![Build Status](https://secure.travis-ci.org/benbrowning/codeprint.png?branch=master)](http://travis-ci.org/benbrowning/codeprint) -->

Auto-generate markup examples for your styleguide.

If you like to handcraft your styleguides, but don't like to handcraft the code examples then this script is for you.

Similar to the excellent <a href="https://github.com/filamentgroup/X-rayHTML">xrayhtml</a>, though codeprint requires you to write your own css styles.

## Installation

Download the <a href="https://raw.githubusercontent.com/benbrowning/code-print/master/dist/codeprint.min.js" target="_blank">minified script</a>



## Dependencies

Requires jQuery to be included on the page.

## Usage

Include the script on your page, along with jquery.

	<script src="jquery.min.js"></script>
	<script src="codeprint.min.js"></script>

Then, on DOM ready, you need to init codeprint with some options (both of which are optional): 

    codePrint.init({
        wrappingDivClass: 'sg-block',    // css class added to the rendered pre block
        onComplete: function() {
            // callback function in case you want to do anything else after the code 
            // snippets have been rendered (e.g. trigger some syntax highlighting).
        }
    });

Now if you want to provide a markup example for a single component, just add <kbd>data-codeprint</kbd> to that component. (Don't worry, codeprint will strip out this attribute when creating the code sample.)

If you would like to group the markup of a few components, then wrap the components in a div with a <kbd>data-codeprint-group</kbd>:

    <div data-codeprint-group>
        ...
    </div>

(Likewise, codeprint will strip out this wrapping div when creating the code sample.)

### Syntax highlighting

If you want to use something like prism for syntax highlighting, then you can get this going via the onComplete callback function that can be specified as part of the options.
	
    codePrint.init({
        wrappingDivClass: 'sg-block',    // css class added to the rendered pre block
        onComplete: function() {
            Prism.highlightAll();
        }
    });

## Roadmap

- Improve the docs.
- Remove dependancy on jquery.
- Add templating to give more control on what markup codeprint will generate.



## Development

To run the tests:
	
	npm test
	
To run the tests everytime you change a js file:

	npm watch	
	
To build the minified version:
	
	npm run build	


## License

MIT
