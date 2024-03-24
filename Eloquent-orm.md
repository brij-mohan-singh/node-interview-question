# Eloquent ORM-
Eloquent ORM (Object-Relational Mapping) is the database abstraction layer included with the Laravel PHP framework. It provides a simple ActiveRecord implementation for working with your database, allowing you to interact with database tables using PHP objects. Eloquent simplifies database operations by representing database tables as classes and database rows as objects. It supports various relationships between models, making it easy to define and work with complex data structures.

## Basic Usage:
## 1 Defining Models:

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

## 2 Querying Data:

Eloquent provides methods for querying data from the database.
## Example:

            // Retrieving all users
            $users = User::all();
            
            // Retrieving a single user by primary key
            $user = User::find(1);
            
            // Querying using where clauses
            $users = User::where('age', '>', 18)->get();

## 3 Manipulating Data:

Eloquent allows you to create, update, and delete records easily.
## Example:

            // Creating a new user
            $user = new User();
            $user->name = 'John Doe';
            $user->email = 'john@example.com';
            $user->save();
            
            // Updating a user
            $user = User::find(1);
            $user->name = 'Jane Doe';
            $user->save();
            
            // Deleting a user
            $user = User::find(1);
            $user->delete();

## Relationships in Eloquent:
Eloquent supports the following types of relationships between models:

## 1 One-to-One:

Define a hasOne or belongsTo relationship.
Example: User has one Profile.
## 2 One-to-Many:

Define a hasMany or belongsTo relationship.
Example: User has many Posts.
## 3 Many-to-Many:

Define a belongsToMany relationship.
Example: User belongs to many Roles.
## 4 Has-Many-Through:

Define a hasManyThrough relationship.
Example: Country has many Users through City.
## 5 Polymorphic Relations:

Define morphTo, morphMany, or morphToMany relationships.
Example: Commentable (Post, Video, etc.).
## 6 One-to-One (Polymorphic):

Define morphOne or morphTo relationships.
Example: Imageable (User, Post, etc.).
## Live Example:
Let's illustrate a one-to-many relationship between User and Post models.

## 1 Define Models:

            // app/Models/User.php
            namespace App\Models;
            
            use Illuminate\Database\Eloquent\Model;
            
            class User extends Model
            {
                public function posts()
                {
                    return $this->hasMany(Post::class);
                }
            }
            
            // app/Models/Post.php
            namespace App\Models;
            
            use Illuminate\Database\Eloquent\Model;
            
            class Post extends Model
            {
                public function user()
                {
                    return $this->belongsTo(User::class);
                }
            }

## 2 Retrieve Data:

            // Retrieve user's posts
            $user = User::find(1);
            $posts = $user->posts;
            
            // Retrieve post's author
            $post = Post::find(1);
            $author = $post->user;

## 3 Manipulate Data:

      // Create a new post for a user
      $user = User::find(1);
      $post = new Post(['title' => 'New Post', 'content' => 'Content']);
      $user->posts()->save($post);
      
      // Update post's content
      $post = Post::find(1);
      $post->content = 'Updated content';
      $post->save();
      
      // Delete a post
      $post = Post::find(1);
      $post->delete();

In this example, we've demonstrated a one-to-many relationship between User and Post models. A **user** can have multiple **posts**, and each post belongs to a single user.


Define Models:
