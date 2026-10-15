import express from "express";
const app = express();

const PORT = process.env.PORT || 5000;

const users = [
  { id: 1, name: "Rabby", email: "rabby@gmail.com" },
  { id: 2, name: "Sakib", email: "sakib@gmail.com" },
  { id: 3, name: "Rahim", email: "rahim@gmail.com" },
  { id: 4, name: "Karim", email: "karim@gmail.com" },
  { id: 5, name: "Nabil", email: "nabil@gmail.com" },
  { id: 6, name: "Hasan", email: "hasan@gmail.com" },
  { id: 7, name: "Tanvir", email: "tanvir@gmail.com" },
  { id: 8, name: "Fahim", email: "fahim@gmail.com" },
  { id: 9, name: "Arif", email: "arif@gmail.com" },
  { id: 10, name: "Siam", email: "siam@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("Users are Comming Soon...");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(PORT, () => {
  console.log(`Port is running on ${PORT}`);
});
