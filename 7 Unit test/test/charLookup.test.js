let {assert} = require("chai");
let {lookupChar} = require("../3. Char Lookup");

describe("test for type of inputs", ()=>{
    it("positive test", ()=>{
        assert.equal(lookupChar("one", 1), 'n', "return value must be a n");
        assert.equal(lookupChar("one", 2), 'e', "return value must be a e");
        assert.equal(lookupChar("tree", 3), 'e', "return value must be a e");
        assert.equal(lookupChar("tree", 0), 't', "return value must be a t");
    })

    it("wrong index test", ()=>{
        assert.equal(lookupChar("one", -1), "Incorrect index", "return Incorrect index");
        assert.equal(lookupChar("one", 3), "Incorrect index", "return Incorrect index");
        assert.equal(lookupChar("tree", 20), "Incorrect index", "return Incorrect index");
        assert.equal(lookupChar("water", 7), "Incorrect index", "return Incorrect index");
    })

    it("wrong type of input parameters test", ()=>{
        assert.equal(lookupChar("one", {}), undefined, "return undefined");
        assert.equal(lookupChar("one", "3"), undefined, "return undefined");
        assert.equal(lookupChar("tree", "two"), undefined, "return undefined");

        assert.equal(lookupChar([1, 5, 3], 2), undefined, "return undefined");
        assert.equal(lookupChar({number: 1, length: 5}, 2), undefined, "return undefined");
        assert.equal(lookupChar("tree", 2.5), undefined, "return undefined");

        assert.equal(lookupChar(23, "two"), undefined, "return undefined");
        assert.equal(lookupChar([23, 32], ["three"]), undefined, "return undefined");
        assert.equal(lookupChar({count: 12}, false), undefined, "return undefined");

        assert.equal(lookupChar([], {}), undefined, "return undefined");
        assert.equal(lookupChar(1, "2"), undefined, "return undefined");
        assert.equal(lookupChar(true, false), undefined, "return undefined");
        assert.equal(lookupChar(1, 1), undefined, "return undefined");
        assert.equal(lookupChar([], []), undefined, "return undefined");
    })
})
