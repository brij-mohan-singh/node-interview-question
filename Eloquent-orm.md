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

In this example, we've demonstrated a one-to-many relationship between User and Post models. A user can have multiple posts, and each post belongs to a single user.

# morphOne or morphTo relationships 
In Laravel's Eloquent ORM, morphOne and morphTo are used to establish polymorphic relationships between models. Polymorphic relationships allow a model (the "child" model) to belong to more than one other model (the "parent" models) on a single association. This is useful when you have scenarios where a model can belong to different types of entities.

## morphTo Relationship:
The morphTo relationship is used on the child model to indicate that it belongs to one of several possible parent models. It doesn't define the relationship itself, but rather serves as the inverse of the polymorphic relationship. It allows the child model to morph into any of the possible parent models based on the type and ID stored in the database.

Example:
Consider a Comment model that can belong to various types of content such as Post, Video, and Image.

            class Comment extends Model
            {
                public function commentable()
                {
                    return $this->morphTo();
                }
            }
## morphOne Relationship:
The morphOne relationship is used on the parent model to define a one-to-one polymorphic relationship. It establishes a relationship where the parent model can have only one instance of the related model type.

**Example**:
Continuing with the previous example, if we want to associate one Profile with different types of users such as User, Admin, and Customer, we can define the relationship like this:

            class Profile extends Model
            {
                public function profileable()
                {
                    return $this->morphTo();
                }
            }
            
            class User extends Model
            {
                public function profile()
                {
                    return $this->morphOne(Profile::class, 'profileable');
                }
            }
            
            class Admin extends Model
            {
                public function profile()
                {
                    return $this->morphOne(Profile::class, 'profileable');
                }
            }
            
            class Customer extends Model
            {
                public function profile()
                {
                    return $this->morphOne(Profile::class, 'profileable');
                }
            }
            
In this example, Profile model morphs into different types of parent models (User, Admin, Customer) based on the type and ID stored in the database.

Summary:
morphTo: Used on the child model to indicate it belongs to one of several possible parent models.
morphOne: Used on the parent model to establish a one-to-one polymorphic relationship with a child model.
These relationships provide flexibility when dealing with models that can belong to multiple other models. They simplify the management of complex data structures and make it easier to work with relational data in Laravel applications.

## Types of Polymorphic Relationships:

**morphTo**, **morphMany**, or **morphToMany** relationships in Eloquent

In Laravel's Eloquent ORM, polymorphic relationships provide a way to associate a model with multiple other models in a more flexible manner. Instead of defining separate foreign key columns for each related model, polymorphic relationships use a single database column to store the related model's type and ID. This is particularly useful when you have situations where a model can belong to multiple other models, and you want to establish those relationships dynamically.

## 1 morphTo:

* morphTo is used on the owning side of the polymorphic relationship.
* It defines the inverse of the polymorphic relationship.
* It indicates that the model can belong to any number of other models on a single association.
## 2 morphMany:

* morphMany is used on the related side of the polymorphic relationship.
* It establishes a one-to-many polymorphic relationship, where the related model can have many of another model type.
## 3 morphToMany:

* morphToMany is used when you have a many-to-many relationship between two models, where one or both models can belong to multiple other models through a polymorphic relationship.
* It establishes a many-to-many polymorphic relationship, allowing a model to belong to multiple instances of other models, and vice versa.

 ## Example:
Let's consider a scenario where we have a Comment model that can be associated with various types of content such as **Post**, **Video**, and **Image**. We'll demonstrate the usage of polymorphic relationships in this scenario.

## 1 Define Models:

                  // Comment model
                  class Comment extends Model
                  {
                      public function commentable()
                      {
                          return $this->morphTo();
                      }
                  }

                  // Post model
                  class Post extends Model
                  {
                      public function comments()
                      {
                          return $this->morphMany(Comment::class, 'commentable');
                      }
                  }
                  
                  // Video model
                  class Video extends Model
                  {
                      public function comments()
                      {
                          return $this->morphMany(Comment::class, 'commentable');
                      }
                  }
                  
                  // Image model
                  class Image extends Model
                  {
                      public function comments()
                      {
                          return $this->morphMany(Comment::class, 'commentable');
                      }
                  }
## 2 Create Comments:

            $post = Post::find(1);
            $post->comments()->create(['content' => 'Comment on post']);
            
            $video = Video::find(1);
            $video->comments()->create(['content' => 'Comment on video']);
            
            $image = Image::find(1);
            $image->comments()->create(['content' => 'Comment on image']);

## 3 Retrieve Comments:

            $post = Post::find(1);
            $comments = $post->comments;
            
            foreach ($comments as $comment) {
                echo $comment->content;
            }

In this example, we have established a polymorphic relationship between Comment and other models (Post, Video, Image). This allows comments to be associated with multiple types of content. The commentable method in the Comment model handles the polymorphic relation, and morphMany methods in Post, Video, and Image models establish the inverse relationships.
