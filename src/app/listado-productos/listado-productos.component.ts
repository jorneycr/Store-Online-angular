import { Component } from '@angular/core';
import { ProductoComponent } from "../producto/producto.component";
import { FormsModule } from '@angular/forms';
import { Producto } from '../producto/producto.model';
import { FormularioComponent } from "../formulario/formulario.component";
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-productos',
  imports: [FormsModule, ProductoComponent],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css'
})
export class ListadoProductosComponent {

  productos: { [llave: string]: Producto } = {};

  constructor(private productoService: ProductoService, private router: Router) { }

  ngOnInit() {
    // Inicializar los productos
    this.cargarProductos();
  }
  cargarProductos() {
    this.productoService.listarProductos().subscribe((productos: { [llave: string]: Producto }) => {
      this.productos = productos;
    });
  }

  agregarProducto() {
    this, this.router.navigate(['agregar']);
  }

  obtenerLlaves(): string[] {
    if(this.productos) {
      return Object.keys(this.productos);
    }
    return [];
  }

}
