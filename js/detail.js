let getIdProduct = (idProduct) => {
  var promise = axios({
    url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${idProduct}`,
    method: "GET",
  });
  promise.then(function (res) {
    renderProductId(res.data.content);
    renderRelatedProducts(res.data.content.relatedProducts);
    renderSize(res.data.content.size);
  });
  promise.catch(function (err) {
    console.log(err);
  });
};
// function () || () =>
window.onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("productId");

  getIdProduct(myParam);
};
let renderProductId = (arr) => {
  var content = "";
  content += `
  <div class="d-flex">
            <div class="product__img w-50 d-flex justify-content-center">
              <img
                src=${arr.image}
                style="height: 400px; width: 400px"
              />
            </div>
            <div class="product__content w-50">
              <h1>${arr.name}</h1>
              <p>${arr.alias}</p>
              <p>${arr.price}$</p>
              <p>Select size</p>
              <div class="row w-50" id="size"></div>
              
              <p class="w-50">
              ${arr.description}
              </p>
            </div>
          </div>
  `;

  document.getElementById("detailId").innerHTML = content;
};
let renderSize = (arr) => {
  console.log(arr);
  let size = arr.map(
    (size) => `
    <div class="col-4 mb-3 ">
        <button class="" style="width: 50px; height: 50px">${size}</button>
    </div>`
  );
  document.getElementById("size").innerHTML = size.join("");
};
let renderRelatedProducts = (arr) => {
  let renderProduct = arr.map(
    (product) =>
      `
      <div class="col-12 col-md-6 col-xl-4 mb-4">
                <div class="card">
                  <a
                  href="./detail.html?productId=${product.id}"
                  "
                  >
                  <img src=${product.image}
                  class="card-img-top" alt="shoe1" id="shoe1" />
                  </a>
                  
                  <div class="card-body">
                    <h3 class="card-title text-center">${product.name}</h3>
                    <h5 class="text-center my-3">${product.price}$</h5>
                    <div class="d-flex">
                      <a
                        href="./detail.html?productId=${product.id}"
                        class="btn btn-danger w-50 me-1 btnShoes"
                      >
                        Buy now
                      </a>
                      <button class="btn btn-danger w-50 ms-1 btnShoes">
                        Add cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
      `
  );
  document.getElementById("relatedProducts").innerHTML = renderProduct.join("");
};
