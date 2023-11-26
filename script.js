function savetoLocalStorage (event){
    event.preventDefault()
    const name=document.getElementById('name').value
    const email=document.getElementById('email').value
    const phonenumber=document.getElementById('phonenumber').value

    const obj={
        name:name,
        email:email,
        phonenumber:phonenumber
    }

    localStorage.setItem(email,JSON.stringify(obj))
    alert("Data Saved")
    showUserOnScreen(obj)
} 
 function showUserOnScreen(user){
    const element=document.getElementById('user-form');
    const li=document.createElement('li')
    li.innerHTML=`${user.name}-${user.email}-${user.phonenumber}`;
    
    element.appendChild(li);

    const deletebutton=document.createElement('input');
    deletebutton.type='button';
    deletebutton.value='Delete';
    deletebutton.onclick=()=>{
        localStorage.removeItem(email);
        element.removeChild(li)

    }

    const editbutton=document.createElement('input');
    editbutton.type='button';
    editbutton.value='edit';

    editbutton.onclick=()=>{
        localStorage.removeItem(email);
        element.removeChild(li);

        document.getElementById('name').value=obj.name;
        document.getElementById('email').value=obj.email;
        document.getElementById('phonenumber').value=obj.phonenumber;
    }
    li.appendChild(deletebutton);
    li.appendChild(editbutton);
    element.appendChild(li);
}