# Igpay Atinlay

In the process of taking over Computer Science Club, Gabe Cohen must crack Nate Levin's Canvas password. Fortunately, Gabe obtained a conversation transcript between Nate and his password manager, Chuck. Unfortuantely, the conversation is in Pig Latin.

**Write a function that takes a string of pig latin and returns the original English version.**

## Pig Latin

Pig Latin is a language game that children use to speak in code. To translate a phrase into pig latin, follow these steps:
1. For each word, move the first letter to the end of the word.
2. Add "ay" to the end of the word.

For example, the word "hello" would become "ellohay".
The word "avacado" would become "vacadoaay".

## Input

A string of pig latin. 
The string will contain multiple sentences in pig latin.
Each sentence is separated by a ```.``` followed by a space.
Some words may have an uppercase first letter.

## Output

A string of English sentences. Each sentence should be separated by a ```.``` followed by a space.
The first letter in every sentence should be capitalized.
Make sure to maintain capitalization of words with uppercase first letters.

## Example

Input:
```
Ymay ewnay odecay ashay entay aractershay. Tiay siay aay reatgay asswordpay.
```

Output:

```
My new code has ten characters. It is a great password.
```