import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,                  // ← Muy importante
  imports: [RouterOutlet],           // ← Valido ahora que es standalone
  templateUrl: './app.html',
  styleUrls: ['./app.scss']          // ← Cambia styleUrl por styleUrls
})
export class App {
  protected title = 'frontend';
}
