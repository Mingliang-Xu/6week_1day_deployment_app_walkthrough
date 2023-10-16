let myButton = document.querySelector('button')


let myDiv = document.querySelector("div");

myButton.addEventListener('click', () => {

    axios.get('/cats')
    .then((res)=>{
        let catName = res.date
        let newP = document.createElement('p')
        newP.innerHTML = catName
        myDiv.appendChild(newP)
    })
    .catch((err)=>{
        console.log(err)
    })



})