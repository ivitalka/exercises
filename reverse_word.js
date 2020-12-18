const str = 'Строчка из «Бури» Шекспира. Перевод Миxаила Донского';

const reverseWord = (n) => {
    const res = n.split(' ').reverse().join(' ');
    console.log(res)
};

reverseWord(str);