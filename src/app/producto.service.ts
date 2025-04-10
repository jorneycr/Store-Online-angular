import { Injectable } from '@angular/core';
import { Producto } from './producto/producto.model';
import { DatosService } from './datos.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productos: { [llave: string]: Producto } = {};

  constructor(private dataService: DatosService) {}

  //listar productos
  listarProductos() {
    return this.dataService.listarProductos();
  }

  //agregar o editar un producto
  guardarProducto(producto: Producto) {
    // Si el producto tiene un id, lo editamos
    // if (producto.id) {
    //   const index = this.productos.findIndex(p => p.id === producto.id);
    //   if (index !== -1) {
    //     this.productos[index] = producto;
    //   }
    // } else {
    //   // Si no tiene id, es un nuevo producto, así que le asignamos un nuevo id
    //   const nuevoId = this.productos.length > 0 ? Math.max(...this.productos.map(p => p.id) as number[]) + 1 : 1;
    //   producto.id = nuevoId;
    //   this.productos.push(producto);
    // }
  }

  getProductoByLlave(llave: string): Producto | undefined {
    return undefined;
    //return this.productos.find(p => p.llave === llave);
  }

  eliminarProducto(productoId: string): void {
    // this.productos = this.productos.filter(p => p.id !== productoId);
  }
}
