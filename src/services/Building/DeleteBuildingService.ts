import { AddressRepository, BuildingRepository } from "../../repositories";

export class DeleteBuildingService {
    async execute( id: any ) {
  
      const rep = BuildingRepository()
      const repAddress = AddressRepository();
  
      const building = await rep.findOne({
          where: {
              id,
          },
          relations: ['address_id'] 
      } );
        
      if(!building){
          return;
      }

      console.log(building);
  
      await repAddress.remove(building.address_id);
      await rep.remove(building);

  
      return building;
    }
  }