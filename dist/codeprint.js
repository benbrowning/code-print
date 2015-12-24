/*
 --------------------------------------------------------------------
 Code Print
 --------------------------------------------------------------------
 */

// Use a UMD pattern that allows codePrint to work in AMD, CommonJS and normal
// browser environments
// (based on: https://github.com/umdjs/umd/blob/master/templates/returnExportsGlobal.js)

(function (root, factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], function (jquery) {
            return (root.codePrint = factory(jquery));
        });
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory(require('jQuery'));
    } else {
        // Browser globals
        root.codePrint = factory(root.jQuery);
    }
}(this, function ($) {

    'use strict';

    var defaults = {
        wrappingDivClass: 'sg-block'
    };

    // TODO - implement templating for output
    // http://ejohn.org/blog/javascript-micro-templating/

    function init(options) {
        var settings = $.extend(defaults, options);
        $('[data-codeprint]').each(handleSingle);
        $('[data-codeprint-group]').each(handleGrouped);
        if (settings.onComplete) {
            settings.onComplete();
        }
    }

    function handleSingle(index, elem) {
        var $component = $(elem),
            componentHTML = getSourceCode($component, false);

        createSourceBlock($component, componentHTML);
    }

    function handleGrouped(index, elem) {
        var $componentWrapper = $(elem),
            componentHTML = getSourceCode($componentWrapper, true);

        createSourceBlock($componentWrapper, componentHTML);
    }

    function createSourceBlock($component, componentHTML) {
        // Create wrapping div
        $component.wrap('<div class="sg-block"></div>');
        // insert the generated code block panel after the component
        $component.after(getCodeBlockPanel(componentHTML));
    }

    function getCodeBlockPanel(componentHTML) {
        var $codeEl = $('<code class="language-markup"></code>');

        $codeEl.text(componentHTML);
        return $('<pre class="code"></pre>').append($codeEl);
    }

    function getSourceCode($elem, isGrouped) {
        // Don't want to include the data attribute in the source code
        var $cleanComponent = $elem.removeAttr('data-codeprint'),
            html = isGrouped ? $cleanComponent[0].innerHTML : $cleanComponent[0].outerHTML;

        html = trimWhitespace(html);

        // Return html having stripped out any leading whitespace
        return html;
    }

    function trimWhitespace(string) {
        var regexTrailingLeading = /^\s+|\s+$/g;

        return string.replace(regexTrailingLeading, '');
    }

    return {
        init: init,
        getSourceCode: getSourceCode,
        trimWhitespace: trimWhitespace,
        getCodeBlockPanel: getCodeBlockPanel
    };
}));

