import { Component } from '@angular/core';
import { Producto } from '../producto/producto.model';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../producto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  productoId: number | null = null;
  descripcionInput: string = '';
  precioInput: number | null = null;

  constructor(private productoService: ProductoService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
   const id = this.activatedRoute.snapshot.paramMap.get('id');
   // Si el id existe, significa que estamos editando un producto existente
   if (id) {
      const producto = this.productoService.productos.find(p => p.id === +id);
      if (producto) {
        this.productoId = producto.id;
        this.descripcionInput = producto.descripcion;
        this.precioInput = producto.precio;
      }
    }
  }

  guardarProducto(evento: Event) {
    evento.preventDefault();    

    //Validar que sean valores correcto
    if (this.descripcionInput.trim() === ''
      || this.precioInput == null || this.precioInput <= 0) {
      console.log('Debe ingresar una descripción y un precio válidos');
      return;
    }

    const producto = new Producto(this.productoId, this.descripcionInput, this.precioInput);

    // Agregamos el nuevo producto usando el servicio
    this.productoService.guardarProducto(producto);

    // Limpiamos los campos del formulario
    this.productoId = null;
    this.descripcionInput = '';
    this.precioInput = null;

    //redirigimos al inicio
    this.router.navigate(['/']);
  }

  cancelar() {
    //redirigimos al inicio
    this.router.navigate(['/']);
  }

}
