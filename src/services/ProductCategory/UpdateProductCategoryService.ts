import { ProductCategoryRepository } from "../../repositories";


type ProductCategoryRequest = {
  id: string;
  name: string;
};

export class UpdateProductCategoryService {
  async execute({ id, name }: ProductCategoryRequest) {

    const rep = ProductCategoryRepository()

    const productCategory = await rep.findOne({
        where: {
            id
        }
    } );

    if(!productCategory){
        return;
    }


    productCategory.name = name;


    await ProductCategoryRepository().save(productCategory);

  

    return productCategory;
  }
}
