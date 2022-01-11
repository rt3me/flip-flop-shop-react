export const register = async (req, res) => {
  try {
    // validation
    console.log(req.body);
    const { name, password } = req.body;
  } catch (err) {
    console.log(err);
  }
};
