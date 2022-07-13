import { ProductCategoryRepository, ProductRepository } from "../../repositories";


type ProductRequest = {
  name: string;
  internalCode: string;
  barCode: string;
  productCategoryId: string;
};

export class CreateProductService {
  async execute({ name, internalCode, barCode, productCategoryId }: ProductRequest) {


    const productCategory = await ProductCategoryRepository().findOne({
      where: {
          id: productCategoryId
      }
    });

    if(!productCategory){
      return new Error("Categoria de produto não encontrada");
    }

    const product = ProductRepository().create({
      name,
      internalCode,
      barCode,
      product_category_id: productCategory
    });

    await ProductRepository().save(product);

  
    return product; 
  }
}

function NotImplementedError(message = "") {
  message = message;
}


NotImplementedError.prototype = new Error();
