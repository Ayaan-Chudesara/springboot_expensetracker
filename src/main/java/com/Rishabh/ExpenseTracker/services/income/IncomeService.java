package com.Rishabh.ExpenseTracker.services.income;

import com.Rishabh.ExpenseTracker.dto.IncomeDTO;
import com.Rishabh.ExpenseTracker.entity.Income;

public interface IncomeService {

    Income postIncome(IncomeDTO incomeDTO);
}
