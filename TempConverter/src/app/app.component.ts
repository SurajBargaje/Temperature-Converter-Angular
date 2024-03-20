import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ConverterComponent} from '../app/converter/converter.component'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ConverterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TempConverter';
}
