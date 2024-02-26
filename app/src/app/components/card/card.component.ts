import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { Professional } from 'src/app/models/professional';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() profesional:Professional
}
