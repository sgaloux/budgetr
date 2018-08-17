import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { TraceableEntity } from "./TraceableEntity";

@Entity()
export class Account extends TraceableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
