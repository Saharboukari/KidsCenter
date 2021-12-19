const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
// FullName:"",
// title:"",
// description:"",
// email:"",
// adresse:"",
// city :"",
// phone:"",
// user_img:"",
// experience:""  
const userSchema = mongoose.Schema({
          category: { type: String },
          fullname: { type: String },
          username: { type: String },
          email   : { type: String },
          password: { type: String },
          address : { type: String },
          city    : { type: String },
          specialty: { type: String, default : "" },
          title: { type: String, default : "" },
          description: { type: String, default : "" },
          experience : { type: String, default : "" },
          phone   : { type: String, default : "" },
          connect : { type: Boolean, default: false },
          user_img: { type: String, default: "https://www.bootdey.com/img/Content/avatar/avatar7.png" },
     },{ timestamps: true });

userSchema.statics.login = async function (username, plainTextPassword) {
     const foundUser = await this.findOne({ username });
     if (foundUser) {
          const success = await bcrypt.compare(
               plainTextPassword,
               foundUser.password
          );
          if (success) return foundUser;
          else throw Error("Incorrect username/password");
     }
     else throw Error("Username not exist");
};

userSchema.pre("save", async function (next) {
     this.password = await bcrypt.hash(this.password, 12);
     next();
});

module.exports = mongoose.model("User", userSchema);
