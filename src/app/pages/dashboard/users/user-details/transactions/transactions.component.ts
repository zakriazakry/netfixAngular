import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AnimatedCounterComponent } from '../../../../../components/admin/counter/counter.component';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule,AnimatedCounterComponent],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss'
})
export class TransactionsComponent {

}
