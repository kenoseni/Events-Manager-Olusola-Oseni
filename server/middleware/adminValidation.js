const adminValidation = (req, res, next) => {
  if (req.decoded.isadmin === false) {
    return res.status(401).json({
      status: 'Fail',
      message: 'User unauthorized'
    });
  }
  next();
};
export default adminValidation;
