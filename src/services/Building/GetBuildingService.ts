import { AddressRepository, BuildingRepository } from "../../repositories";

export class GetBuildingService {
    async execute( id: any ) {
  
      const rep = BuildingRepository()
  
      const building = await rep.findOne({
          where: {
              id,
          },
          relations: ['address_id'] 
      } );
        
      if(!building){
          return;
      }
  
      return building;
    }
  }