import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Producto } from '../producto/producto.model';

@Component({
  selector: 'app-formulario',
  imports: [],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
 
  @ViewChild('descripcionInput') descripcionInput!: ElementRef;
  @ViewChild('precioInput') precionInput!: ElementRef;
  @Output() nuevoProducto = new EventEmitter<Producto>();

  agregarProducto(evento: Event){
    evento.preventDefault();
    //Validar que sean valores correcto
    if(this.descripcionInput.nativeElement.value.trim() === '' || this.precionInput == null || this.precionInput.nativeElement.value <=0){
      console.log('Debe ingresar una descripción y un precio válidos');
      return;
    }

    const producto = new Producto(this.descripcionInput.nativeElement.value, this.precionInput.nativeElement.value);
    //emitir nuevo producto
    this.nuevoProducto.emit(producto);

    // Limpiamos los campos del formulario
    this.descripcionInput.nativeElement.value = '';
    this.precionInput.nativeElement.value = null;
  }

}
