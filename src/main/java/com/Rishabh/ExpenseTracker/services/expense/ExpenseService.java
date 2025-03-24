package com.Rishabh.ExpenseTracker.services.expense;

import com.Rishabh.ExpenseTracker.dto.ExpenseDTO;
import com.Rishabh.ExpenseTracker.entity.Expense;
import org.springframework.stereotype.Service;



public interface ExpenseService {
    Expense postExpense(ExpenseDTO expenseDTO);

}
