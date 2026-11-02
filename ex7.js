// ex7.js
function loadUser(callback) {
  setTimeout(() => callback("Dana"), 30);
}

function loadOrders(callback) {
  setTimeout(() => callback(3), 10);
}

function run() {
   let user;
  let orders;
  let userLoaded = false;
  let ordersLoaded = false;

  function printWhenReady() {
    if (userLoaded && ordersLoaded) {
      console.log("User: " + user);
      console.log("Orders: " + orders);
    }
  }
  loadUser((name) => {
    user = name;
     userLoaded = true;
    printWhenReady();
  });

  loadOrders((count) => {
     orders = count;
    ordersLoaded = true;
    printWhenReady();
  });

  
}

if (typeof module !== "undefined") module.exports = { run };
