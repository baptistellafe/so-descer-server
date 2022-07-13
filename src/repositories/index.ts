import { Role } from "../entities/Role";
import { User } from "../entities/User";
import { Product } from "../entities/Product";
import { Permission } from "../entities/Permission";
import { AppDataSource } from "../database/dataSource";
import { Building } from "../entities/Building";
import { Address } from "../entities/Address";
import { ProductCategory } from "../entities/ProductCategory";
import { Inventory } from "../entities/Inventory";
import { InventoryDetail } from "../entities/InventoryDetail";

export const UserRepository = () => {
  return AppDataSource.getRepository(User);
};

export const RoleRepository = () => {
  return AppDataSource.getRepository(Role);
};

export const PermissionRepository = () => {
  return AppDataSource.getRepository(Permission);
};

export const ProductRepository = () => {
  return AppDataSource.getRepository(Product);
};

export const AddressRepository = () => {
  return AppDataSource.getRepository(Address);
};

export const BuildingRepository = () => {
  return AppDataSource.getRepository(Building);
};

export const ProductCategoryRepository = () => {
  return AppDataSource.getRepository(ProductCategory);
};

export const InventoryRepository = () => {
  return AppDataSource.getRepository(Inventory);
};

export const InventoryDetailRepository = () => {
  return AppDataSource.getRepository(InventoryDetail);
};
