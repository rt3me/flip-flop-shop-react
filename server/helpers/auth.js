import bcrypt from "bcrypt";

export const hashPassword = () => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(16, (err, salt) => {
      if (err) {
        reject(err);
      }
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          reject(err);
        }
        resolve(hash);
      });
    });
  });
};
