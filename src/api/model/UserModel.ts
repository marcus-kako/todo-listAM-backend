export interface IUserModel {
  id: string;
  name: string;
  email: string;
  password: string;
}

export class UserModel {
  private _id: string;
  private _name: string;
  private _email: string;
  private _password: string;

  constructor(id: string, name: string, email: string, password: string) {
    this._id = id;
    this._name = name;
    this._email = email;
    this._password = password;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get email(): string {
    return this._email;
  }

  get password(): string {
    return this._password;
  }

  get user(): IUserModel {
    return {
      id: this._id,
      name: this._name,
      email: this._email,
      password: this._password,
    }
  }
}
