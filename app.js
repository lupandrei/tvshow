const form =document.querySelector('#searchForm');
const section = document.querySelector('section');
form.addEventListener('submit',async function(e){
    e.preventDefault();
    const searchTerm= form.elements.query.value;
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
 

    const newDiv=document.createElement('div')
    newDiv.classList.add('container','d-md-flex','p-4')
    
    const h1 = document.createElement('h1');
    h1.classList.add('text-center','p-4')
    h1.innerText=res.data[0].show.name

    const img = document.createElement('img');
    img.src=res.data[0].show.image.original
    img.classList.add('img-fluid','w-25')
   

    let newP=document.createElement('p');
    newP.innerHTML=res.data[0].show.summary
    newP.classList.add('p-lead','p-3','text-justify')

    section.append(h1)
    newDiv.append(img)
    newDiv.append(newP)
    
    section.append(newDiv)
})
