import { In } from "typeorm";
import { Role } from "../../entities/Role";
import { PermissionRepository, RoleRepository } from "../../repositories";

type RolePermissionRequest = {
  roleId: string;
  permissions: string[];
};

export class CreateRolePermissionService {
  async execute({
    roleId,
    permissions,
  }: RolePermissionRequest): Promise<Role | Error> {
    const repo = RoleRepository();

    const role = await repo.findOneBy({id: roleId});

    if (!role) {
      return new Error("Role does not exists!");
    }

    const permissionsExists = await PermissionRepository().findBy({ id: In(permissions) })


    role.permissions = permissionsExists;

    await repo.save(role);

    return role;
  }
}
