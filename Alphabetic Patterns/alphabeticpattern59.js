let string="";
for (let i = 1; i <= 5; i++)
    {
        for (let j = 1; j <= i; j++)
        {
            string += String.fromCharCode(j+64);
        }
        for (let j = 1; j <= (5 - i); j++)
        {
           string+="*";
        }
       string += "\n";
    }
    console.log(string);