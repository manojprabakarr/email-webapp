const Mail = require("../models/mail");
const User = require("../models/user");

exports.getMails = async (req, res, next) => {
  try {
    const mails = await Mail.find({ receiver: req.user._id })
      .select(["sender", "subject", "createdAt"])
      .populate("sender", "username")
      .exec();
    res.status(200).json({
      success: true,
      mails
    });
  } catch (error) {
    error.statusCode = 500;
    next(error);
  }
};

exports.getMail = async (req, res, next) => {
  const mailId = req.params.mailId;
  try {
    const mail = await Mail.findById(mailId)
      .populate("sender", "username")
      .exec();
    if (!mail) {
      const error = new Error("Mail not found");
      error.statusCode = 404;
      return next(error);
    }
    // Check if logged in user is the receiver of the mail
    const isReceiverBool = mail.isReceiver(req.user._id);
    if (!isReceiverBool) {
      const error = new Error("Access Denied");
      error.statusCode = 403;
      return next(error);
    }
    res.json({ success: true, mail });
  } catch (err) {
    err.statusCode = 500;
    next(err);
  }
};

exports.postMail = async (req, res, next) => {
  const receiver = req.body.receiver;
  const sender = req.body.sender;
  try {
    // Find if account present in 'to' field exists.
    const receiverUser = await User.findOne({ username: receiver });
    if (!receiverUser) {
      const err = new Error(
        "User account presented in 'receiver' field doesnt exist"
      );
      err.statusCode = 404;
      return next(err);
    }
    // Find if account present in 'from' field exists
    const senderUser = await User.findOne({ username: sender });
    if (!senderUser) {
      const err = new Error(
        "User account presented in 'sender' field doesnt exist"
      );
      err.statusCode = 404;
      return next(err);
    }
    // Creating mail object
    const mailObj = {
      subject: req.body.subject,
      body: req.body.body,
      receiver: receiverUser._id,
      sender: senderUser._id
    };
    const mail = new Mail(mailObj);
    await mail.save();
    res.status(201).json({
      success: true
    });
  } catch (err) {
    err.statusCode = err.statusCode || 500;
    next(err);
  }
};

exports.deleteMail = async (req, res, next) => {
  try {
    const mail = await Mail.findById(req.params.mailId);
    if (!mail) {
      const error = new Error("Mail not found");
      error.statusCode = 404;
      return next(error);
    }
    // Check if logged in user is the receiver of the mail
    const isReceiverBool = mail.isReceiver(req.user._id);
    if (!isReceiverBool) {
      const error = new Error("Access Denied");
      error.statusCode = 403;
      return next(error);
    }
    await Mail.findByIdAndDelete(req.params.mailId);
    res.json({ success: true });
  } catch (error) {
    error.statusCode = error.statusCode || 500;
    next(error);
  }
};
