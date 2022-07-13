import { Column, Entity, OneToOne } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { Building } from "./Building";

@Entity("address")
export class Address extends BaseEntity {

  @Column()
  zipCode: string;

  @Column()
  state: string;

  @Column() 
  city: string;

  @Column()
  neighborhood: string;

  @Column()
  street: string;

  @Column()
  number: number;

  @Column()
  complement: string;
}
