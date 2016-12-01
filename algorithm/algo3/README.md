## Algorithm 3
algorithm - 250 points

Description
------------
We were able to breach the home email server of the 400lb Russian Hackers!
The bad news: in the database dump, all of the passwords are encrypted with an md5 hash.
We did find a file on the user's computer with the formula for passwords, however.  While the user uses a different password for each service, each one follows the same formula.  The formula was 'adjective' + 'animal' + 'number between 1 and 20' and the password always starts with a capital letter.

The md5 hash of the password is f13cecb7240da5a7158588188edd928d.  Submit the actual password as the flag.

The flag is not in standard flag{} format.

Hint
------------
This user has a very small vocabulary... It's safe to say that they only know, say, the top 500 most common adjectives in the English language?

Internal Description
------------
Write a script that loops through the numbers, animals, and then adjectives.  Technically you can do this in any order, but numbers -> animals -> adjectives would be the most efficient (I think).

Psuedocode:
for i in 1..10 {
  for animal in animals {
    for adjective in adjectives {
      if md5(adjective + animal + i) == "f13cecb7240da5a7158588188edd928d" {
        print("This is the correct password.")
      }
     }
  }
}

[Some animals](https://answers.yahoo.com/question/index?qid=20110213152319AAl7hf4)
[Some adjectives](http://www.knowledgeicon.com/Top-Adjectives.pdf)

Flag
------------
intelligentfish7
