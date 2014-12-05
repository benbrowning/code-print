# codeprint

<!-- [![Build Status](https://secure.travis-ci.org/benbrowning/codeprint.png?branch=master)](http://travis-ci.org/benbrowning/codeprint) -->

Auto-generate markup examples for your styleguide.

If you like to handcraft your styleguides, but don't like to handcraft the code examples then this script is for you.

Similar to the excellent <a href="https://github.com/filamentgroup/X-rayHTML">xrayhtml</a>, except codeprint allows grouping of 

## Installation

```
$ npm install --save-dev codeprint
```

## Usage

Include the script on your page, along with jquery.

Now if you want to provide a markup example for a single component, just add <kbd>data-codeprint</kbd> to the top level element. Codeprint will strip out this attribute when creating the code sample.

If you would like to group the markup of a few components, then wrap the components in a div with a <kbd>data-codeprint-group</kbd>:

    <div data-codeprint-group>
        ...
    </div>

Codeprint will strip out this wrapping div when creating the code sample.



## Roadmap

- Add templating to give more control on what markup codeprint will generate.



## License

MIT
