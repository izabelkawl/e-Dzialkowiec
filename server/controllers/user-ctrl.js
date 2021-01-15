import User from "../models/user.js";
import { hashPassword, comparePassword } from "../utils/security.js";
import { generateToken } from "../utils/security.js";
import { DatabaseInsertError } from "../errors/database.js";

// Load input validation
import validateRegisterInput from "../validation/register.js";
import validateLoginInput from "../validation/login.js";
import validateUpdateUser from "../validation/updateUser.js";
import isEmpty from "is-empty";

//same

// @route POST api/users/register
// @desc Register user
// @access Public
const createUser = async (req, res) => {
  const userData = req.body;
  const { errors, isValid } = validateRegisterInput(userData);
  const isEmailUsed = await User.findOne({ email: userData.email });

  if (!isValid) return res.status(400).json(errors);
  if (!!isEmailUsed)
    return res.status(400).json({ email: "*Adres email jest już zajęty." });

  userData.password = await hashPassword(userData.password);

  const processedUser = new User(userData);

  try {
    processedUser.save();
  } catch (error) {
    throw new DatabaseInsertError(error.message);
  }
};

//Login
// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
const loginUser = async (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  const email = req.body.email;
  const password = req.body.password;

  if (!isValid) return res.status(400).json(errors);

  const processedUser = await User.findOne({ email });

  if (!processedUser)
    return res
      .status(400)
      .json({ emailnotfound: "*Nieprawidłowy adres email." });

  const isPasswordValid = await comparePassword(
    password,
    processedUser.password
  );

  if (!isPasswordValid)
    return res
      .status(400)
      .json({ passwordincorrect: "*Nieprawidłowe hasło" });

  else {
    const payload = {
      id: processedUser.id,
      email: processedUser.email,
      firstname: processedUser.firstname,
      lastname: processedUser.lastname,
      address: processedUser.address,
      phone: processedUser.phone,
    };

    return res
      .status(200)
      .json({ success: true, token: `Bearer ${generateToken(payload)}` });
  }
};

const updateUser = async (req, res) => {

  const fieldsToUpdate = { ...req.body };
  const password = req.body.password;
  const processedUser = await User.findOne({ _id: req.params.id });
  const isPasswordValid = await comparePassword(
    password,
    processedUser.password
  );

  if (!isPasswordValid)
    return res
      .status(400)
      .json({ passwordincorrect: "*Nieprawidłowe hasło" });

  const isPasswordPassed =
    !!fieldsToUpdate?.password1?.length && fieldsToUpdate?.password2?.length;
  const { errors, isValid } = validateUpdateUser(fieldsToUpdate);

  if (isEmpty(fieldsToUpdate))
    return res.status(400).json({
      success: false,
      message: "*Wypełnij puste komórki.",
    });

  if (!isValid) return res.status(400).json(errors);

  if (!processedUser)
    return res.status(404).json({
      err,
      message: "*Użytkownik nieistnieje.",
    });

  if (isPasswordPassed)
    fieldsToUpdate.password1 = await hashPassword1(fieldsToUpdate.password1);
  else {
    fieldsToUpdate.password1 = processedUser.password2;
    delete fieldsToUpdate.password2;
  }

  for (const field in fieldsToUpdate)
    processedUser[field] = fieldsToUpdate[field];

  try {
    await processedUser.save();
  } catch (error) {
    console.log(error);

    return res.status(400).json({
      success: false,
      id: processedUser._id,
      message: "*Aktualizacja nie powiodła się!",
    });
  }

  return res.status(200).json({
    success: true,
    id: processedUser._id,
    message: "*Aktualizacja powiodła się!",
  });
};


const updatePassword = async (req, res) => {

  const fieldsToUpdate = { ...req.body };
  const password = req.body.password;
  const processedUser = await User.findOne({ _id: req.params.id });
  const isPasswordValid = await comparePassword(
    password,
    processedUser.password
  );

  if (!isPasswordValid)
    return res
      .status(400)
      .json({ passwordincorrect: "*Nieprawidłowe hasło" });

  const isPasswordPassed =
    !!fieldsToUpdate?.password1?.length && fieldsToUpdate?.password2?.length;
  const { errors, isValid } = validateUpdateUser(fieldsToUpdate);

  if (isPasswordPassed)
    fieldsToUpdate.password1 = await hashPassword1(fieldsToUpdate.password1);
  else {
    fieldsToUpdate.password1 = processedUser.password2;
    delete fieldsToUpdate.password2;
  }

  for (const field in fieldsToUpdate)
    processedUser[field] = fieldsToUpdate[field];

  try {
    await processedUser.save();
  } catch (error) {
    console.log(error);

    return res.status(400).json({
      success: false,
      id: processedUser._id,
      message: "*Aktualizacja nie powiodła się!",
    });
  }

  return res.status(200).json({
    success: true,
    id: processedUser._id,
    message: "*Aktualizacja powiodła się!",
  });
};


const deleteUser = async (req, res) => {
  await User.findOneAndDelete({ _id: req.params.id }, (err, user) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!user) {
      return res.status(404).json({ success: false, error: `user not found` });
    }

    return res.status(200).json({ success: true, data: user });
  }).catch((err) => console.log(err));
};

const getUserById = async (req, res) => {
  await User.findOne({ _id: req.params.id }, (err, user) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!user) {
      return res.status(404).json({ success: false, error: `user not found` });
    }
    return res.status(200).json({ success: true, data: user });
  }).catch((err) => console.log(err));
};

const getUsers = async (req, res) => {
  await User.find({}, (err, users) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!users.length) {
      return res.status(404).json({ success: false, error: `user not found` });
    }
    return res.status(200).json({ success: true, data: users });
  }).catch((err) => console.log(err));
};

export default {
  updatePassword ,
  createUser,
  loginUser,
  updateUser,
  deleteUser,
  getUsers,
  getUserById,
};
