let books = [[13, 80.0, 'Simon Sinek', 'Start with why', 1],
[22, 59.9, 'J.Clark Scott', 'But how do it know', 2],
[5, 50.0, 'Robert Cecil Martin', 'Clean Code', 3],
[12, 45.0, 'Peter Thiel', 'Zero to One', 4],
[9, 39.9, 'Kyle Simpson', 'You don/"t know JS', 5]
];


function searchBooks(name, amount, balance) {
    for (let i = 0; i < books.length; i++) {
        for (let j = 2; j < books[i].length; j++) { //I made it so that the first 2 colomn are not searched
            if (books[i][j] == name) {
                console.table(books);
                console.log(books[i]);
                console.log('*****book is available*****\n')
                let book = books[i];

                console.log('The amount you want is: ' + amount);
                if (book[0] < amount) {
                    console.log('\n**sorry the amount you ordered is not available**\n');
                    break;
                } else if (book[0] > amount) {
                    console.log('\n**amount available**\n');
                }

                console.log('your balance is: ' + balance);
                let total = book[1] * amount;
                if (total > balance) {
                    console.log('\n**sorry your balance is not enough**\n');
                    break;
                } else if (total < balance) {
                    console.log('\n**balance is enough**\n');
                }

                console.log('book name: ' + book[3]);
                console.log('book auther: ' + book[2]);
                console.log('your total will be: ' + total);

                let old = book[0];
                books[i].shift();
                if (old < amount) {
                    books[i].unshift(old)
                } else
                    books[i].unshift(old - amount);
                console.table(books);
            }
        }
    }
}


console.log(searchBooks('Simon Sinek', 3, 500));
