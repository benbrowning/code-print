/* global codePrint */

var assert = chai.assert,
    expect = chai.expect,
    should = chai.should(); // Note that should has to be executed

describe('CodePrint', function() {
    'use strict';

    describe('getSourceCode', function() {

        it('should return correct source code', function() {
            var $elem = $('<h2>Hello</h2>');
            expect(codePrint.getSourceCode($elem, false)).to.equal('<h2>Hello</h2>')
        });

        it('should remove leading and trailing whitespace from grouped', function() {
            var $elem = $('<div id="wrapping-test"><h3>Whitespace</h3></div>');
            expect(codePrint.getSourceCode($elem, true)).to.equal('<h3>Whitespace</h3>')
        });

    });

    describe('trimWhitespace', function() {

        it('should trim leading whitespace', function() {
            expect(codePrint.trimWhitespace(' \t\t  Foo')).to.equal('Foo');
        });

        it('should trim trailing whitespace', function() {
            expect(codePrint.trimWhitespace('Bar   \n')).to.equal('Bar');
        });

        it('should trim leading and trailing whitespace', function() {
            expect(codePrint.trimWhitespace('     Foobar   \n')).to.equal('Foobar');
        });

    });

    describe('getCodeBlockPanel', function() {

        it('should return the correct html structure', function(){
            var $html = codePrint.getCodeBlockPanel('<h3>Lorem</h3>');

            expect($html.find('code.language-markup').length).to.equal(1);
            $html.find('code').text().should.equal('<h3>Lorem</h3>');
        });
    });

    describe('callback function', function() {

        it('should execute a callback function on init', function(){
            var foo = 'bar';
            var options = {
                onComplete: function() {
                    foo = 'test';
                }
            };
            codePrint.init(options);
            expect(foo).to.equal('test');

        });
    });

});
