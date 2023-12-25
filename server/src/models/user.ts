import bcrypt from "bcrypt";
import config from "../config";
import { getUser, getUserData } from "../utils/_DATA";

class UserStore {
  async getUserData(id: string) {
    try {
      const userData = getUserData(id);
      if (!userData) {
        throw new Error("user not found");
      }
      return userData;
    } catch (err) {
      throw new Error(
        `There's a problem retrieving userData: ${(err as Error).message}`
      );
    }
  }

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
        const { password, ...userData } = user;
        return userData;
      }
    } catch (err) {
      throw new Error(
        `There's a problem logging in: ${(err as Error).message}`
      );
    }
  }
}
export default UserStore;
