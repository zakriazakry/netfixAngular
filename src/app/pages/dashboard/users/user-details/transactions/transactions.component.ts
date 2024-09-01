import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input } from '@angular/core';
import { AnimatedCounterComponent } from '../../../../../components/admin/counter/counter.component';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule, AnimatedCounterComponent],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss'
})
export class TransactionsComponent implements AfterViewInit{
  @Input({ required: true }) data: any;

  
  ngAfterViewInit(): void {
    console.log(this.data);
  }

}
