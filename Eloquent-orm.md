# Eloquent ORM-
Eloquent ORM (Object-Relational Mapping) is the database abstraction layer included with the Laravel PHP framework. It provides a simple ActiveRecord implementation for working with your database, allowing you to interact with database tables using PHP objects. Eloquent simplifies database operations by representing database tables as classes and database rows as objects. It supports various relationships between models, making it easy to define and work with complex data structures.

## Basic Usage:
## Defining Models:

* Each database table has a corresponding model class.
* Models are typically stored in the app/Models directory.
* Define properties to specify the table name, primary key, and fillable attributes.
## Example:

      <?php
      // app/Models/User.php
      namespace App\Models;
      
      use Illuminate\Database\Eloquent\Model;
      
      class User extends Model
      {
          protected $table = 'users';
          protected $primaryKey = 'id';
          protected $fillable = ['name', 'email', 'password'];
      }



