var infoUser = JSON.parse(localStorage.getItem("infoUser"));
console.log(infoUser);
if (infoUser != NaN) {
  document.getElementById("idSignIN").innerHTML = infoUser.name;
}

//! ----------------Get All Product ----------------
let getAllProduct = (pageIndex) => {
  var promise = axios({
    url: `https://shop.cyberlearn.vn/api/Product/getpaging?pageIndex=${pageIndex}&pageSize=9`,
    method: "GET",
  });
  promise.then(function (res) {
    renderProduct(res.data.content.items);
  });
  promise.catch(function (err) {
    console.log(err);
  });
};
getAllProduct(1);

//! ----------------Get Product for Category ----------------
let getAllProductCategory = (categoryId) => {
  var promise = axios({
    url: `https://shop.cyberlearn.vn/api/Product/getProductByCategory?categoryId=${categoryId}`,
    method: "GET",
  });
  promise.then(function (res) {
    console.log(res.data.content);
    renderProductCategory(res.data.content);
  });
  promise.catch(function (err) {
    console.log(err);
  });
};
//! ----------------Render Product price  high to low  ----------------
let getProductPriceHtoL = () => {
  var promise = axios({
    url: `https://shop.cyberlearn.vn/api/Product`,
    method: "GET",
  });
  promise.then(function (res) {
    console.log(res.data.content);
    renderProductPHL(res.data.content);
  });
  promise.catch(function (err) {
    console.log(err);
  });
};
//! ----------------Render Product price  low to high  ----------------
let getProductPriceLtoH = () => {
  var promise = axios({
    url: `https://shop.cyberlearn.vn/api/Product`,
    method: "GET",
  });
  promise.then(function (res) {
    // console.log(res.data.content);
    renderProductPLH(res.data.content);
  });
  promise.catch(function (err) {
    console.log(err);
  });
};
//! ---------------- Render Product ----------------
let renderProduct = (arr) => {
  let renderProduct = arr.map(
    (product) =>
      `
      <div class="col-12 col-md-6 col-xl-4 mb-4">
                <div class="card">
                  <a
                  href="./detail.html?productId=${product.id}"
                  "
                  >
                  <img src=https://shop.cyberlearn.vn/images/${product.image}
                  class="card-img-top" alt="shoe1" id="shoe1" />
                  </a>
                  
                  <div class="card-body">
                    <h3 class="card-title text-center">${product.name}</h3>
                    <h5 class="text-center my-3">${product.price}$</h5>
                    <div class="d-flex">
                      <a
                        href="./detail.html?productId=${product.id}"
                        class="btn w-50 me-1 btnShoes"
                      >
                        Buy now
                      </a>
                      <button class="btn w-50 ms-1 btnShoes">
                        Add cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
      `
  );
  document.getElementById("product").innerHTML = renderProduct.join("");
};
//! ---------------- Render Product Category ----------------
let renderProductCategory = (arr) => {
  let renderProductByCategory = arr.map(
    (productCategory) => `
    <div class="col-12 col-md-6 col-xl-4 mb-4">
              <div class="card">
                <a
                href="./detail.html?productId=${productCategory.id}"
                "
                >
                <img src=${productCategory.image}
                class="card-img-top" alt="shoe1" id="shoe1" />
                </a>
                
                <div class="card-body">
                  <h3 class="card-title text-center">${productCategory.name}</h3>
                  <h5 class="text-center my-3">${productCategory.price}$</h5>
                  <div class="d-flex">
                    <a
                      href="./detail.html?productId=${productCategory.id}"
                      class="btn w-50 me-1 btnShoes"
                    >
                      Buy now
                    </a>
                    <button class="btn w-50 ms-1 btnShoes">
                      Add cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
    `
  );

  document.getElementById("product").innerHTML =
    renderProductByCategory.join("");
};
//! ---------------- Render Product price  high to low ----------------
let renderProductPHL = (arr) => {
  let arrPHL = arr.sort((a, b) => a.price - b.price);
  console.log(arrPHL);
  let arrn = arrPHL.map(
    (item) =>
      `<div class="col-12 col-md-6 col-xl-4 mb-4">
    <div class="card ">
      <img
        src=${item.image}
        class="card-img-top"
        alt="shoe1"
        id="shoe1"
      />
      <div class="card-body">
        <h3 class="card-title text-center">
        ${item.name}
        </h3>
        <h5 class="text-center my-3">
        ${item.price}$
        </h5>
        <div class="d-flex">
          <a
          href="./detail.html?productId=${item.id}"
          class="btn w-50 me-1 btnShoes"
          >
          Buy now
          </a>
              <button class="btn w-50 ms-1 btnShoes">Add cart</button>
            </div>
      </div>
    </div>
  </div>`
  );

  document.getElementById("product").innerHTML = arrn.join("");
};
//! ---------------- Render Product price  low to high----------------
let renderProductPLH = (arr) => {
  console.log(arr);
  let arrPHL = arr.sort((a, b) => b.price - a.price);
  let arrn = arrPHL.map(
    (item) =>
      `<div class="col-12 col-md-6 col-xl-4 mb-4">
    <div class="card ">
      <img
        src=${item.image}
        class="card-img-top"
        alt="shoe1"
        id="shoe1"
      />
      <div class="card-body">
        <h3 class="card-title text-center">
        ${item.name}
        </h3>
        <h5 class="text-center my-3">
        ${item.price}$
        </h5>
        <div class="d-flex">
          <a
          href="./detail.html?productId=${item.id}"
          class="btn w-50 me-1 btnShoes"
          >
          Buy now
          </a>
              <button class="btn w-50 ms-1 btnShoes">Add cart</button>
            </div>
      </div>
    </div>
  </div>`
  );

  document.getElementById("product").innerHTML = arrn.join("");
};
