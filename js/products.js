const productsList = [
    {
        id: 1,
        img: "https://res.cloudinary.com/freelencer/image/upload/v1654235869/LAB3_WEB2033_SONNHPH20433/2_voo1uj.png",
        title: "Big and Juicy Wagyu Beef Cheeseburger",
    },
    {
        id: 2,
        img: "https://res.cloudinary.com/freelencer/image/upload/v1654235869/LAB3_WEB2033_SONNHPH20433/3_mttyi1.png",
        title: "Fresh Lime Roasted Salmon",
    },
    {
        id: 3,
        img: "https://res.cloudinary.com/freelencer/image/upload/v1654235870/LAB3_WEB2033_SONNHPH20433/4_abgadk.png",
        title: "The Best Easy One Pot Chicken and Rice",
    },
    {
        id: 4,
        img: "https://res.cloudinary.com/freelencer/image/upload/v1654235870/LAB3_WEB2033_SONNHPH20433/5_ntnxcv.png",
        title: "Fresh and Healthy Mixed Mayonnaise",
    },
    {
        id: 5,
        img: "https://res.cloudinary.com/freelencer/image/upload/v1654235869/LAB3_WEB2033_SONNHPH20433/6_zrti5g.png",
        title: "The Creamiest Creamy Chicken",
    },
    {
        id: 6,
        img: "https://res.cloudinary.com/freelencer/image/upload/v1654235871/LAB3_WEB2033_SONNHPH20433/7_tn4faf.png",
        title: "Fruity Pancake with Orange & Blueberry",
    },
];
function showProducts(products){
    if(!Array.isArray(products) || products.length == 0){
        return false;
    }
    let result = "";
    for(let i = 0;i < products.length; i++){
        const product = products[i];
        result += `
        <div class="colum mx-auto xl:mx-0">
                    <div class="colum-img">
                        <img src="${product.img}"
                            alt="" class="rounded-2xl" />
                    </div>
                    <div class="colum-content">
                        <a href="page2.html">
                            <h3 class="text-lg font-bold my-3">
                            ${product.title}
                            </h3>
                        </a>
                        <span class="text-xl text-red-600 block font-bold mb-3">$30</span>
                        <a href="" class="text-sm bg-black rounded-md text-white block py-3 text-center mb-10">Add To
                            Cart</a>
                    </div>
                    <div class="colum-img">
                        <img src="${product.img}"
                            alt="" class="rounded-2xl" />
                    </div>
                    <div class="colum-content">
                        <a href="page2.html">
                            <h3 class="text-lg font-bold my-3">
                            ${product.title}
                            </h3>
                        </a>
                        <span class="text-xl text-red-600 block font-bold mb-3">$30</span>
                        <a href="" class="text-sm bg-black rounded-md text-white block py-3 text-center">Add To Cart</a>
                    </div>
                </div>
        `;
    }
    return result;
}
document.getElementById('products').innerHTML = showProducts(productsList)