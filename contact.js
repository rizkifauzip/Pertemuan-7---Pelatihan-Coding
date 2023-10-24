const fs = require("fs");
const validator = require("validator");

// Membuat folder "data" jika belum ada
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// Membuat file "contacts.json" jika belum ada
const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

//saveData
const simpanData = (nama, mobile, email) => {
    const contact = { nama, mobile, email }; 

  // validasi cek email
  if (email) {
    if (!validator.isEmail(email)) {
      console.log("Email is invalid. Please input again!");
      return false;
    }
  }

  // validasi cek no telp
  if (mobile) {
    if (!validator.isMobilePhone(mobile, "id-ID")) {
      console.log("Phone number is invalid. Please input again!");
      return false;
    }
  }

  const file = fs.readFileSync(dataPath, "utf8"); 
  const contacts = JSON.parse(file); 
  contacts.push(contact); 
  fs.writeFileSync(dataPath, JSON.stringify(contacts)); 
  console.log("Terima kasih sudah memasukkan data!"); 
};
module.exports = { simpanData }; 