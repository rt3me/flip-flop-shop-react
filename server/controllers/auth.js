export const register = async (req, res) => {
  try {
    // validation
    console.log(req.body);
    const { name, password } = req.body;
    if (!name) {
      return res.json({
        error: "Name is required",
      });
    }
    if (!password || password.length < 8) {
      return res.json({
        error: "Password is required and should be at least 8 characters",
      });
    }
    res.json({
      data: "/register endpoint",
    });
  } catch (err) {
    console.log(err);
  }
};
