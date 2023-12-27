import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { SquareComponent } from './square/square.component';
import { BoardComponent } from './board/board.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, SquareComponent, BoardComponent],
  selector: 'myapp-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'myapp';
}
