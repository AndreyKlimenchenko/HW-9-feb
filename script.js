function task1() {
    const arr = [1, 2, 3, 4, 5];
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
};

function task2() {
    const arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < -3 && arr[i] > -10){
            console.log(arr[i]);
        }
    }
};

function task3() {
    const arr = [23, 25, 29, 30, 32, 37, 40, 41, 44, 49, 51, 55, 57];
    let i = 23;
    while (i <= 57) { 
    console.log(i);
    i++;
    }
    let result = 0;
    for(let a = 0; a < arr.length; a++) {
        result += arr[a];
    }
    console.log(result);
};

function task4() {
    let arr = ['10', '20', '30', '50', '235', '3000'];
    console.log(arr.filter(num => ['1','2','5'].includes(num.toString()[0])));
};

function task5() {
    const arr = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] === 'СБ') || (arr[i] === 'ВС')) {
            document.write(`<strong>${arr[i]}</strong><br/>`)
            
        }else {
            document.write(`${arr[i]}<br/>`)
        }
    }
};

function task6() {
    const arr = [32, 27, 755, 104, 47, 78, 377];
    arr.push(1990);
    console.log(arr[arr.length - 1]);
};

function task7() {
    let i = prompt('Enter the number', 11);
    const array = [];
    while (i) {
        array.push(+i);
        i = prompt('Enter the number', 8);
    };
    array.sort((a, b) => a - b)
    console.log(array);
};




