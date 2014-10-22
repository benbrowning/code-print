/* global Prism */
var codePrint;

codePrint = (function ($) {
    'use strict';

    var defaults = {
        usePrism: 'false',
        wrappingDivClass: 'sg-block'
    };

    // TODO - implement templating for output
    // http://ejohn.org/blog/javascript-micro-templating/

    function init(options) {
        var settings = $.extend(defaults, options);
        $('[data-codeprint]').each(handleSingle);
        $('[data-codeprint-group]').each(handleGrouped);
        if (settings.usePrism) {
            Prism.highlightAll();
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
        var $sourcePanel,
            $codeEl;

        // Create wrapping div
        $component.wrap('<div class="sg-block"></div>');

        $codeEl = $('<code class="language-markup"></code>');
        $codeEl.text(componentHTML);
        $sourcePanel = $('<pre class="code"></pre>').append($codeEl);
        $component.after($sourcePanel);
    }

    function getSourceCode($elem, isGrouped) {
        // Don't want to include the data attribute in the sorce code
        var $cleanComponent = $elem.removeAttr('data-codeprint'),
            html = isGrouped ? $cleanComponent[0].innerHTML : $cleanComponent[0].outerHTML,
            regex = /^\s/g;
        // Return html having stripped out any leading whitespace
        return html.replace(regex, '');
    }

    return {
        init:init
    };

}(jQuery));
