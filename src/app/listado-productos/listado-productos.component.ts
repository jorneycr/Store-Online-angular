import { Component } from '@angular/core';
import { ProductoComponent } from "../producto/producto.component";
import { FormsModule } from '@angular/forms';
import { Producto } from '../producto/producto.model';
import { FormularioComponent } from "../formulario/formulario.component";
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-listado-productos',
  imports: [FormsModule, FormularioComponent, ProductoComponent],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css'
})
export class ListadoProductosComponent {

  productos: Producto [] = [];

  constructor(private productoService: ProductoService){
    this.productoService.detallesProductoEmitter.subscribe(
      (producto: Producto) => alert(`Producto: ${producto.descripcion}, $${producto.precio}`)
    );
  }

  ngOnInit(){
    // Inicializar los productos
    this.productos = this.productoService.productos;
  }

}
