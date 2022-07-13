import { ProductCategoryRepository, ProductRepository } from "../../repositories";


type ProductRequest = {
  id: string;
  name?: string;
  internalCode?: string;
  barCode?: string;
  productCategoryId?: string
};

export class UpdateProductService {
  async execute({ id, name, internalCode, barCode, productCategoryId }: ProductRequest) {

    const rep = ProductRepository()

    let productCategory;

    const product = await rep.findOne({
        where: {
            id
        }
    } );

    if(!product){
      return new Error("Produto não encontrado");
    }

    if(productCategoryId){

      console.log(productCategoryId);

      productCategory = await ProductCategoryRepository().findOne({
        where: {
            id: productCategoryId
        }
      });
  
      if(!productCategory){
        return new Error("Categoria de produto não encontrada");
      }

    }

    
    if(name) product.name = name;
    if(internalCode) product.internalCode = internalCode;
    if(barCode) product.barCode = barCode;
    if(productCategory) product.product_category_id = productCategory;


    await ProductRepository().save(product);


    return product;
  }
}
