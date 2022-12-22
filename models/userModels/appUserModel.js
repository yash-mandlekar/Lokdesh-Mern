const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const appUserModel = mongoose.Schema({
  name: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    default: "",
  },

  dateOfBirth: {
    type: Date,
    default: Date.now,
  },
  phone: {
    type: String,
    unique: true,
    minlength: [10, "Phone number must be at least 10 characters long."],
  },
  gender: {
    type: String,
    default: "Male",
  },
  businessAcc: {
    type: String,
    default: "no",
  },
  profileImage: {
    type: String,
    default: "/images/avtar.jpg",
  },
  isBlocked: {
    type: Boolean,
    default: false,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  publicPro: {
    type: Boolean,
    default: false,
  },
  language:{  
    type: String,
    default: "hi",
  },
  interest: [
    {
      type: String,
      default: "",
    },
  ],
  savedNews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "News",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },

  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AppUser",
    },
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AppUser",
    },
  ],
  followrequest: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AppUser",
    },
  ],
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
  ],

  resetPasswordToken: String,
  resetPasswordExpire: Date,
  refreshToken: String,
});
// appUserModel.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();

//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });

// appUserModel.methods.comparePassword = async function (candidatePassword) {
//   return await bcrypt.compare(candidatePassword, this.password);
// };

appUserModel.methods.generateToken = function () {
  const access_token = jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    // expiresIn: Math.floor(Date.now() / 1000) + (60 * 60),
  });

  const refresh_token = jwt.sign({ id: this._id }, process.env.REFRESH_SECRET, {
    // expiresIn: "24h",
  });
  this.refreshToken = refresh_token;

  return access_token;
};

// appUserModel.methods.createPasswordToken = function () {
//   const resetToken = crypto.randomBytes(20).toString("hex");

//   this.resetPasswordToken = crypto
//     .createHash("sha256")
//     .update(resetToken)
//     .digest("hex");

//   this.resetPasswordExpire = Date.now() * 86400000;

//   return resetToken;
// };

module.exports = mongoose.model("AppUser", appUserModel);
