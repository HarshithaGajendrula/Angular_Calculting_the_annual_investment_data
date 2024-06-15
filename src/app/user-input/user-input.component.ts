import { Component,EventEmitter,  Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentsInputs } from '../investments-input.module';


@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentsInputs>();
  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';
  onSubmit(){
    this.calculate.emit({
      initialInvestment: +this.enteredAnnualInvestment,
      duration: +this.enteredDuration,
      expectedReturn: +this.enteredExpectedReturn,
      annualInvestment: + this.enteredAnnualInvestment
    });
  }
}
