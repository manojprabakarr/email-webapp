
const User = require("../models/user");
const bcrypt = require("bcryptjs");

const jwt=require('jsonwebtoken')



//register
exports.Usercontrollers= async(req, res) => {
    

    const { username, phno, password } = req.body;
   
  
    try {
      let user = await User.findOne({ phno });
      if (user) return res.status(400).json({ msg: "phno already exists" });

      user = new User({
        username,
        phno,
        password,
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      let data= await user.save();
     
      res.status(200).json({msg:"signup success"})
      
    } catch (err) {
     
      res.status(500).json({ msg: "Internal Server Error" });
    }
  }

//login
exports.postLogin=async(req,res)=> {
  try {
    let user = await User.findOne({ phno});

    if (!user) return res.status(400).json({ msg: "Invalid Credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials" });


    const token = jwt.sign(
      {
        _id: user._id
      },
      process.env.GEN_TOKEN,
      {
        expiresIn: '7d'
      }
    );
    const { _id,phno } = user;

    return res.json({msg:"successs",
      token,
      user: {
        _id,
       phno
      }
    });
  
    

  } catch (err) {
   
    res.status(500).json({ msg: "Internal Server Error" });
  }
}