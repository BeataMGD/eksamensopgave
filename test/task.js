const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server");

//Assertion Style

chai.use(chaiHttp);

describe('LOG IND', () => {

    // Tester log ind med POST metode

    describe("POST /user/login", () => {
        it("It should return an array", (done) => {
            chai
            .request(app)
            .post("/user/login")
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res.status).to.equal(200);
                expect(res.body).to.be.an('array');
                done();
            });
        });
    });
});
