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

    //agregar o editar un producto
    guardarProducto(producto: Producto) {
      // Si el producto tiene un id, lo editamos
      if (producto.id) {
        const index = this.productos.findIndex(p => p.id === producto.id);
        if (index !== -1) {
          this.productos[index] = producto;
        }
      } else {
        // Si no tiene id, es un nuevo producto, así que le asignamos un nuevo id
        const nuevoId = this.productos.length > 0 ? Math.max(...this.productos.map(p => p.id) as number[]) + 1 : 1;
        producto.id = nuevoId;
        this.productos.push(producto);
      }
    }

    eliminarProducto(productoId: number): void {
      this.productos = this.productos.filter(p => p.id !== productoId);
    }
}
