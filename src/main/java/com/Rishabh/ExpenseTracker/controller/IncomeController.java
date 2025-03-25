package com.Rishabh.ExpenseTracker.controller;

import com.Rishabh.ExpenseTracker.dto.IncomeDTO;
import com.Rishabh.ExpenseTracker.entity.Income;
import com.Rishabh.ExpenseTracker.services.income.IncomeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/income")
@RequiredArgsConstructor
@CrossOrigin("*")
public class IncomeController {

    private final IncomeService incomeService;

   @PostMapping
    public ResponseEntity<?> postIncome(@RequestBody IncomeDTO incomeDTO){
        Income createdIncome = incomeService.postIncome(incomeDTO);
        if(createdIncome != null){
            return ResponseEntity.status(HttpStatus.CREATED).body(createdIncome);
        }
        else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
}
