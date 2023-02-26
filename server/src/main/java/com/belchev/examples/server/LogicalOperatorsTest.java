package com.belchev.examples.server;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class LogicalOperatorsTest implements CommandLineRunner {

    // OCP Java 17 exam example
    @Override
    public void run(String... args) throws Exception {

        // logical AND (&) evaluates to true if both values are true
        System.out.println(true & true);

        // logical exclusive OR (^) evaluates to true only if one value is true
        System.out.println(true ^ false ^ false);

        // logical inclusive OR (|) evaluates true if at least one value is true
        System.out.println(true | false);
    }
}
