import { Column, Double, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { Building } from "./Building";
import { InventoryDetail } from "./InventoryDetail";
import { Product } from "./Product";

@Entity("inventory")
export class Inventory extends BaseEntity {

  @Column()
  building_id: string;

  @Column()
  product_id: string;

  @Column()
  amount_total: number;

  @Column()
  sale_price: number;

  @OneToMany(() => InventoryDetail, inventory_detail => inventory_detail.inventory)
  inventory_detail: InventoryDetail[];

  @ManyToOne(() => Product, product => product.inventory )
  @JoinColumn({
    name: "product_id",
  })
  public product: Product;

  @ManyToOne(() => Building, building => building.inventory)
  @JoinColumn({
    name: "building_id",
  })
  public building: Building;

 
}
