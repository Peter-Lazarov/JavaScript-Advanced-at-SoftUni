let {assert} = require("chai");
let {expect} = require("chai");
let {mathEnforcer} = require('../4. Math Enforcer');

describe("addFive", ()=>{
    describe("incorrect value", ()=>{
        it("test with string", ()=>{
            assert.equal(mathEnforcer.addFive("pesho"), undefined, "return value must be a undefine");
        });
        it("test with Object", ()=>{
            assert.ok(!mathEnforcer.addFive({name: "pesho"}), undefined, "return value must be a undefine");
        });
        it("test with Array", ()=>{
            assert.notOk(mathEnforcer.addFive(["1", "2"]), undefined, "return value must be a undefine");
        });
    })
    describe("correct value", ()=>{
        it("with negative value", ()=>{
            assert.equal(mathEnforcer.addFive(-55), -50, "return value must be a 50");
            assert.equal(mathEnforcer.addFive(-3), 2, "return value must be a 2");
            assert.equal(mathEnforcer.addFive(-5), 0, "return value must be a 0");
            assert.equal(mathEnforcer.addFive(5.1), 10.1, "return value must be a 10.1");
            expect(mathEnforcer.addFive(-5.00)).to.be.closeTo(0.00, 0.01);
            expect(mathEnforcer.addFive(-10.02)).to.be.closeTo(-5.02, 0.01);
        })
        it("with positive value", ()=>{
            assert.equal(mathEnforcer.addFive(-5), 0, "return value must be a 0");
            assert.equal(mathEnforcer.addFive(0), 5, "return value must be a 5");
            assert.equal(mathEnforcer.addFive(15), 20, "return value must be a 20");
            expect(mathEnforcer.addFive(10.01)).to.be.closeTo(15.01, 0.01);
        })
    })
})
describe("substractTen", ()=>{
    describe("incorrect value", ()=>{
        it("test with string", ()=>{
            assert.equal(mathEnforcer.subtractTen("pesho"), undefined, "return value must be a undefine");
        });
        it("test with Object", ()=>{
            assert.equal(mathEnforcer.subtractTen({}), undefined, "return value must be a undefine");
        });
        it("test with Array", ()=>{
            assert.equal(mathEnforcer.subtractTen([]), undefined, "return value must be a undefine");
        });
    })
    describe("correct value", ()=>{
        it("with positive value", ()=>{
            assert.equal(mathEnforcer.subtractTen(20), 10, "10");
            assert.equal(mathEnforcer.subtractTen(10), 0, "0");
            assert.equal(mathEnforcer.subtractTen(9.5), -0.5, "0");

            expect(mathEnforcer.subtractTen(10.00)).to.be.closeTo(0.00, 0.01);
            expect(mathEnforcer.subtractTen(15.01)).to.be.closeTo(5.01, 0.01);
            expect(mathEnforcer.subtractTen(-0.02)).to.be.closeTo(-10.02, 0.01);
        })
        it("with negative value", ()=>{
            assert.equal(mathEnforcer.subtractTen(5), -5, "-5");
            assert.equal(mathEnforcer.subtractTen(-5), -15, "-15");
            assert.equal(mathEnforcer.subtractTen(0), -10, "-10");
            assert.equal(mathEnforcer.subtractTen(-9.5), -19.5, "19.5");
            assert.equal(mathEnforcer.subtractTen(10.5), 0.5, "0.5");
        })
    })
})
describe("sum", ()=>{
    describe("incorrect value", ()=>{
        it("test with string", ()=>{
            assert.equal(mathEnforcer.sum("pesho", 10), undefined, "return value must be a undefine");
            assert.equal(mathEnforcer.sum(10, "pesho"), undefined, "return value must be a undefine");
            assert.equal(mathEnforcer.sum("pesho", "petia"), undefined, "return value must be a undefine");
        });
        it("test with Object", ()=>{
            assert.equal(mathEnforcer.sum({name: "pesho"}, 10), undefined, "return value must be a undefine");
            assert.equal(mathEnforcer.sum(10, {name: "pesho"}), undefined, "return value must be a undefine");
            assert.equal(mathEnforcer.sum({name: "pesho"}, {name: "petia"}), undefined, "return value must be a undefine");
        });
        it("test with Array", ()=>{
            assert.equal(mathEnforcer.sum(["1", "2"], 10), undefined, "return value must be a undefine");
            assert.equal(mathEnforcer.sum(10, ["1", "2"]), undefined, "return value must be a undefine");
            assert.equal(mathEnforcer.sum(["1", "2"], ["1", "2"]), undefined, "return value must be a undefine");
        });
    })

    describe("correct value", ()=>{
        it("with negative value", ()=>{
            assert.equal(mathEnforcer.sum(-10, -10), -20, "-20");
            assert.equal(mathEnforcer.sum(0, -5), -5, "-5");
            assert.equal(mathEnforcer.sum(10, -20), -10, "-10");
            
        })
        it("with positive value", ()=>{
            assert.equal(mathEnforcer.sum(11, 1), 12, "12");
            assert.equal(mathEnforcer.sum(10.5, 10.5), 21, "21");
            assert.equal(mathEnforcer.sum(10.5, 0), 10.5, "21");
            assert.equal(mathEnforcer.sum(0, 10.5), 10.5, "21");
            
            assert.equal(mathEnforcer.sum(-10.5, 11.5), 1, "1");
            assert.equal(mathEnforcer.sum(-10, 15), 5, "5");
            
            assert.equal(mathEnforcer.sum(-10, 10), 0, "0");
            assert.equal(mathEnforcer.sum(0, 0), 0, "0");
            assert.equal(mathEnforcer.sum(-10.5, 10.5), 0, "0");
            assert.equal(mathEnforcer.sum(10.5, -10.5), 0, "0");

            expect(mathEnforcer.sum(1.1, 1.2)).to.be.closeTo(2.3, 0.01);
            expect(mathEnforcer.sum(-1.1, 0)).to.be.closeTo(-1.1, 0.01);
            expect(mathEnforcer.sum(-1.1, 1.1)).to.be.closeTo(0, 0.01);
        })
    })
})
