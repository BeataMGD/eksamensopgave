const fs = require("fs");  // fs (file systems), arbejder lokalt på disken

const ABSOLUTE_PATH = __dirname + "/";
const USER_FILE = "../../storage/userDatabase.json"; // Henviser til .json fil med data om bruger

class UsersFile {
  constructor() {
    this.users = this.openFile(USER_FILE);
  }

  // Gem fil
  saveFile(fileName, contentString) {
    fs.writeFileSync(ABSOLUTE_PATH + fileName, contentString);
  }

  // Åben fil
  openFile(fileName) {
    const file = fs.readFileSync(ABSOLUTE_PATH + fileName);
    return JSON.parse(file); // JSON parse læser json og konverterer til js objekt
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

}



// Det her er en singleton -- laaangt over pensum, men et ret fedt term at fyre af
module.exports = new UsersFile();
