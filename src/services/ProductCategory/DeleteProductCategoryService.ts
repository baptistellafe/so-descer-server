import { ProductCategoryRepository } from "../../repositories";

export class DeleteProductCategoryService {
    async execute( id: any ) {
  
      const rep = ProductCategoryRepository()
  
      const productCategory = await rep.findOne({
          where: {
              id
          }
      } );
        
      if(!productCategory){

        return new Error("Categoria de produto não encontrada");
      }

      await rep.remove(productCategory);

  
      return productCategory;
    }
  }