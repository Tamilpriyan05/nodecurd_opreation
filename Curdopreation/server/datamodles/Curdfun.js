const UserData = require("../userSchemamodel/UserSchema");

const getUsers = async (req, res) => {
  try {
    const userobj = await UserData.find();
    res.send(userobj);
  } catch (err) {
    console.log(err.message);
  }
};

const postUser = (req, res) => {
  const { firstname, lastname } = req.body;
  UserData.create({ firstname, lastname })
    .then((data) => {
      console.log("created succefully");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log("does not uploaded");
      res.status(500).send({ error: err, msg: "somenthing error" });
    });
};

const UpdateUser = (req, res) => {
  const { id } = req.params;
  const { firstname, lastname } = req.body;
  UserData.findByIdAndUpdate(id, { firstname, lastname })
    .then(() => {
      res.send("updated sucessfully");
    })
    .catch((err) => {
      console.log("does not uploaded");
      res.status(404).send({ error: err, msg: "somenthing error" });
    });
};

const delteUser = (req, res) => {
  const { id } = req.params;

  UserData.findByIdAndDelete(id)
    .then(() => {
      res.send("delte sucessfully");
    })
    .catch((err) => {
      console.log("does not uploaded");
      res.status(404).send({ error: err, msg: "somenthing error" });
    });
};

module.exports = {
  getUsers,
  postUser,
  UpdateUser,
  delteUser,
};
