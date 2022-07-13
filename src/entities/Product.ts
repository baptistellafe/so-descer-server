import { Entity, Column, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { Inventory } from "./Inventory";
import { ProductCategory } from "./ProductCategory";

@Entity("product")
export class Product extends BaseEntity {
  @Column()
  name: string;

  @Column()
  internalCode: string;

  @Column()
  barCode: string;

  @OneToOne(() => ProductCategory, { cascade: true})
    @JoinColumn({
      name: "product_category_id",
  })
      product_category_id: ProductCategory;

  @OneToMany(() => Inventory, Inventory => Inventory.product)
  public inventory!: Inventory[];
}
