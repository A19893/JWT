var chai=require('chai');
var assert=chai.assert;
var should=chai.should();
var expect=chai.expect;
// Using Assert

describe('Assert Check',function(){
    let username="Yash"
    it("check it's a string",function(){
        assert.typeOf(username,'string');
    })

    it('equal match',function(){
        assert.equal(username,"Yash");
    })
})

//Using Should

describe("should check",function(){
    let username="Yash"
    it("check it's a string",function(){
        username.should.be.a('string');
    })
})

//Using Expect
describe("should check",function(){
    let username="Yash"
    it("check it's a string",function(){
        expect(username).to.be.a('string');
    })
})

describe("should check",function(){
    let username="Yash"
    it("equal test case",function(){
        expect(username).to.be.equal('Yash');
    })
})
