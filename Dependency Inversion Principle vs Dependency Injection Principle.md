# Dependency Inversion Principle vs Dependency Injection Principle using example of type script

I'd be glad to explain the Dependency Inversion Principle (DIP) and Dependency Injection (DI) in TypeScript, along with a clear example:

## Dependency Inversion Principle (DIP)

**Concept**: DIP emphasizes that high-level modules (classes responsible for core application logic) should depend on abstractions (interfaces or abstract classes) rather than concrete implementations of their dependencies. This promotes loose coupling, making your code more flexible, maintainable, and testable.
### Benefits of DIP:

**Easier to swap implementations**: By depending on abstractions, you can readily switch between different concrete implementations (e.g., different database drivers) without modifying the high-level code.
Improved testability: You can create mock implementations of abstractions to isolate and test high-level modules in a controlled environment.
Increased maintainability: Code becomes more readable and easier to understand by focusing on what a dependency does rather than how it's implemented.
TypeScript Example (DIP):

TypeScript
      // Abstraction (interface)
      interface Database {
        connect(): void;
        disconnect(): void;
        executeQuery(query: string): any;
      }
      
      // Concrete implementation (class)
      class MySQLDatabase implements Database {
        connect() {
          // MySQL connection logic
        }
      
        disconnect() {
          // MySQL disconnection logic
        }
      
        executeQuery(query: string): any {
          // MySQL query execution logic
        }
      }
      
      // High-level module (class)
      class CustomerService {
        private database: Database;
      
        constructor(database: Database) {
          this.database = database;
        }
      
        getCustomers(): any[] {
          this.database.connect();
          const results = this.database.executeQuery("SELECT * FROM customers");
          this.database.disconnect();
          return results;
        }
      }
      
      // Usage
      const mysqlDatabase = new MySQLDatabase();
      const customerService = new CustomerService(mysqlDatabase);
      const customers = customerService.getCustomers();

## Dependency Injection (DI)

**Concept**: DI is a technique to implement DIP. It involves providing dependencies to a class from outside (usually during construction) rather than creating them within the class itself. This allows for greater control over how dependencies are created and configured.
**Benefits of DI**:

**Aligns with DIP**: DI facilitates loose coupling by injecting abstractions instead of concrete implementations.
Promotes configuration flexibility: You can easily configure different dependencies at runtime based on your environment.
Enables unit testing: By injecting dependencies, you can effectively mock them for isolated unit tests.
How DI Implements DIP:

The TypeScript example above already demonstrates DI by injecting the Database dependency (an abstraction) into the CustomerService constructor. Frameworks like Angular and NestJS often employ dependency injection containers to automate the process of creating and injecting dependencies.

**Key Points**:

DIP is a high-level principle that guides the design of loosely coupled components.
DI is a concrete technique to achieve DIP by providing dependencies externally.
TypeScript's interfaces and constructor injection mechanisms are powerful tools for implementing both DIP and DI.
I hope this explanation clarifies the relationship between DIP and DI in TypeScript!
