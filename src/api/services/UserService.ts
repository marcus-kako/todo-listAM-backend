import { TokenGenerate } from "../../utils/TokenGenerate";
import ILoginDto from "../interfaces/ILogin";
import { IUser, IUserDto } from "../interfaces/IUser";
import User from "../models/UserModel";

class UserService {

  constructor() { }

  public async create(user: IUserDto): Promise<IUser | null> {
    const { name, email, password } = user;
    const { id } = await User.create({ name, email, password });

    const tokenGenerate = new TokenGenerate();
    const token = await tokenGenerate.generate({ name, email });
    return { id, name, email, token } as IUser;
  }

  public async login(login: ILoginDto): Promise<IUser | null> {
    const { email, password } = login;
    const haveRegisteredEmail = await User
      .findOne({
        where: { email },
        attributes: { include: ['id', 'name', 'email'] }
      });
    if (!haveRegisteredEmail) {
      throw new Error("Email não cadastrado");
    }
    if (password !== haveRegisteredEmail.password) {
      throw new Error("Email ou senha incorreta");
    }

    const { id, name } = haveRegisteredEmail;
    const token = await new TokenGenerate().generate({ name, email })
    return { id, name, email, token } as IUser;
  }

  public async getAll(): Promise<User[] | null> {
    const allUsers = await User.findAll({ attributes: { exclude: ['createdAt', 'updatedAt', 'password'] } });
    return allUsers;
  }

  public async getById(id: number): Promise<User | null> {
    const user = await User.findByPk(id, { attributes: { exclude: ['createdAt', 'updatedAt', 'password'] } });
    return user;
  }

  public async delete(id: number): Promise<void> {
    const user = await User.findByPk(id);
    await user?.destroy()
  }

  public async update(id: number, user: IUserDto): Promise<User | null> {
    const foundUser = await User.findByPk(id);
    foundUser?.update({ ...user });
    foundUser?.save()
    const foundUserUpdated = await User.findByPk(
      id,
      { attributes: { exclude: ['createdAt', 'updatedAt', 'password'] } }
    );
    return foundUserUpdated;
  }
}

export default UserService;
