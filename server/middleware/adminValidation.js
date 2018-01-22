const adminValidation = (req, res, next) => {
  if (req.decoded.isadmin === false || req.decoded.userrole === 'user') {
    return res.status(401).json({
      data: {
        status: 'Fail',
        message: 'User unauthorized'
      }
    });
  }
  next();
};
export default adminValidation;
