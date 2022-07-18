import { InventoryDetailRepository, InventoryRepository  } from "../../repositories";


type InventoryRequest = {
  building_id: string;
  product_id: string;
  amount_total: number;
  sale_price?: number;
  inventory_detail: detail[];
};

type detail = { 
  amount: number;
  expiration_date: string;
  cost_price?: number;
}

export class UpdateInventoryService {
  async execute({ building_id, product_id, amount_total, sale_price, inventory_detail }: InventoryRequest) {

    let details: detail[] = [];

    /* const building = await BuildingRepository().findOne({
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
    } */


    const inventory = await InventoryRepository().findOne({
      where: {
          product_id,
          building_id,
      }
    });

    if(!inventory){
      return new Error("Estoque não encontrado");
    }

    if(amount_total) inventory.amount_total = amount_total;
    if(sale_price) inventory.sale_price = sale_price;

    console.log(inventory);


    const inventoryDetail = await InventoryDetailRepository().find({
      where: {
        inventory,
      }
    });
    
    console.log(inventoryDetail);
    

   
    /* await InventoryRepository().save(inventory); */
  
    return inventoryDetail; 
  }
}
