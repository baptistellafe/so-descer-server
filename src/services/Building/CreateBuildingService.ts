import { AddressRepository, BuildingRepository } from "../../repositories";


type BuildingRequest = {
  referenceName: string;
  fantasyName: string;
  companyName: string;
  cnpj: string;
  address: {
    zipCode: string;
    state: string;
    city: string;
    neighborhood: string;
    street: string;
    number: number,
    complement: string;
  }
};

export class CreateBuildingService {
  async execute({ referenceName, fantasyName, companyName, cnpj, address }: BuildingRequest) {

    const newAddress = AddressRepository().create({
      zipCode: address.zipCode,
      state: address.state,
      city: address.city,
      neighborhood: address.neighborhood,
      street: address.street,
      number: address.number,
      complement: address.complement,
    })

    const building = BuildingRepository().create({
      referenceName,
      fantasyName,
      companyName,
      cnpj,
    });


    building.address_id = newAddress;

    await BuildingRepository().save(building);

  
    return building; 
  }
}
