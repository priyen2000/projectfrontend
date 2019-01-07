import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { order } from './classes/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private order:string="http://localhost:3000/order/";
  private toporder:string="http://localhost:3000/toporder/";
  private orderdet:string="http://localhost:3000/orderdetail/";

  getAllOrder() {
    return this._http.get(this.order);
  }
  getTopOrder() {
    return this._http.get(this.toporder);
  }
  UpdateOrderStatus(item){
    let body=JSON.stringify(item);
  let head1=new HttpHeaders().set('Content-Type','application/json');
  return this._http.put(this.order,body,{headers:head1});
  }
  deleteAllOrder(item:order[])
  {
      let body=JSON.stringify(item);
      let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.order,body,{headers:head1});
  }
  deleteOrder(item:order)
  {
   let header1=new HttpHeaders().set('Content-type','application/json');
   return this._http.delete(this.order+item.order_id,{headers:header1});
 }
 getAllOrderDetails(order_id) {
   console.log(order_id);
  return this._http.get(this.orderdet+order_id);
}
getOrderDetailsByfkoid(fk_order_id) {
  return this._http.get(this.orderdet+fk_order_id);
}
  constructor(private _http:HttpClient) { }
}
