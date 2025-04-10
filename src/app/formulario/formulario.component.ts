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

  llaveProducto: string | null = null;
  descripcionInput: string = '';
  precioInput: number | null = null;

  constructor(private productoService: ProductoService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
   const llave = this.activatedRoute.snapshot.paramMap.get('llave');
   // Si el id existe, significa que estamos editando un producto existente
   if (llave) {
      const producto = this.productoService.getProductoByLlave(llave);
      if (producto) {
        this.llaveProducto = llave;
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

    const producto = new Producto(this.descripcionInput, this.precioInput);

    // Agregamos el nuevo producto usando el servicio
    this.productoService.guardarProducto(producto);

    // Limpiamos los campos del formulario
    this.limpiarFormulario();

    //redirigimos al inicio
    this.router.navigate(['/']);
  }

  cancelar() {
    //redirigimos al inicio
    this.router.navigate(['/']);
  }

  eliminarProducto(): void {
    if (this.llaveProducto !== null) {
      this.productoService.eliminarProducto(this.llaveProducto);
      this.limpiarFormulario();
      //redirigimos al inicio
      this.router.navigate(['/']);
    }
  }

  limpiarFormulario() {
    this.llaveProducto = null;
    this.descripcionInput = '';
    this.precioInput = null;  
  }

}
