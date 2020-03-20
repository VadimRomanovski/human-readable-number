let numbers = ["zero","one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "ninteen"]
let elevens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
let tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
module.exports = function toReadable (number) {
    let array = number.toString().split('');
    let result = "";
    if(array.length==3 && +(array[1]+array[2])>=10 && +(array[1]+array[2])<=19){
        numbers.forEach((item, index) => {
            if(+array[0] == index){
                result+=item+" "+"hundred"
            }
        })
        elevens.forEach((item, index) => {
            if(+(array[1]+array[2])-10 == index){
                result+=" "+item;
            } 
        })  
    }else if(array.length==3){
        
        numbers.forEach((item, index) => {
            if(+array[0] == index){
                result+=item+" "+"hundred"
            }
        })
        tens.forEach((item, index) => {
            if(+array[1]-2 == index){
                result+=" "+item;
            } 
        })
        numbers.forEach((item, index) => {
            if(+array[2] == index && +array[2] != 0){
                result+=" "+item;
            }
        });
         
    }else if(array.length==2 && number>=10 && number<=19){
        
        elevens.forEach((item, index) => {
            if(+(array[0]+array[1])-10 == index){
                result+=item;
            } 
        })  
    }else if(array.length==2 && number>=20){
        
        tens.forEach((item, index) => {
            if(+array[0]-2 == index){
                result+=item;
            } 
        })
        numbers.forEach((item, index) => {
            if(+array[1] == index && +array[1] != 0){
                result+=" "+item;
            }
        });
         
    }else if(array.length==1){
        numbers.forEach((item, index) => {
            if(+array[0] == index){
                result+=item;
            }
        })
    }
    return result
}
