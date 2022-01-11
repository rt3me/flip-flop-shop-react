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
  } catch (err) {
    console.log(err);
  }
};
