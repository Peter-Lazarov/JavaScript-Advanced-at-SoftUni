let {assert} = require("chai");
let {isOddOrEven} = require('../2. Even Or Odd');

describe("test with incorrect parameter", ()=>{
    it("test with object", ()=>{
        assert.equal(isOddOrEven({property: "Pesho"}, undefined, "return value must be a undefine"));
    })

    it("test with array", ()=>{
        assert.equal(isOddOrEven(["Pesho"], undefined, "return value must be a undefine"));
    })

    it("test with number", ()=>{
        assert.equal(isOddOrEven(10, undefined, "return value must be a undefine"));
    })
})

describe("test with correct data", ()=>{
    it("test with even word", ()=>{
        assert.equal(isOddOrEven("toto"), "even", "return value to equal even");
        assert.equal(isOddOrEven("2222"), "even", "return value to equal even");
        assert.equal(isOddOrEven("[]"), "even", "return value to equal even");
    })
    it("test with odd word", ()=>{
        assert.equal(isOddOrEven("tot"), "odd", "return value to equal odd");
        assert.equal(isOddOrEven("222"), "odd", "return value to equal odd");
        assert.equal(isOddOrEven("[{]"), "odd", "return value to equal odd");
    })
})
