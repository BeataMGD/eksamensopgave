class User {
    constructor(email, password) {
      this.email = email;
      this.password = password;
    }
  }
module.exports = User;
  


// Class ? -> kig i kilder og skift til samme struktur som fra ØV
// ^ omdan !!


class userName {
  constructor () {
    this.ledger = {};
  }
  addToLedger(name) {
    this.ledger[name] = 1
    return name + "added to ledger"
  }
  checkledger(name) {
    return (name in this.ledger)
  }
}
nameSystem = new Name ();