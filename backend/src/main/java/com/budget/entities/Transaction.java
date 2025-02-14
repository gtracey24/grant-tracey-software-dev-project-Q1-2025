package com.budget.entities;

import jakarta.persistence.*;
import org.antlr.v4.runtime.misc.NotNull;
import org.hibernate.annotations.NotFound;

import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "transaction")
public class Transaction {

    @Id
    @GeneratedValue
    private Integer id;
    @NotNull
    private Long amount;
    @NotNull
    private String description;
    @NotNull
    private Date date;
    @NotNull
    private Boolean expense;

    private Boolean income;


    public Transaction(){};

    public Transaction(Long amount, String description, Date date, Boolean expense, Boolean income) {
        this.amount = amount;
        this.description = description;
        this.date = date;
        this.expense = expense;
        this.income = income;
    }


    public Integer getId() {
        return id;
    }

    public Long getAmount() {
        return amount;
    }

    public void setAmount(Long amount) {
        this.amount = amount;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Boolean getExpense() {
        return expense;
    }

    public void setExpense(Boolean expense) {
        this.expense = expense;
    }

    public Boolean getIncome() {
        return income;
    }

    public void setIncome(Boolean income) {
        this.income = income;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Transaction that = (Transaction) o;
        return Objects.equals(id, that.id) && Objects.equals(amount, that.amount) && Objects.equals(description, that.description) && Objects.equals(date, that.date) && Objects.equals(expense, that.expense) && Objects.equals(income, that.income);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, amount, description, date, expense, income);
    }

    @Override
    public String toString() {
        return "Transaction{" +
                "id=" + id +
                ", amount=" + amount +
                ", description='" + description + '\'' +
                ", date=" + date +
                ", expense=" + expense +
                ", income=" + income +
                '}';
    }
}
