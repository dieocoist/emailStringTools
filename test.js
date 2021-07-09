var mainf = mainf || require('./emailStringTools.js');
var chai = chai || require ('chai');
var expect = chai.expect;

describe('test email mask',function(){
	var results = mainf.maskEmails('mrizzetti0@domainmarket.com');
	it ('should have *',function (){
		expect(results).to.equal('mr******i0@do***********com');
	});
});

describe('.test email validate',function(){
	var results = mainf.validateEmail('rizzetti0@domainmarket.com');
	it ('should be true if its an email',function (){
		expect(results).to.equal(true);
	});
});
