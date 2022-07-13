import { ProductCategoryRepository } from "../../repositories";


export class GetProductCategoryService {
    async execute( id: any ) {
  
      const rep = ProductCategoryRepository()
  
      const productCategory = await rep.findOne({
          where: {
              id,
          }
      } );
        
      if(!productCategory){
          return;
      }
  
      return productCategory;
    }
  }