# Igpay Atinlay

Uh oh! The kids at Dorothy Hamm Middle School have all written their book reports in pig latin.
You're the teacher that has to grade their essays, though, and you don't want to fail them all.
The only option is to write a program that will translate the essays back into English.

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
Smay. Eay Mithsay eachestay lasscay noay Arsmay. Eryvay oolcay.
```

Output:

```
Ms. E Smith teaches class on Mars. Very cool.
```