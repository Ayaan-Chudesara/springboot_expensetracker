package com.Rishabh.ExpenseTracker.services.expense;

import com.Rishabh.ExpenseTracker.dto.ExpenseDTO;
import com.Rishabh.ExpenseTracker.entity.Expense;
import com.Rishabh.ExpenseTracker.repository.ExpenseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service // This annotation is used to indicate that the class is a service class.
@RequiredArgsConstructor // This annotation is used to generate a constructor with required arguments.


public class ExpenseServiceImp implements ExpenseService {

    private final ExpenseRepository expenseRepository; // This is a final variable of type ExpenseRepository.



    public Expense postExpense(ExpenseDTO expenseDTO) { // This method is used to post an expense.
        return saveOrUpdateExpense(new Expense(), expenseDTO); // This method is used to save or update the expense.
    }

    private Expense saveOrUpdateExpense(Expense expense, ExpenseDTO expenseDTO) {
        expense.setTitle(expenseDTO.getTitle());  // This method is used to set the title of the expense.
        expense.setDate(expenseDTO.getDate());    // This method is used to set the date of the expense.
        expense.setAmount(expenseDTO.getAmount()); // This method is used to set the amount of the expense.
        expense.setCategory(expenseDTO.getCategory()); // This method is used to set the category of the expense.
        expense.setDescription(expenseDTO.getDescription()); // This methodis used to set the description of the expense.

        return expenseRepository.save(expense);
    }

}
