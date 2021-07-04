
  //const contenedor = document.getElementById('container');

  


  const arrayPerritos =[
     {id: 1,  nombre: 'telefono/correo',  pais: 'pais', descripcion:'Lorem ipsum, dolor sit amet consectetur adipisicing elit'},
     {id: 2,  nombre: 'telefono/correo',  pais: 'pais', descripcion:'Lorem ipsum, dolor sit amet consectetur adipisicing elit'},
     {id: 3,  nombre: 'telefono/correo',  pais: 'pais', descripcion:'Lorem ipsum, dolor sit amet consectetur adipisicing elit'},
     {id: 4,  nombre: 'telefono/correo',  pais: 'pais', descripcion:'Lorem ipsum, dolor sit amet consectetur adipisicing elit'},
     {id: 5,  nombre: 'telefono/correo',  pais: 'pais', descripcion:'Lorem ipsum, dolor sit amet consectetur adipisicing elit'},
     {id: 6,  nombre: 'telefono/correo',  pais: 'pais', descripcion:'Lorem ipsum, dolor sit amet consectetur adipisicing elit'},
     {id: 7,  nombre: 'telefono/correo',  pais: 'pais', descripcion:'Lorem ipsum, dolor sit amet consectetur adipisicing elit'},
     {id: 8,  nombre: 'telefono/correo',  pais: 'pais', descripcion:'Lorem ipsum, dolor sit amet consectetur adipisicing elit'},

  ]


 

  const  info1 = document.getElementById('c1');

  const datos = ({id, nombre, pais,descripcion}) => {
    return `
    <div class="di1">
       
        ${id}<br>
        <br>
        ${nombre}<br>
        <br>
        ${pais}<br>
        <br>
        ${descripcion}<br>
        <br></br>
   </div>
    `
 };

 //for (data of arrayPerritos) {
    //let div = document.createElement('div')
    //div.innerHTML = datos(data)
    //info1.appendChild(div)
 //}

 arrayPerritos.forEach((info) =>{
    let div = document.createElement('div')
    div.innerHTML = datos(info)
    info1.appendChild(div)

    div.setAttribute('class', 'container');
});






  