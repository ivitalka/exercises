const str = 'топот';

const palindrome = (n) => {
    const result = n.split('').reverse().join('');
    if (result === str) {
        console.log('Это палиндром')
    }
    else {
        console.log('Это не палиндром')
    }
};

palindrome(str);