
// User er til, at oprette en bruger og læse informationer om oprettet bruger
// Class bruges for at definere informationer om den pågældende bruger
// Informationerne er defineret ved at give constructor relevante parametre
// Constructor giver 

class User {

    constructor(name, email, password, address, zipcode, city, country, phonenumber, birthdate) {
      this.name = name;
      this.email = email;
      this.password = password;
      this.country = country;
      this.city = city;
      this.address = address;
      this.zipcode = zipcode;
      this.phonenumber = phonenumber;
      this.birthdate = birthdate;
    }
}

module.exports = User;
  