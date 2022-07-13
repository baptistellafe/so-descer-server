import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { Address } from "./Address";
import { BaseEntity } from "./BaseEntity";
import { Inventory } from "./Inventory";

@Entity("building")
export class Building extends BaseEntity {

  @Column()
  referenceName: string;

  @Column()
  fantasyName: string;

  @Column()
  companyName: string;

  @Column()
  cnpj: string;

  @OneToOne(() => Address, { cascade: true})
    @JoinColumn({
      name: "address_id",
  })
    address_id: Address;

  @OneToMany(() => Inventory, Inventory => Inventory.building)
  public inventory!: Inventory[];
}
