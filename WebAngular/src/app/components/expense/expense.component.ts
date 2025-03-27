import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ExpenseService } from 'src/app/services/expense/expense.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent {

expenseForm!: FormGroup;
listOfCategory: any[] = [
  "Education",
  "Groceries",
  "Health",
  "Subscription",
  "Takeaways",
  "Clothing",
  "Traveling",
  "other"];

  constructor(private fb: FormBuilder,
    private expenseService: ExpenseService,
    private message: NzMessageService
  ) { }

  ngOnInit() {
    this.expenseForm = this.fb.group({
      Title: [null, Validators.required],
      amount: [null, Validators.required],
      date: [null, Validators.required],
      catagory: [null, Validators.required],
      description: [null, Validators.required],
    });
  }

  submitForm(){
    this.expenseService.postExpense(this.expenseForm.value).subscribe(res=>{
      this.message.success("Expense Posted Successfully", {nzDuration: 5000});
    },error=>{
      this.message.error("Error while posting Expense", {nzDuration: 5000});
    })
  }
}