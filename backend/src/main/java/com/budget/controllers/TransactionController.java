package com.budget.controllers;

import com.budget.entities.Transaction;
import com.budget.repos.TransactionRepo;
import com.budget.services.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Optional;

@Controller
@RequestMapping("/transactions")
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    @Autowired
    private TransactionRepo transactionRepo;

    @GetMapping("")
    public String displayTransactions(@RequestParam(required = false) Long id, Model model) {
        if(id == null) {
            model.addAttribute("h3", "Transactions");
            model.addAttribute("transactions", transactionRepo.findAll());
        } else {
            Optional<Transaction> result = transactionRepo.findById(id);
            if (result.isEmpty()) {
                model.addAttribute("h3", "Invalid Transaction ID: " + id);
            } else {
                Transaction transaction = result.get();
                model.addAttribute("h3", "Transaction " + id);
                model.addAttribute("transaction", transaction.getAmount());
            }
        }

        return "/";
    }


}
