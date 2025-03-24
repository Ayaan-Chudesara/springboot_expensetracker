package com.Rishabh.ExpenseTracker.services.expense;

import com.Rishabh.ExpenseTracker.entity.Expense;
import com.Rishabh.ExpenseTracker.repository.ExpenseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service // This annotation is used to indicate that the class is a service class.
@RequiredArgsConstructor // This annotation is used to generate a constructor with required arguments.


public class ExpenseServiceImp implements ExpenseService {

    private final ExpenseRepository expenseRepository; // This is a final variable of type ExpenseReposiotry.

    public ExpenseServiceImp(ExpenseRepository expenseRepository) {
        this.expenseRepository = expenseRepository;
    }

    private Expense saveOrUpdate (Expense expense , ExpenseDTO expenseDTO){
        expense.setTitle(expenseDTO.getTitle());

    }

}
