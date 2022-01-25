
let sum = prompt('Enter your income, $'); 
let taxbases = [0, 9950, 40525, 86375, 164925, 209425, 523600];
let rates =    [   0.1,   0.12, 0.22, 0.24, 0.32, 0.35, 0.37];
let minbase = 12550;
let totalsum = sum - minbase;
if (sum <= minbase) 
   {
    alert ('Your fit sum = 0$');
   }  
else if (totalsum<taxbases[1])
   {
    taxsum = totalsum*rates[0];
    alert (`Your fit sum = ${taxsum}$`);
  }
  
else 
 {
   let j=0;
   let taxsum =0;
    for (let i = taxbases.length - 1 ; i>0; i--)  
    {      
      if (totalsum > taxbases[i])
      {
      let firstsum;  
      if (j==0) 
        {firstsum = (totalsum - taxbases[i])*rates[i];
        taxsum = taxsum+firstsum;
         j++;
         console.log(`j=${j}`);
         console.log(`taxsum = ${taxsum}`);
        }
        let mainsum = (taxbases[i] - taxbases[i-1])*rates[i-1];
        taxsum = taxsum+mainsum;
         console.log(`i=${i}`);
         console.log(`mainsum=${mainsum}`);    
         console.log(`taxsum = ${taxsum}`);
      }   
    }  
    alert (`Your fit sum = ${taxsum}$`);
  }































