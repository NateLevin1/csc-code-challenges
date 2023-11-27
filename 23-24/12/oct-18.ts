function collatz(num: number) {
    if(num == 1) return;

    console.log(num);
    if((num % 2) == 0) {
        collatz(num / 2);
    } else {
        collatz(3 * num + 1);
    }
}

collatz(parseInt(prompt("number? ")));
