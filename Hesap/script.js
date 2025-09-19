document.addEventListener('DOMContentLoaded', () => {
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const resultDisplay = document.getElementById('result-display');


    const isPrime = (num) => {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        for (let i = 5; i * i <= num; i = i + 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;
    };

    const getNumberOfPositiveDivisors = (num) => {
        if (num <= 0) return 0;
        if (num === 1) return 1;

        let n = num;
        const primeFactors = {};

        while (n % 2 === 0) {
            primeFactors[2] = (primeFactors[2] || 0) + 1;
            n /= 2;
        }

        for (let i = 3; i * i <= n; i += 2) {
            while (n % i === 0) {
                primeFactors[i] = (primeFactors[i] || 0) + 1;
                n /= i;
            }
        }

        if (n > 1) {
            primeFactors[n] = (primeFactors[n] || 0) + 1;
        }

        let divisorCount = 1;
        for (const prime in primeFactors) {
            divisorCount *= (primeFactors[prime] + 1);
        }

        return divisorCount;
    };

    const transformNumber = (num) => {
        if (isPrime(num)) {
            return num;
        } else {
            return getNumberOfPositiveDivisors(num);
        }
    };


    const calculate = (operation) => {
        const num1 = parseInt(num1Input.value, 10);
        const num2 = parseInt(num2Input.value, 10);

        if (isNaN(num1) || isNaN(num2)) {
            resultDisplay.textContent = 'Lütfen geçerli sayılar girin';
            return;
        }

        let standardResult;
        switch (operation) {
            case 'add':
                standardResult = num1 + num2;
                break;
            case 'subtract':
                standardResult = num1 - num2;
                break;
            case 'multiply':
                standardResult = num1 * num2;
                break;
            case 'divide':
                if (num2 === 0) {
                    resultDisplay.textContent = 'Sıfıra bölme hatası';
                    return;
                }
                standardResult = num1 / num2;
                break;
        }

        const transformedNum1 = transformNumber(num1);
        const transformedNum2 = transformNumber(num2);

        let specialResult;
        switch (operation) {
            case 'add':
                specialResult = transformedNum1 + transformedNum2;
                break;
            case 'subtract':
                specialResult = transformedNum1 - transformedNum2;
                break;
            case 'multiply':
                specialResult = transformedNum1 * transformedNum2;
                break;
            case 'divide':
                 if (transformedNum2 === 0) {
                    resultDisplay.textContent = 'Özel hesaplamada sıfıra bölme hatası';
                    return;
                }
                specialResult = transformedNum1 / transformedNum2;
                break;
        }

        const finalResult = standardResult - specialResult;
        resultDisplay.textContent = finalResult.toFixed(2); // Display with 2 decimal places
    };

    document.getElementById('add').addEventListener('click', () => calculate('add'));
    document.getElementById('subtract').addEventListener('click', () => calculate('subtract'));
    document.getElementById('multiply').addEventListener('click', () => calculate('multiply'));
    document.getElementById('divide').addEventListener('click', () => calculate('divide'));
});
