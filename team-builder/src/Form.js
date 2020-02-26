import React, {useState} from 'react';




function Form({teamMates, setTeamMates}){
    
    const [person, setPerson] = useState({
        name: "",
        email: "",
        role: ""
    })
    const iChangeShit = event => {
        setPerson({...person, [event.target.name]: event.target.value})
    }
    const iSumbmitShit = (e) => {
        e.preventDefault();
        
        setTeamMates([...teamMates,person])
        setPerson({ name: "",
        email: "",
        role: ""});
        
    }
return(
<form onSubmit={iSumbmitShit}>
    <input type="text" name="name" placeholder="Name" value= {person.name} onChange={ event => iChangeShit(event)} />
    <input type="text" name="email" placeholder="Email" value= {person.email} onChange={ event => iChangeShit(event)}/>
    <input type="text" name="role" placeholder="Role" value= {person.role}onChange={ event => iChangeShit(event)}/>

    <button>Sumbmit</button>
</form>
)};


export default Form