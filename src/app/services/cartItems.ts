import { OrderDetailsService } from "./order-details.service";


export class cartItems{
  constructor(OrderDetailsService:OrderDetailsService){
    this.OrderDetailsService = OrderDetailsService;
    // this.Price;
  }
  OrderDetailsService : OrderDetailsService;
  quantity : number =1;

  //get Price():number{
    //return this.OrderDetailsService.foodPrice * this.quantity;
  }

// }
