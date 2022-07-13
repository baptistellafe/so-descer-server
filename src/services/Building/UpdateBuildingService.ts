import { AddressRepository, BuildingRepository } from "../../repositories";


type BuildingRequest = {
  id: string;
  referenceName?: string;
  fantasyName?: string;
  companyName?: string;
  cnpj?: string;
  address?: {
    zipCode?: string;
    state?: string;
    city?: string;
    neighborhood?: string;
    street?: string;
    number?: number,
    complement?: string;
  }
};

export class UpdateBuildingService {
  async execute({ id, referenceName, fantasyName, companyName, cnpj, address }: BuildingRequest) {

    const rep = BuildingRepository()

    const building = await rep.findOne({
        where: {
            id,
        },
        relations: ['address_id'] 
    } );
    


    if(!building){
      return new Error("Prédio não encontrado");
    }


    if(referenceName) building.referenceName = referenceName;
    if(fantasyName) building.fantasyName = fantasyName;
    if(companyName) building.companyName = companyName;
    if(cnpj) building.cnpj = cnpj;

    if(address){

        if(address.zipCode) building.address_id.zipCode = address.zipCode;
        if(address.state) building.address_id.state = address.state;
        if(address.city) building.address_id.city = address.city;
        if(address.neighborhood) building.address_id.neighborhood = address.neighborhood;
        if(address.street) building.address_id.street = address.street;
        if(address.number) building.address_id.number = address.number;
        if(address.complement) building.address_id.complement = address.complement;

    }


    await BuildingRepository().save(building);

  

    return building;
  }
}


