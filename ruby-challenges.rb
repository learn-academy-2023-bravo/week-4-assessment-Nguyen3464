# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️ 

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

# Pseudocode: 1.) create a method called even_or_odd
# 2.) even_or_odd will take in a number as an argument
# 3.) use and if statment and an equality operator to make a evaluation
# 4.) use % 2 == 0 to see if there is a remainder
# 5.) return a string interpolated statement if the argument is even or odd

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

def even_or_odd repost
    if (repost % 2 == 0)
        "#{repost} is even"
    else "#{repost} is odd"
    end 
end

p even_or_odd(reposts1)
p even_or_odd(reposts2)
p even_or_odd(reposts3)

############################################################################

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# Pseudocode: 1.) Create a method called de_voweler
# 2.) de_voweler will take in a string argument
# 3.) use .delete method to target voewls to be removed
# 4.) use ! bang operator to mutate the string
# 5.) return the mutated string

def de_voweler string
    string.delete! "aeiouy"
end

p de_voweler(beatles_album1)
p de_voweler(beatles_album2)
p de_voweler(beatles_album3)

############################################################################

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# Pseudocode: 1.) Create a method called is_palindrome
# 2.) is_palindrome will take in a string argument
# 3.) use .downcase! to change all the characters to a lower case
# 4.) use and if statement and an equality operator to check if the reversed string = string
# 5.) return a string interpolated statment if the argument is palindrome or not.

def is_palindrome (string)
    string.downcase!
    if string == string.reverse
      "#{string}, is a palindrome"
    else
        "#{string}, is not a palindrome"
    end
end

p is_palindrome(palindrome_tester1)
p is_palindrome(palindrome_tester2)
p is_palindrome(palindrome_tester3)

p palindrome_tester1
p palindrome_tester2
p palindrome_tester3

# is_palindrome mehod works but it mutates the arguments. lines 82-84 returns the intended output but only in the terminal. lines 86-88 shows the arguement's values are mutated. I need clarification of methods, and Blocks.  If I want to preform multiple actions inside a method, do I need to use a block do/end?



