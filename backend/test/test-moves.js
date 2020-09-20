const expect = require("chai").expect;
const chaiHttp = require("chai-http");
const chai = require("chai");

chai.use(chaiHttp);

describe("Moves", () => {
    describe("POST /", () => {
        it("should return array of moves with added move", (done) => {
            const moves = ["X", null, null, null, null, null, null, null, null];
            chai.request("http://localhost:5000/api")
                .post("/")
                .send(moves)
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res.body).to.equal(moves);
                });
            done();
        });
        it("should return winner and array of moves", (done) => {
            const moves = [null, null, "X", null, "X", null, "X", "O", "O"];
            chai.request("http://localhost:5000/api")
                .post("/")
                .send(moves)
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res.body).to.equal({
                        winner: "X",
                        moves,
                    });
                });
            done();
        });

        it("should return tie and array of moves", (done) => {
            const moves = ["O", "X", "X", "X", "X", "O", "O", "O", "X"];
            chai.request("http://localhost:500/api")
                .post("/")
                .send(moves)
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res.body).to.equal({
                        winner: "tie",
                        moves: ["O", "X", "X", "X", "X", "O", "O", "O", "X"],
                    });
                });
            done();
        });
    });
});
