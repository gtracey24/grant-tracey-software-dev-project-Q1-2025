package com.budget.services;

import com.budget.entities.Transaction;
import com.budget.repos.TransactionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TransactionService {

    @Autowired
    private TransactionRepo transactionRepo;

    public Transaction createTransaction(Transaction newTransaction) { return transactionRepo.save(newTransaction);};

    public List<Transaction> fetchTransactionList() { return (List<Transaction>) transactionRepo.findAll(); };

    public Optional<Transaction> fetchTransaction(Integer id) { return transactionRepo.findById(id); }

    public void deleteTransaction(Integer id) { transactionRepo.deleteById(id);}

    public Integer getTotalAmount() {
        return transactionRepo.getTransactionTotal();
    }

}

