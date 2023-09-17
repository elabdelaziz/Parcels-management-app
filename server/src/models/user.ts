import bcrypt from "bcrypt";
import config from "../config";
import { getUser } from "../utils/_DATA";

class UserStore {
  async auth(username: string, password: string) {
    try {
      const user = getUser(username);
      if (!user) {
        throw new Error("user not found");
      }
      const hashedPassword = user.password;
      // compare user password
      const isValid = bcrypt.compareSync(
        `${password}${config.pepper}`,
        hashedPassword
      );

      if (isValid) {
        return user;
      }
    } catch (err) {
      throw new Error(
        `There's a problem logging in: ${(err as Error).message}`
      );
    }
  }
}
export default UserStore;
