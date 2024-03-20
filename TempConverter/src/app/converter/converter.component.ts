import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.css'
})
export class ConverterComponent {
celcius:number=0;
fahrenheit: number = 0; 

toFahrenheit(celcius:number){
  this.fahrenheit = celcius * 9 / 5 + 32;

}

toCelcius(fahrenheit:number){
  this.celcius = (fahrenheit - 32)*5/9;

}


}
