package com.Rishabh.ExpenseTracker.repository;


import com.Rishabh.ExpenseTracker.entity.Income;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface IncomeRepository extends JpaRepository<Income,Long> {

}
