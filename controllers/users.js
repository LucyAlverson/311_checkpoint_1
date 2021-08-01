// listUsers

exports.getSub = (req, res, next) => {
    req.params.id = req.users.id;
  };

// Should retrieve the entire array from data/index
// showUser

exports.getSub = (req, res, next) => {
    req.params.index = req.users.index;
  };

// Should retrieve just the user that matches the passed-in id
// createUser

// Should add a user to the array
// updateUser

// Should update one user in the array based on its id
// deleteUser

// Should delete one user from the array based on its id