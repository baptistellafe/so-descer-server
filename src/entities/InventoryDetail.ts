import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { Inventory } from "./Inventory";

@Entity("inventory_detail")
export class InventoryDetail extends BaseEntity {

  @Column()
  amount: number;

  @Column()
  expiration_date: string;

  @Column()
  cost_price: number;

  @ManyToOne(() => Inventory, inventory => inventory.inventory_detail)
  @JoinColumn({
    name: "inventory_id",
  })
  inventory: Inventory;

}
