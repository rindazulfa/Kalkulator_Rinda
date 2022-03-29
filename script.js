// Definisikan Function untuk Memperbarui Layar Tampilan
const calculatorScreen= document.querySelector('.calculator-screen')
const updateScreen = (number) => {
    calculatorScreen.value=number
}

// Mengambil element HTML di code Javascript
const numbers = document.querySelectorAll(".number");

// Cara menampilkan angka saat menekan tombol
numbers.forEach((number) => {
    number.addEventListener("click",(event)=>{
        updateScreen(event.target.value)
    })
})

// Definisikan Variable untuk melakukan kalkulasi
let prevNumber=''
let calculationOperator=''
let currentNumber=''

// Permasalahan saat 0 di pencet terlebih dahulu
const inputNumber=(number)=>{
    if (currentNumber === '0') {
        currentNumber=number
    } else {
        currentNumber+=number
    }
}

numbers.forEach((number)=>{
    number.addEventListener("click",(event)=>{
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

// Menambah Click event ke operator tombol-tombol
const operators= document.querySelectorAll(".operator")
operators.forEach((operator) =>{
    operator.addEventListener("click",(event)=>{
        inputOperator(event.target.value)
        
    })
})

// Definisikan function inputOperator
const inputOperator = (operator)=>{
    if (calculationOperator==='') {
        prevNumber= currentNumber
    }
    calculationOperator =operator
    currentNumber=''
}

// Jalankan Function Calculate saat tombol sama-dengna (=) di Klik
const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener('click',() =>{
    if (calculationOperator === "%") {
        persen();
    }else{
        calculate();
    }
    updateScreen(currentNumber)
})

// Simpan hasil Kalkulasi ke currentNumber
const calculate =() =>{
    let result =''  
    switch (calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break;
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break;
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break;
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break;
        default:
            break;
    }
    currentNumber = result
    calculationOperator=''
}

const percentage= document.querySelector(".percentage")
percentage.addEventListener("click",(event)=>{
        inputPersen(event.target.value)
        
})

// Definisikan function inputOperator
const inputPersen = (percentage)=>{
    if (calculationOperator==='') {
        prevNumber= currentNumber
    }
    calculationOperator =percentage
    currentNumber= '' 
}

// Menghitung persentase
const persen=()=>{
    let result =''
    result = (parseFloat(prevNumber)/100) *  parseFloat(currentNumber)
    currentNumber = result
    calculationOperator=''
}


// Definisikan dan jalankan Function clearAll
const clearAll=()=>{
    prevNumber=''
    calculationOperator=''
    currentNumber='0'
}

// Ambil Element Button dan tambahkan Click Event
const clearBtn = document.querySelector('.all-clear')
clearBtn.addEventListener('click', ()=>{
    clearAll()
    updateScreen(currentNumber)
})

// Definisikan dan jalankan Function inputDecimal
const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', (event)=>{
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

// Mencegah peng-inputan titik desimal berulang kali
inputDecimal=(dot)=>{
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}