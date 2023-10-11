let grossPay = 30000;

//The fuction working of PAYE Deductions

function payeDeductions() {
    if (grossPay < 24000) {
        return grossPay * 0;

    } else if (grossPay === 24000) {
        return grossPay * 0.1;


    } else if (grossPay <= 32333) {
        return grossPay * 0.25;

    } else if (grossPay <= 50000) {
        return grossPay * 0.3;

    } else if (grossPay <= 80000) {
        return grossPay * 0.325;

    } else {
        return grossPay * 0.35;
    }
}


// The fuction working on NHIF deductions
function nhifDeductions() {
    if (grossPay < 5999) {
        return 150;
    } else if (grossPay <= 7999) {
        return 300;
    } else if (grossPay <= 11999) {
        return 450;
    } else if (grossPay <= 14999) {
        return 600;
    } else if (grossPay <= 19999) {
        return 750;
    } else if (grossPay <= 24999) {
        return 900;
    } else if (grossPay <= 34999) {
        return 900;

    } else if (grossPay <= 39999) {
        return 950;

    } else if (grossPay<= 44999) {
        return 1000;

    } else if (grossPay <= 49999) {
        return 1100;

    } else if (grossPay<= 59999) {
        return 1200;

    } else if (grossPay <= 69999) {
        return 1300;

    } else if (grossPay<= 79999) {
        return 1400;

    } else if (grossPay<= 89999) {
        return 1500;

    } else if (grossPay <= 99999) {
        return 1600;

    } else {
        return 1700;
    }
}
//The fuction working on NSSF
function nssfDeductions() {
    const deduction = Math.floor(grossPay*0.06);
    return Math.min(deduction, 500);
}
//the function working on housing levy
function housingLevy (){
    return grossPay*0.015;
}

console.log("TOTAL DEDUCTIONS: ",   payeDeductions() + nhifDeductions() + nssfDeductions() + housingLevy(), "KES");
  console.log("NET PAY: ", grossPay-payeDeductions()-nhifDeductions()-nssfDeductions()-housingLevy(), "KES" );
  

  