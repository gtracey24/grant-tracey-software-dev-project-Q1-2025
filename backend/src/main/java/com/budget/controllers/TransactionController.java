package com.budget.controllers;

import com.budget.entities.Transaction;
import com.budget.entities.TransactionDTO;
import com.budget.repos.TransactionRepo;
import com.budget.services.TransactionService;
import jakarta.persistence.EntityNotFoundException;
import org.hibernate.query.sqm.EntityTypeException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:5174")
@RequestMapping(value = "/transactions")
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    @Autowired
    private TransactionRepo transactionRepo;

    @GetMapping
    public List<Transaction> getTransactionList() {
        return transactionRepo.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getTransaction(@PathVariable int id) {

        Optional<Transaction> optTransaction = transactionRepo.findById(id);

        if (optTransaction.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Transaction ID " + id + " does not exist");
        } else {
            Transaction transaction = optTransaction.get();
            return ResponseEntity.status(HttpStatus.FOUND).body(transaction);
        }
    }

    @PostMapping
    public ResponseEntity<?> postTransaction(@RequestBody TransactionDTO transactionDTO) {
        try {
            Transaction transaction = new Transaction(
                    transactionDTO.getAmount(),
                    transactionDTO.getDescription(),
                    transactionDTO.getDate());

            Transaction createdTransaction = transactionService.createTransaction(transaction);

            return ResponseEntity.status(HttpStatus.CREATED).body(createdTransaction);
        } catch (EntityTypeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTransaction(@PathVariable int id) {
        try {
            transactionService.deleteTransaction(id);
            return ResponseEntity.ok("Transaction with ID " + id + " has been deleted successfully");
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    };

}