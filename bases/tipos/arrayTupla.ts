(()=>{

    //array

     const number = [1,2,3,4,5,'6',7,8];
    const number2 : (string | number)[]= [1,2,3,4,5,'6',7,8];
     const number3 : number []= [1,2,3,4,5,7,8];

     const villain =['omega rojo','dormammu','duende verde'];

     villain.forEach(e => { console.log(e.toLocaleUpperCase()) });

     //tuples

     const hero: [string, number,boolean] =['Dr strange',100,true];

     hero[0]  = 'Iroman';
     hero[1] =50;
     hero[2] =false;

     console.log(hero)

})()