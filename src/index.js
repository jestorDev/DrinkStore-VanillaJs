

products = [
    
        {"id" : 29,
        "name" : 'RON FLOR DE CAÑA 5 AÑOS',
        "url_image" : 'https://dojiw2m9tvv09.cloudfront.net/11132/product/flor59677.jpg',
        "price" : '4590',
        "discount" : '0',
        "category" : '3' },
        {"id" : 30,
        "name" : 'RON HAVANA AÑEJO RESERVA',
        "url_image" : 'https://dojiw2m9tvv09.cloudfront.net/11132/product/havanaan-ejo9750.jpg',
        "price" : '6990',
        "discount" : '0',
        "category" : '3' },
        {"id" : 31,
        "name" : 'RON HAVANA ESPECIAL',
        "url_image" : 'https://dojiw2m9tvv09.cloudfront.net/11132/product/havanaespecial9768.jpg',
        "price" : '5990',
        "discount" : '20',
        "category" : '3' },
        {"id" : 32,
        "name" : 'RON PAMPERO',
        "url_image" : 'https://dojiw2m9tvv09.cloudfront.net/11132/product/pampero-especial0296.jpg',
        "price" : '5490',
        "discount" : '20',
        "category" : '3' },
        {"id" : 33,
        "name" : 'RON PAMPERO ANIVERSARIO',
        "url_image" : 'https://dojiw2m9tvv09.cloudfront.net/11132/product/ron_pampero_aniversario0311.jpg',
        "price" : '20000',
        "discount" : '15',
        "category" : '3' },
        {"id" : 34,
        "name" : 'ENERGETICA MONSTER RIPPER',
        "url_image" : 'https://dojiw2m9tvv09.cloudfront.net/11132/product/mosterriper0436.jpg',
        "price" : '1990',
        "discount" : '0',
        "category" : '1' },
        {"id" : 35,
        "name" : 'ENERGETICA MAKKA DRINKS',
        "url_image" : 'https://dojiw2m9tvv09.cloudfront.net/11132/product/makka-drinks-250ml0455.jpg',
        "price" : '1190',
        "discount" : '0',
        "category" : '1' }
        
]

productList =document.getElementById("product-list")

products.forEach(product => {
    productList.innerHTML += card1(product)
});



function card1(product) {
    return  `<div class="col-md-4">
    <div class="card mb-4 box-shadow">
    <div class="first">    
        <div class="d-flex justify-content-between align-items-center">
        <span class="discount">-${product.discount}%</span>
        <span class="wishlist"><i class="fa fa-heart-o"></i></span>
        </div>
    </div>
      <img class="card-img-top" src="${product.url_image}" alt="Card image cap">
      <div class="card-body">
        <p class="card-text">${product.name}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">BUY</button>
          </div>
          <small class="text-muted">CLP ${product.price}</small>
        </div>
      </div>
    </div>
  </div>`

}


function card2(product) {
    return ``

}
