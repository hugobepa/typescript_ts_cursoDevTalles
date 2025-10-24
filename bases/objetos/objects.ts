(()=>{

    let flash :{name:string, age?:number,powers: string[],getName?:()=>string} ={
        name: 'Barry Allen',
        age: 24,
        powers: ['super velocidad','viajar en el tiempo'],
        
    }

    let superman :{name:string, age?:number,powers: string[],getName?:()=>string} ={
        name: 'Clark kent',
        age: 50,
        powers: ['super velocidad'],
        
    }


    // flash ={
    //   name:'clark Kent',
    // //     age: 60,
    //     powers:['superfuerza'],
    //         getName(){return this.name},
       
    // }

     console.log(flash.getName)
})()