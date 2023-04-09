# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: Object-Oriented programing or OOP is differs from Javascript in that the subject of the language becomes the object. In the Ruby programing language, everything is a class, or an instance of a class; an object.  In Javascript the subject surrounds the the raw logic needed to manipulate the code.  Ruby's OOP model is great for destructing how we understanding the code, by thinking of it as form vs state; class vs object.  

Researched answer: Ruby is design around data, or objects, rather than functions and logic. An object can be defined as a data field that has unique attributes and behavior. The structure of OOP is Class, Object, Method, Attributes.Functional Programming follows the idea that a piece of code is stateless and is more orientated to solve a specific problem through transforming the input.

2. What is the difference between a Float and an Integer in Ruby?

Your answer: A float is a decimal or a whole number that has decimal places.  An Integer is a whole number.  Both are classes and can have mathematical operators change their values.  Inside Ruby to use a float and arithmatic you must introduce a float value to the calculations.  4.0 + 3 = 7.0 has a diffrent value than 4 + 3 = 7. 

Researched answer: Ruby rounds to the nearest whole number. 1 / 100 = 0 when a float is introduced 1.0 / 100 = 0.01  The main difference between float and decimal are more accurate even though it is likely to take up more space in your database. This is why decimal is ideal for complex financial applications.

3. Ruby has an implicit return. What does that mean?

Your answer: Ruby's implicit return means that every method will return the last block of code within the method.  This happens without calling the return keyword inside the method.

Researched answer: Ruby will return the final statement inside the code block before the end keyword.  You can use the return keyword if you want to retrieve values before the end of the method.  This is useful when using conditional statement.

4. What is a block in Ruby?

Your answer: Block are similar to methods in that, they can be assigned to an anonymous function.  Blocks can have can be passed additional information in the declaration that help modify the actions passed in.  In the block declaration you need the do, and end keyword. The additional will be passed in the || pipes, which function as parameters that where arguments can be passed through and accessed in the block.

Researched answer: Blocks typically are defined by the keyword do and end but can be wrapped in curly braces. The best practice is to use do and end if the logic in the block is multiline. Single line code can be converted to curly braces. Blocks can utilize iteration methods like, while loops, .each, .map().

5. How do you extract a value in a Ruby hash?

Your answer: In ruby Hashes are similar to Javascript objects, in that they are an an object with key:value pairs.  To access hashes you call the hash varaiable name and use bracket notation.  Within the bracket notation state the hash's key and the return will be the value.

Researched answer: the syntax for extracting values within a hash is hash_name[:key_name]. In addition to extracting values, you can reasign values using the bracket notation and assignment operator --> hash_name[:key_name] = "new_value"

## Looking Ahead: Terms for Next Week

1. RSpec: RSpec is used for testing code in ruby.  Its used for Behavior Driven Development. BDD builds upon Test driven development's concepts of writing test case that matches what we need to program.
Run the test and watch it fail. Then write the code that makes it pass. The idea is to write tests as specifications of system behavior

2. Test-driven development: TDD is the process of writing the a small sacae test to for functions in development.  These test will have an intended fail and which helps structure the function that will be created to yield a pass.  This allows for building functions that will be compatible with pushing to legacy code

3. PostgreSQL: PostgreSQL is a object relational database management system, that uses the SQL language.  ORD orginized data similar to OOP. It is an open source software used in data storage,accessing, and data security.  The data is broken down to table structures with columns and rows.  Columns are the keys and rows are values

4. CRUD: Create, Read, Update, and Delete CRUD are ways in which we can access and mutate Ruby hashes. Hash.new keyword is used to create new hashes, Reading is used to extract keys and values withing the hash. Key and values can be assigned, deleted, and more pairs can be added to an exisiting hash

5. HTTP: 
Hypertext Transfer Protocol  is a method for writing and exporting information between a client or web browser and a web server. HTTP is the primary method information is moved across the Internet. Data such as text, images, sound, video and other multimedia files are able to be exported.
