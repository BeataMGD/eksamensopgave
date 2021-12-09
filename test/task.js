const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");

const app = require("../server");

chai.use(chaiHttp);


describe('LOG IND', () => {

    // Tester log ind med POST metode

    describe("POST /user/login", () => {
        it("Log ind fungerer", (done) => {
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

    describe
});


