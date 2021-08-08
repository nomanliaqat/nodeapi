const express = require("express");
const jwt = require("jsonwebtoken");
const auth = require("./middleware/auth");
const app = express();
const port = 3000;

app.post("/login", (req, res) => {
  try {
    //  getting data from body
    // const { email, password } = req.body;
    const user = {
      email: "test@email.com",
      password: "1234",
    };
    // // Validate user input
    // if (!(email && password)) {
    //   res.status(400).send("All input's is required");
    // }
    // Validate if user exist in our database
    // const user = await User.findOne({ email });

    jwt.sign({ user }, "secretKey", { expiresIn: "24h" }, (err, jwt) => {
      res.status(200).json({ jwt });
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

app.post("/register", async (req, res) => {
  // not connected database therefore i commented below code please check my logic building
  // try{
  // const { first_name, last_name, email, password } = req.body;
  // if (!(email && password && first_name && last_name)) {
  //   res.status(400).send("All input is required");
  // }
  // // check if user already exist
  // const existUser = await User.findOne({ email });
  // if (existUser) {
  //   return res.status(409).send("User Already Exist.");
  // }
  // //if password decrypted password send at front-end side then encrypt password
  // const encryptedPass = await bcrypt.hash(password, 10);
  // // add new user
  // const user = await User.create({
  //   first_name,
  //   last_name,
  //   email: email,
  //   password: encryptedPass,
  // });
  // res.json({ user });
  // } catch(err){
  //   res.status(400).send(err);
  // }
});

app.get("/user", auth, (req, res) => {
  res.status(200).json({
    user: req.data.user,
  });
});

// create new task
app.post("/create-task", auth, async (req, res) => {
  const task = { id: 1, name: "Task name" };
  res.json({ task });
  // not connected database therefore I commented the below code please check my logic building
  // try {
  //   const { name } = req.body;
  //   if (!name) {
  //     res.status(400).send("name is required");
  //   }
  //   const task = await Taks.create({
  //     name,
  //   });
  //   res.status(200).json({
  //     task,
  //   });
  // } catch (err) {
  //   res.status(400).send(err);
  // }
});

app.get("/list-tasks", auth, async (req, res) => {
  const tasks = [{ id: 1, name: "Task name" }];
  res.json({ tasks });
  // try {
  //   const tasks = await Task.find();
  //   res.status(200).json({
  //     tasks,
  //   });
  // } catch (err) {
  //   res.status(400).send(err);
  // }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
