(()=>{

    const fullName = (firstName: string,...restArgs:string[]):string=>{
        return `${firstName}  ${restArgs.join(' ')}` 
    }


    const superman = fullName('Clarck','Joseph','kent');
    console.log({superman})
})()