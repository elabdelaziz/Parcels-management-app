import bcrypt from "bcrypt";
import config from "../config";
import { getParcels, getPendingParcels, getUser } from "../utils/_DATA";

class UserStore {
  async getPendingParcels() {
    try {
      const parcels = getPendingParcels();
      if (!parcels) {
        throw new Error("user not found");
      }
      return parcels;
    } catch (err) {
      throw new Error(
        `There's a problem retrieving parcels: ${(err as Error).message}`
      );
    }
  }
  async getParcels(username: string) {
    try {
      const parcels = getParcels(username);
      if (!parcels) {
        throw new Error("user not found");
      }
      return parcels;
    } catch (err) {
      throw new Error(
        `There's a problem retrieving parcels: ${(err as Error).message}`
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
