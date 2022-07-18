import { PrimaryColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

export class BaseEntity {
  @PrimaryColumn()
  id: string;

  @CreateDateColumn({ type: "timestamptz", precision: 6})
  created_at: Date;

  @UpdateDateColumn({ type: "timestamptz", precision: 6})
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
