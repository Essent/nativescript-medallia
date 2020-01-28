var Medallia = require("nativescript-medallia").Medallia;
var medallia = new Medallia();

describe("greet function", function() {
    it("exists", function() {
        expect(medallia.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(medallia.greet()).toEqual("Hello, NS");
    });
});