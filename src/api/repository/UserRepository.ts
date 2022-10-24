import { CRUD } from ".";

export default class UserRepository<T, ID> extends CRUD<T, ID> {
  public create(T: T): T {
    throw new Error("Method not implemented.");
  }

  public find(): [] | T[] {
    throw new Error("Method not implemented.");
  }

  
  public findOne?(id: ID): T | undefined {
    throw new Error("Method not implemented.");
  }

  public update(id: ID, T: T): T | undefined {
    throw new Error("Method not implemented.");
  }

  public remove(id: ID, T: T): void {
    throw new Error("Method not implemented.");
  }

}