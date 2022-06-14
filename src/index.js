const init = () => {
  const inputForm=document.querySelector('form');

  inputForm.addEventListener('submit',(e)=>{
    e.preventDefault();
   // Access Input Value Directly
   const input = document.querySelector('input#searchByID');
    /*accesing input value from an event object
    //e.target.children[1].value*/   
    //console.log(input.value);

    //Fetch Data Based on User Input
    fetch(`http://localhost:3000/movies/${input.value}`)
    .then(response =>response.json())
    .then(data =>{
        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p');

        title.innerText = data.title;
        summary.innerText = data.summary;
        //console.log(data);
    });
} );
}

document.addEventListener('DOMContentLoaded', init);

