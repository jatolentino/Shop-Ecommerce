module.exports.validateRegisterInput = (
  name,
  username,
  email,
  phone,
  password
) => {
  const errors = {};

  if (name.trim() === "") {
    errors.name = "Name must not be empty";
  }
  if (username.trim() === "") {
    errors.username = "Username must not be empty";
  }
  if (email.trim() === "") {
    errors.email = "Email must not be empty";
  } else {
    const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if (!email.match(regEx)) {
      errors.email = "Email must be a valid email";
    }
  }
  if (phone.trim() === "") {
    errors.phone = "Phone must not be empty";
  }

  if (password === "") {
    errors.password = "Password must not be empty";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

module.exports.validateLoginInput = (email, password) => {
  const errors = {};

  if (email.trim() === "") {
    errors.email = "Email must not be empty";
  }
  if (password.trim() === "") {
    errors.password = "Password must not be empty";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

module.exports.validateOrder = (firstName, lastName, email, phone, country, address, city, postCode) => {
  const errors = {};

  //console.log(firstName)

  if (firstName.trim() === "") {
    errors.firstName = "Firstname must not be empty";
  }
  if (lastName.trim() === "") {
    errors.lastName = "Lastname must not be empty";
  }
  if (email.trim() === "") {
    errors.email = "Email must not be empty";
  } else {
    const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if (!email.match(regEx)) {
      errors.email = "Email must be a valid email";
    }
  }
  if (phone.trim() === "") {
    errors.phone = "Phone must not be empty";
  }
  if (country.trim() === "") {
    errors.country = "Country must not be empty";
  }
  if (address.trim() === "") {
    errors.address = "Address must not be empty";
  }
  if (city.trim() === "") {
    errors.city = "City must not be empty";
  }
  if (postCode.trim() === "") {
    errors.postCode = "Post Code must not be empty";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
}