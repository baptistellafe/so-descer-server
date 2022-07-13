import { BuildingRepository, InventoryDetailRepository, InventoryRepository, ProductRepository } from "../../repositories";


type InventoryRequest = {
  building_id: string;
  product_id: string;
  amount_total: number;
  sale_price: number;
  inventory_detail: detail[];
};

type detail = { 
  amount: number;
  expiration_date: string;
  cost_price: number;
}

export class CreateInventoryService {
  async execute({ building_id, product_id, amount_total, sale_price, inventory_detail }: InventoryRequest) {

    let details: detail[] = [];

    const building = await BuildingRepository().findOne({
      where: {
          id: building_id,
      }
    });

    if(!building){
      return new Error("Prédio não encontrado");
    }

    

    const product = await ProductRepository().findOne({
      where: {
          id: product_id,
      }
    });

    if(!product){
      return new Error("Produto não encontrado");
    }

    const newInventory = InventoryRepository().create({
      building,
      product,
      amount_total,
      sale_price,
    });


    if(inventory_detail.length > 0){
      inventory_detail.forEach(detail => {

        const newDetail = InventoryDetailRepository().create({
          inventory: newInventory,
          amount: detail.amount,
          expiration_date: detail.expiration_date,
          cost_price: detail.cost_price,
        })

        details.push(newDetail);
        
      });
    }

  

    await InventoryRepository().save(newInventory);
    await InventoryDetailRepository().save(details);
  
    return newInventory; 
  }
}
