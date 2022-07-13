import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("product_category")
export class ProductCategory extends BaseEntity {

  @Column()
  name: string;

}
