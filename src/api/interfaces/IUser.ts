interface IUser {
    id?: number;
    name: string;
    email: string;
    password: string;
    token?: string;
    createdAt?: Date;
    updatedAt?: Date;
  }
  
  export default IUser;