const productsList = [
    {
        id: 1,
        img: "https://res.cloudinary.com/freelencer/image/upload/v1654235869/LAB3_WEB2033_SONNHPH20433/2_voo1uj.png",
        title: "Big and Juicy Wagyu Beef Cheeseburger",
        time: "30 Minutes",
        type: "30 Healthy",
    },
    {
        id: 2,
        img: "https://res.cloudinary.com/freelencer/image/upload/v1654235869/LAB3_WEB2033_SONNHPH20433/3_mttyi1.png",
        title: "Fresh Lime Roasted Salmon",
        time: "30 Minutes",
        type: "30 Healthy",
    },
    {
        id: 3,
        img: "https://res.cloudinary.com/freelencer/image/upload/v1654235870/LAB3_WEB2033_SONNHPH20433/4_abgadk.png",
        title: "The Best Easy One Pot Chicken and Rice",
        time: "30 Minutes",
        type: "30 Healthy",
    },
    {
        id: 4,
        img: "https://res.cloudinary.com/freelencer/image/upload/v1654235870/LAB3_WEB2033_SONNHPH20433/5_ntnxcv.png",
        title: "Fresh and Healthy Mixed Mayonnaise",
        time: "30 Minutes",
        type: "30 Healthy",
    },
    {
        id: 5,
        img: "https://res.cloudinary.com/freelencer/image/upload/v1654235869/LAB3_WEB2033_SONNHPH20433/6_zrti5g.png",
        title: "The Creamiest Creamy Chicken",
        time: "30 Minutes",
        type: "30 Healthy",
    },
    {
        id: 6,
        img: "https://res.cloudinary.com/freelencer/image/upload/v1654235871/LAB3_WEB2033_SONNHPH20433/7_tn4faf.png",
        title: "Fruity Pancake with Orange & Blueberry",
        time: "30 Minutes",
        type: "30 Healthy",
    },
];
function showProducts(products){
    if(!Array.isArray(products) || products.length == 0){
        return false;
    }
    let result = "";
    for(let i = 0;i < products.length; i++){
        product = products[i];
        result += `
        <div class="colum mx-auto">
          <a href="detail.html?id=${product.id}" class="colum-img">
            <img
              src="${product.img}"
              alt="">
          </a>
          <div class="colum-content mt-4">
            <a href="detail.html?id=${product.id}"class="text-red-600 text-lg font-bold">${product.title}
            </a>
            <div class="flex space-x-2 mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="text-sm">${product.time}</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="text-sm">${product.type}</span>
            </div>
          </div>
        </div>
        `;
    }
    return result;
}
document.getElementById('products').innerHTML = showProducts(productsList)