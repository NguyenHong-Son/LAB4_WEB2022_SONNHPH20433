const detailList = [
    {
        id: 1,
        title: "Big and Juicy Wagyu Beef Cheeseburger",
        money: "$30",
        content: "Pellentesque habitant morbi tristique senectus et netus et malesuada  fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        img: "https://res.cloudinary.com/freelencer/image/upload/v1654235869/LAB3_WEB2033_SONNHPH20433/2_voo1uj.png"
    },
    {
        id: 2,
        title: "Fresh Lime Roasted Salmon",
        money: "$35",
        content: "Pellentesque habitant morbi tristique senectus et netus et malesuada  fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        img: "https://res.cloudinary.com/freelencer/image/upload/v1654235869/LAB3_WEB2033_SONNHPH20433/3_mttyi1.png"
    },
    {
        id: 3,
        title: "The Best Easy One Pot Chicken and Rice",
        money: "$20",
        content: "Pellentesque habitant morbi tristique senectus et netus et malesuada  fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        img: "https://res.cloudinary.com/freelencer/image/upload/v1654235870/LAB3_WEB2033_SONNHPH20433/4_abgadk.png"
    },
    {
        id: 4,
        title: "Fresh and Healthy Mixed Mayonnaise ",
        money: "$40",
        content: "Pellentesque habitant morbi tristique senectus et netus et malesuada  fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        img: "https://res.cloudinary.com/freelencer/image/upload/v1654235870/LAB3_WEB2033_SONNHPH20433/5_ntnxcv.png"
    },
    {
        id: 5,
        title: "The Creamiest Creamy Chicken",
        money: "$50",
        content: "Pellentesque habitant morbi tristique senectus et netus et malesuada  fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        img: "https://res.cloudinary.com/freelencer/image/upload/v1654235869/LAB3_WEB2033_SONNHPH20433/6_zrti5g.png"
    },
    {
        id: 6,
        title: "Fruity Pancake with Orange & Blueberry",
        money: "$33",
        content: "Pellentesque habitant morbi tristique senectus et netus et malesuada  fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        img: "https://res.cloudinary.com/freelencer/image/upload/v1654235871/LAB3_WEB2033_SONNHPH20433/7_tn4faf.png"
    },
];
function showDetail(details){
    if(!Array.isArray(details) || details.length == 0){
        return false;
    }
    const id = new URLSearchParams(window.location.search).get("id");
    let result = "";
    const detail = details.find((item) => item.id == id);
    result = `
    <div class="px-5 xl:px-0">
                <h1 class="text-4xl font-bold mb-5 text-center md:text-left">
                    ${detail.title}
                </h1>
                <span class="text-4xl text-red-600 mb-5 block text-center md:text-left">${detail.money}</span>
                <p class="text-lg font-medium mb-5 text-center md:text-left">
                    ${detail.content}
                </p>
                <form action="" class="text-center md:text-left">
                    <input type="text" placeholder="Quantity" class="p-2 border rounded-md text-sm mr-3" />
                    <input type="submit" value="Add To Cart" class="py-2 px-3 bg-black text-white rounded-md text-sm" />
                </form>
            </div>
            <div class="px-5 xl:px-0">
                <img src="${detail.img}"
                    alt="" class="w-full" />
            </div>
    `;
    return result;
}
document.getElementById("detail").innerHTML = showDetail(detailList);
