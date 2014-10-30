var assert = chai.assert,
    expect = chai.expect,
    should = chai.should(); // Note that should has to be executed


codePrint.init();

describe('CodePrint', function() {


    // describe('init', function() {
    //     it('should work with assert', function() {
    //         assert.equal(foobar.sayHello(), 'Hello World!');
    //     });

    //     it('should work with expect', function() {
    //         expect(foobar.sayHello()).to.equal('funky chicken!');
    //     });

    //     it('should work with should', function() {
    //         foobar.sayHello().should.equal('funky chicken!');
    //     });
    // });

    describe('getSourceCode', function() {

        it('should return correct source code', function() {
            var $elem = $('<h2>Hello</h2>');
            expect(codePrint.getSourceCode($elem, false)).to.equal('<h2>Hello</h2>')
        });

        it('should remove leading and trailing whitespace from grouped', function() {
            var $elem = $('#wrapping-test');
            expect(codePrint.getSourceCode($elem, true)).to.equal('<h3>Whitespace</h3>')
        });

    });

});
