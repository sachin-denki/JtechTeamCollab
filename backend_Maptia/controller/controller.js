let signup = async (req, res, next) => {
  return manager
    .signup(req)
    .then((data) => {
      let result = {
        status: 200,
        data: data,
        token: data.token,
      };
      return res.json(result);
    })
    .catch(next);
};

let login = async (req, res, next) => {
  return manager
    .login(req.body)
    .then((data) => {
      let result = {
        status: 200,
        data:data
      };
      return res.json(result);
    })
    .catch(next);
};
