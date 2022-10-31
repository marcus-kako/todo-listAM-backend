/** Dados retornados. */
export interface IUser {
    id?: number;
    name: string;
    email: string;
    password: string;
    token?: string;
    createdAt?: Date;
    updatedAt?: Date;
  }
  
  /** Dados recebidos na criação de usuário. */
  export interface IUserDto {
    name: string;
    email: string;
    password: string;
  }