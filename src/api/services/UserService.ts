import { BadRequestError, InternalServerError, NotFoundError, UnprocessableEntity } from "../../utils/CustomError";
import TokenGenerate from "../../utils/TokenGenerate";
import ILoginDto from "../interfaces/ILogin";
import { IUser, IUserDto } from "../interfaces/IUser";
import User from "../models/UserModel";
import bcrypt from 'bcrypt'


class UserService {

  constructor() { }

  public async create(user: IUserDto): Promise<IUser | null> {
    const { name, email, password: pass } = user;
    const haveRegisteredEmail = await User.findOne({ where: { email } });
    if (haveRegisteredEmail) {
      throw new UnprocessableEntity('Email already registered');
    }
    const saltRounds: number = 10;
    const password: string = await bcrypt.hash(pass, saltRounds);
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
      throw new NotFoundError('Email not registered');
    }

    if (!(await bcrypt.compare(password, haveRegisteredEmail.password))) {
      throw new BadRequestError("Incorrect email or password");
    }

    const { id, name } = haveRegisteredEmail;
    const token = await new TokenGenerate().generate({ name, email })
    return { id, name, email, token } as IUser;
  }

  public async getAll(): Promise<User[] | null> {
    const allUsers = await User.findAll({ attributes: { exclude: ['createdAt', 'updatedAt', 'password'] } });
    if (!allUsers) {
      throw new InternalServerError("Something unexpected happened, please try again later");
    }
    return allUsers;
  }

  public async getById(id: number): Promise<User | null> {
    const user = await User.findByPk(id, { attributes: { exclude: ['createdAt', 'updatedAt', 'password'] } });

    if (!user) {
      throw new NotFoundError("User not found");
    }

    return user;
  }

  public async delete(id: number): Promise<void> {
    const user = await User.findByPk(id);

    if (!user) {
      throw new NotFoundError("User not found");
    }
    await user.destroy()
  }

  public async update(id: number, user: IUserDto): Promise<User | null> {
    const foundUser = await User.findByPk(id);
    if (!foundUser) {
      throw new NotFoundError("User not found");
    }

    if (user.password !== undefined) {
      const saltRounds: number = 10;
      const password: string = await bcrypt.hash(user.password, saltRounds);
      user.password = password;
    }
    foundUser.update({ ...user });
    foundUser.save();

    const foundUserUpdated = await User.findByPk(
      id,
      { attributes: { exclude: ['password'] } }
    );
    
    if (!foundUserUpdated) {
      throw new BadRequestError("All fields must be filled in correctly");
    }

    return foundUserUpdated;
  }
}

export default UserService;
