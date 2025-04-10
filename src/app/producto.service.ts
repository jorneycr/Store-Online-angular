import { Injectable } from '@angular/core';
import { Producto } from './producto/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productos: Producto [] = [
      new Producto(1, 'Pantalon', 130.0),
      new Producto(2, 'Camisa', 80.0),
      new Producto(3, 'Tennis', 30.0)
    ];

    
    agregarProducto(producto: Producto) {
      this.productos.push(producto); 
    }
}
