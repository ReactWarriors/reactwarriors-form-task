
 export const validator = (page,values) => {
  const errors = {};
  if (page === 1) {
    if (values.firstname !== null && values.firstname.length < 5) {
      errors.firstname = "Firstname is too short";
    }

    if (values.lastname !== null && values.lastname.length < 2) {
      errors.lastname = "Lastname is too short";
    }

    if (values.password !== null && values.password.length < 2) {
      errors.password = "Password is too short";
    }

    if (
      values.repeatPassword !== null &&
      values.repeatPassword !== values.password
    ) {
      errors.repeatPassword = "Passwords must be the same";
    }
  }

  if (page === 2) {
    if (values.email !== null && !values.email.includes("@")) {
      errors.email = "Incorrect email";
    }

    if (values.mobile !== null && values.mobile.length < 2) {
      errors.mobile = "Incorrect mobile";
    }
    if (values.country === "Choose country" || values.country == null ) {
      errors.country = "You must choose a country";
    }
    if (values.city === "Choose city" || values.city == null ) {
      errors.city = "You must choose a city";
    }
  }
  if (page === 3) {
    if (!values.avatar) {
      errors.avatar = "You must upload avatar";
    }
  }
  return errors;

}
