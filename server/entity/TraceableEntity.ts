import { CreateDateColumn, UpdateDateColumn } from "typeorm";

export abstract class TraceableEntity {
  @CreateDateColumn()
  createdOn: Date;

  @UpdateDateColumn()
  updatedOn: Date;
}
