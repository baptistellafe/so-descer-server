import { ProductRepository } from "../../repositories";


export class GetProductService {
    async execute( id: any ) {
  
      const rep = ProductRepository()
  
      const product = await rep.findOne({
          where: {
              id
          },
          relations: ['product_category_id'] 
      });
        

      if(!product){
          return;
      }
  
      return product;
    }
  }