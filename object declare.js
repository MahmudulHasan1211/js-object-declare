const mahmudul = {
    fullName: 'mahmudul hasan',
    id: 221902172,
    institute: 'green university of bangladesh',
    degree: {
        ssc: true,
        hsc: true,
        psc: true,
        jsc: true,
        Bsc: {
            year: 2022 - 2035,
        }
    },
    msc: false,
    friends: ['rakib', 'sabbir', 'utshob', 'tamim']
}
console.log(mahmudul.msc);


// arguments
function num (n1, n2){
    let sum = n1+ n2;
    console.log(sum)
    console.log(arguments)
   
}

num(77,23,77,23)