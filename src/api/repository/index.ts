export interface ICRUD<T, ID> {
  create(T: T): T;
  find(): T[] | [];
  findOne?(id: ID): T | undefined;
  update(id: ID, T: T): T | undefined;
  remove(id: ID, T: T): void;
}

export abstract class CRUD<T, ID> implements ICRUD<T, ID> {
  public abstract create(T: T): T;

  public abstract find(): [] | T[]; 

  public abstract findOne?(id: ID): T | undefined;
  
  public abstract update(id: ID, T: T): T | undefined;
  
  public abstract remove(id: ID, T: T): void;

}