package com.budget.controllers;

import com.budget.entities.Transaction;
import com.budget.entities.TransactionDTO;
import com.budget.repos.TransactionRepo;
import com.budget.services.TransactionService;
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
@RequestMapping(value = "/transactions")
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    @Autowired
    private TransactionRepo transactionRepo;

    @GetMapping
    public List<Transaction> getTransactions() {
        return transactionRepo.findAll();
    }

    @PostMapping
    public ResponseEntity<?> postTransaction(@RequestBody TransactionDTO transactionDTO) {
        try {
            Transaction transaction = new Transaction(
                    transactionDTO.getAmount(),
                    transactionDTO.getDescription(),
                    transactionDTO.getDate()
            );

            Transaction createdTransaction = transactionService.createTransaction(transaction);

            return ResponseEntity.status(HttpStatus.CREATED).body(createdTransaction);
        } catch (EntityTypeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }
    // In depth GET method
//    @GetMapping
//    public String displayTransactions(@RequestParam(required = false) Long id, Model model) {
//        if(id == null) {
//            model.addAttribute("h3", "Transactions");
//            model.addAttribute("transactions", transactionRepo.findAll());
//        } else {
//            Optional<Transaction> result = transactionRepo.findById(id);
//            if (result.isEmpty()) {
//                model.addAttribute("h3", "Invalid Transaction ID: " + id);
//            } else {
//                Transaction transaction = result.get();
//                model.addAttribute("h3", "Transaction " + id);
//                model.addAttribute("transaction", transaction.getAmount());
//            }
//        }
//
//        return "redirect:transactions";
//    }

}
