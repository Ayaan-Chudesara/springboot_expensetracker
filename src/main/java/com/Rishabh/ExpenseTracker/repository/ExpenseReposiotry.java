package com.Rishabh.ExpenseTracker.repository;

import com.Rishabh.ExpenseTracker.entity.Expense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository // This annotation is used to indicate that the class provides the mechanism for storage, retrieval, search, update and delete operation on objects.


public interface ExpenseReposiotry extends JpaRepository<Expense,Long> { // This interface extends JpaRepository which is a JPA specific extension of Repository. It contains the full API of CrudRepository and PagingAndSortingRepository.

}
