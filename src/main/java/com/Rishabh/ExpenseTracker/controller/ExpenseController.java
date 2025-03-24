package com.Rishabh.ExpenseTracker.controller;

import com.Rishabh.ExpenseTracker.dto.ExpenseDTO;
import com.Rishabh.ExpenseTracker.entity.Expense;
import com.Rishabh.ExpenseTracker.services.expense.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController  // This annotation is used to create RESTful web services using Spring MVC. It takes care of mapping request data to the defined request handler method.
@RequestMapping("/api/expense") // This annotation is used to map web requests onto specific handler classes and/or handler methods.
@RequiredArgsConstructor // This annotation is used to generate a constructor with required arguments.
@CrossOrigin("*") // This annotation is used to handle the request from different origins.

public class ExpenseController  {

    private final ExpenseServiceImp expenseService; // This is a final variable of type ExpenseService.

    @PostMapping
    public ResponseEntity<?> postExpense(@RequestBody ExpenseDTO dto){
        Expense createdExpense = expenseService.postExpense(dto);
        if(createdExpense != null){
            return ResponseEntity.status(HttpStatus.CREATED).body(createdExpense);
        }
        else {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

    }
}
