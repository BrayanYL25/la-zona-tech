const factoryBootstrap = {
  createCard: (image, name, description, price, category, mark, available, stock) => { //style="width: 18rem;"
    return `
    <div class="card col-7 col-sm-5 col-md-4 col-lg-3">
      <img src="${image}" class="card-img-top pt-2" alt="${name}">
      <div class="card-body">
        <span class="badge text-bg-success">${category}</span>
        <span class="badge text-bg-primary">${mark}</span>
        ${!available ? '<span class="badge text-bg-danger">No disponible</span>' : ''}
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${description}</p>
      </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><strong>Stock: </strong>${stock}</li>
        </ul>
      <div class="card-body">
        <a href="#" class="btn btn-outline-primary">S/. ${price}</a>
      </div>
    </div>`
  },
  createPlaceholder: () => {
    return new DOMParser().parseFromString(`<div class="card col-7 col-sm-5 col-md-4 col-lg-3" aria-hidden="true">
    <img src="rect.svg" class="card-img-top" alt="...">
    <div class="card-body">
       <h5 class="card-title placeholder-glow">
         <span class="placeholder col-6"></span>
       </h5>
       <p class="card-text placeholder-glow">
         <span class="placeholder col-7"></span>
         <span class="placeholder col-4"></span>
         <span class="placeholder col-4"></span>
         <span class="placeholder col-6"></span>
         <span class="placeholder col-8"></span>
       </p>
       <a class="btn btn-outline-primary disabled placeholder col-6" aria-disabled="true"></a>
     </div>
   </div>`, 'text/html').querySelector('.card')
  }
}

export default factoryBootstrap

