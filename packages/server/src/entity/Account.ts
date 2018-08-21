import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { TraceableEntity } from "./TraceableEntity";

@Entity()
export class Account extends TraceableEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ unique: true })
  public name: string;

  @Column({ unique: true, nullable: true })
  public iban: string;
}
