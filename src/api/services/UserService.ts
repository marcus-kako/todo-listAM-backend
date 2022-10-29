import User from "../models/UserModel";

class UserService {

  constructor() {}

  public async create(user: any): Promise<User | null> {
    const createdUser = await User.create(user);
    return createdUser.toJSON();
  }

  public async getAll(): Promise<User[] | null> {
    const allUsers = await User.findAll();
    return allUsers;
  }

  public async getById(id: number): Promise<User | null> {
    const user = await User.findByPk(id);
    return user;
  }

  public async delete(id: number): Promise<void> {
    const user = await User.findByPk(id);
    await user?.destroy()
  }

  public async update(id: number, user: User): Promise<User | null> {
    const foundUser = await User.findByPk(id);
    foundUser?.update({...user});
    foundUser?.save()
    const foundUserUpdated = await User.findByPk(id);
    return foundUserUpdated;
  }
}

export default UserService;
