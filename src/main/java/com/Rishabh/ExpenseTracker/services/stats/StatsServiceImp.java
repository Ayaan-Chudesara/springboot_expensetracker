package com.Rishabh.ExpenseTracker.services.stats;

import com.Rishabh.ExpenseTracker.dto.GraphDTO;
import com.Rishabh.ExpenseTracker.repository.ExpenseRepository;
import com.Rishabh.ExpenseTracker.repository.IncomeRepository;
import com.Rishabh.ExpenseTracker.services.income.IncomeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
@RequiredArgsConstructor
public class StatsServiceImp  implements StatsService{

    private final IncomeRepository incomeRepository;

    private ExpenseRepository expenseRepository;

    public GraphDTO getChartData(){
        LocalDate endDate = LocalDate.now();
        LocalDate startDate = endDate.minusMonths(27);

        GraphDTO graphDTO = new GraphDTO();
        graphDTO.setExpenseList((expenseRepository.findByDateBetween(startDate,endDate)));
        graphDTO.setIncomeList(incomeRepository.findByDateBetween(startDate,endDate));

        return graphDTO;
    }
}
