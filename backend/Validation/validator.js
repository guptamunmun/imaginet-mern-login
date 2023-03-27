

const isValidEmail = function (value) {
    let emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;
    if (emailRegex.test(value)) return true;
  };
  const isValidName = function (name) {
    let names = /^[-a-zA-Z_:,.' ']{1,100}$/;
    if (names.test(name)) return true;
  };
  const isValidMobileNum = function (value) {
    if (!(/^[6-9]\d{9}$/.test(value))) {
        return false
    }
    return true
}
const idCharacterValid = function (value) {
    return mongoose.Types.ObjectId.isValid(value);
  };


module.exports ={isValidEmail , isValidMobileNum,isValidName,idCharacterValid}


