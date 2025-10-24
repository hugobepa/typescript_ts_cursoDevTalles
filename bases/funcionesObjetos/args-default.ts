(()=>{

    const fullName = (firstName:string, lastName?:(string | boolean), upper:boolean= false):string => {

            if(!firstName){throw new Error('nombre requerido')}

            if(upper){
                return `${firstName} ${lastName || 'no lastName'}`.toUpperCase();
            }else{
                return `${firstName} ${lastName || 'no lastName'}`;
            }
           
    }

    const name = fullName('tony', 'stark');
    console.log(name)

})()