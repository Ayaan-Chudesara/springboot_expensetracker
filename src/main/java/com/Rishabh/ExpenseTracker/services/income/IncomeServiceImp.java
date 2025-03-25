package com.Rishabh.ExpenseTracker.services.income;

import com.Rishabh.ExpenseTracker.dto.IncomeDTO;
import com.Rishabh.ExpenseTracker.entity.Income;
import com.Rishabh.ExpenseTracker.repository.IncomeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class IncomeServiceImp implements IncomeService {

    private final IncomeRepository incomeRepository;

    public Income postIncome(IncomeDTO incomeDTO){
        return saveOrUpdateIncome(new Income(),incomeDTO);
    }

    private Income saveOrUpdateIncome(Income income, IncomeDTO incomeDTO){
         income.setTitle(incomeDTO.getTitle());
         income.setDate(incomeDTO.getDate());
         income.setAmount(incomeDTO.getAmount());
         income.setCategory(incomeDTO.getCategory());
         income.setDescription(incomeDTO.getDescription());

         return incomeRepository.save(income);
    }
}
