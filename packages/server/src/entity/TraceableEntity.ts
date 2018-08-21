import { CreateDateColumn, UpdateDateColumn } from "typeorm";

export abstract class TraceableEntity {
  @CreateDateColumn()
  public createdOn: Date;

  @UpdateDateColumn()
  public updatedOn: Date;
}
