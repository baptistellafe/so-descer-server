import { ProductRepository } from "../../repositories";

export class DeleteProductService {
    async execute( id: any ) {
  
      const rep = ProductRepository()
  
      const product = await rep.findOne({
          where: {
              id
          }
      } );
        
      if(!product){
          return;
      }

      await rep.remove(product);

  
      return product;
    }
  }