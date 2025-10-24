(()=>{

    const fullName = (firstName:string, lastName:(string | boolean)):string => {

            if(!firstName){throw new Error('nombre requerido')}

            return `${firstName} ${lastName}`;
    }

    const name = fullName('tony', 'stark');
    console.log(name)

})()