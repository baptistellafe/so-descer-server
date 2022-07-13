import { ProductCategoryRepository } from "../../repositories";


type ProductCategoryRequest = {
  name: string;
};

export class CreateProductCategoryService {
  async execute({ name }: ProductCategoryRequest) {

    const productCategory = ProductCategoryRepository().create({
      name
    });


    await ProductCategoryRepository().save(productCategory);

  
    return productCategory; 
  }
}
