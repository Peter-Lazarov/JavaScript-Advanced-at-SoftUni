const {describe} = require("mocha");
let {PaymentPackage} = require("../8 12. Payment Package");
let {assert} = require("chai");

describe("create instance", ()=>{
    let paymentPackage;

    beforeEach(() =>{
        paymentPackage = new PaymentPackage("Todor", 10)
    });

    it("name should be correct", ()=> {
        assert.equal(paymentPackage.name, "Todor", "name has correct set to Todor");
    })
    it("value should be correct", ()=> {
        assert.equal(paymentPackage.value, 10, "value has correct set to 10");
    })
    it("VAT should be correct", ()=> {
        assert.equal(paymentPackage.VAT, 20, "VAT has correct set to 20");
    })
    it("active should be correct", ()=> {
        assert.ok(paymentPackage.active, true, "active has correct set to true");
    })
});

describe("test Accessor", ()=> {
    let paymentPackage;

    beforeEach(() => {
        paymentPackage = new PaymentPackage("Pesho", 30);
    })

    it("instance correct get and set name", ()=> {
        assert.equal(paymentPackage.name, "Pesho");

        paymentPackage.name = "Todor";
        assert.equal(paymentPackage.name, "Todor");
    })

    it("instance correct get and set value", ()=> {
        assert.equal(paymentPackage.value, 30);
        paymentPackage.value = 40;
        assert.equal(paymentPackage.value, 40);
        paymentPackage.value = 0;
        assert.equal(paymentPackage.value, 0);
    })

    it("instance correct get and set vat", ()=>{
        assert.equal(paymentPackage.VAT, 20);
        paymentPackage.VAT = 10;
        assert.equal(paymentPackage.VAT, 10);
        paymentPackage.VAT = 0;
        assert.equal(paymentPackage.VAT, 0);
    })

    it("instance correct get and set active", ()=>{
        assert.equal(paymentPackage.active, true);
        paymentPackage.active = false;
        assert.equal(paymentPackage.active, false);
    })
})

describe("test set incorrect value", () =>{
    let paymentPackage;
    
    beforeEach(() => {
        paymentPackage = new PaymentPackage("Todor", 10);
    })

    it("empty name", () => {
        assert.throws(() => new PaymentPackage("", 10));
        assert.throws(() => new PaymentPackage(10, 10));
    })

    it("wrong value", () => {
        assert.throws(() => new PaymentPackage("Todor", "10"));
        assert.throws(() => new PaymentPackage("Todor", -10));
    })

    it("wrong VAT", ()=> {
        assert.throws(() => paymentPackage.VAT = "Gosho")
        assert.throws(() => paymentPackage.VAT = -10)
    })
    
    it("wrong active", ()=> {
        assert.throws(() => paymentPackage.active = "Gosho")
        assert.throws(() => paymentPackage.active = -10)
    })
})

describe("toString test", () => {
    let paymentPackage;

    beforeEach(() => {
        paymentPackage = new PaymentPackage("Pesho", 30);
    })

    it("test active", ()=> {
        let result = "Package: Pesho\n- Value (excl. VAT): 30\n- Value (VAT 20%): 36"
        assert.equal(paymentPackage.toString(), result);
    })

    it("test inactive", ()=> {
        paymentPackage.active = false;
        let result = "Package: Pesho (inactive)\n- Value (excl. VAT): 30\n- Value (VAT 20%): 36"
        assert.equal(paymentPackage.toString(), result);
    })
})
