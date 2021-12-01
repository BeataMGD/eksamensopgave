const fs = require("fs");

const ABSOLUTE_PATH = __dirname + "/";
const USER_FILE = "./database.json";

class DB {
  constructor() {
    this.users = this.openFile(USER_FILE);
  }

  // Save file
  saveFile(fileName, contentString) {
    fs.writeFileSync(ABSOLUTE_PATH + fileName, contentString);
  }

  // Open file
  openFile(fileName) {
    const file = fs.readFileSync(ABSOLUTE_PATH + fileName);
    return JSON.parse(file);
  }

  // LOGIN DB
  saveUser(user) {
    this.users.push(user);
    this.saveFile(USER_FILE, JSON.stringify(this.users));
  }

  deleteUser(user) {
    this.users = this.users.filter((x) => x.email != user.email);
    this.saveFile(USER_FILE, JSON.stringify(this.users));
  }

  findUser(user) {
    return this.users.find((x) => user.email == x.email)
  }

  /*// POST DB
  savePost(user) {
    this.users.push(user);
    this.saveFile(USER_FILE, JSON.stringify(this.users));
  }

  findPost(user) {
    return this.users.find((x) => user.image == x.image);
  }*/
}



// Det her er en singleton -- laaangt over pensum, men et ret fedt term at fyre af
module.exports = new DB();
