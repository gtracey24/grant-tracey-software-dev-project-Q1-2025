package com.budget.repos;

import com.budget.entities.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface TransactionRepo extends JpaRepository<Transaction, Integer> {

    @Query("SELECT SUM(t.amount) FROM Transaction s")
    Integer getTransactionTotal();
}
