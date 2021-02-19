import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@exmaple.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "John@exmaple.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jane Doe",
    email: "Jane@exmaple.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
