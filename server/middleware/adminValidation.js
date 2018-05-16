const adminValidation = (req, res, next) => {
  if (req.decoded.isadmin === false || req.decoded.userrole === 'user') {
    return res.status(401).json({
      status: 'Error',
      message: 'User unauthorized'
    });
  }
  next();
};
export default adminValidation;
