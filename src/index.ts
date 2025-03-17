interface Product {
    id: number;
    title: string;
    production: string;
    price: number;
    img: string;
}

const product: Product[] = [
    {
        id: 1,
        title: "Google Pixel - Black",
        production: "Google",
        price: 699,
        img: "/img/1.jpg",
    },
    {
        id: 2,
        title: "Samsung S7",
        production: "Samsung",
        price: 599,
        img: "/img/2.jpg",
    },
    {
        id: 3,
        title: "HTC 10 - Black",
        production: "HTC",
        price: 499,
        img: "/img/3.jpg",
    },
    {
        id: 4,
        title: "HTC 10 - White",
        production: "HTC",
        price: 369,
        img: "/img/4.jpg",
    },
    {
        id: 5,
        title: "HTC Desire 626s",
        production: "HTC",
        price: 699,
        img: "/img/5.jpg",
    },
    {
        id: 6,
        title: "Vintage iPhone",
        production: "Apple",
        price: 599,
        img: "/img/6.jpg",
    },
    {
        id: 7,
        title: "iPhone 7",
        production: "Apple",
        price: 499,
        img: "/img/7.jpg",
    },
    {
        id: 8,
        title: "Smashed iPhone",
        production: "Apple",
        price: 369,
        img: "/img/8.jpg",
    },
]



const addToCartBtns: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.addToCart');
const productsCarts: NodeListOf<HTMLDivElement> = document.querySelectorAll(".products_cart");


for (let i = 0; i < addToCartBtns.length; i++) {
    const button = addToCartBtns[i];
    const cart = productsCarts[i];
    button.addEventListener("click", (e) => {
        openModal(e,i);
        console.log("clicked");
        button.textContent = "In Cart";
    })

    cart.addEventListener("click" , () =>{
        aboutProduct(i);
    })
}

function openModal(event: Event, id: number): void {
    event.stopPropagation(); // Останавливаем всплытие
    const modal = document.querySelector("#modal") as HTMLDivElement | null;
    const modalTitle = document.querySelector('.modal_item_name') as HTMLHeadElement | null;
    const modalPrice = document.querySelector('.modal_item_price') as HTMLParagraphElement | null;
    const modalImg = document.querySelector('.modal_img') as HTMLImageElement | null;
    if (modal && modalTitle && modalPrice && modalImg) {
        const item = product[id];
        modalTitle.textContent = item.title;
        modalPrice.textContent = `Price: $ ${item.price}`;
        modalImg.src = item.img;

        modal.style.display = "flex";
        document.body.classList.add("modal-open");
    }
}


function closeModal(): void {
    const modal = document.querySelector("#modal") as HTMLDivElement | null;
    if (modal) {
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
    }
}

function aboutProduct(id: number): void{
    const products = document.querySelector(".products") as HTMLDivElement | null;
    if(products) products.style.display = "none";
    const aboutProduct = document.querySelector(".aboutProduct") as HTMLDivElement;
    aboutProduct.style.display = "block";
    

    const aboutImg = document.querySelector(".about_img") as HTMLImageElement | null;
    const aboutTitle = document.querySelector(".about_title") as HTMLHeadElement | null;
    const aboutModel = document.querySelector(".about_model") as HTMLHeadElement | null;
    const aboutProduction = document.querySelector(".about_production") as HTMLHeadElement | null;
    const aboutPrice = document.querySelector(".about_price") as HTMLHeadElement | null;

    if(aboutImg && aboutTitle && aboutModel && aboutProduction && aboutPrice){
        const item = product[id];
        aboutImg.src = item.img;
        aboutTitle.textContent = item.title;
        aboutModel.textContent = `Model: ${item.title}`;
        aboutProduction.textContent = `Made By: ${item.production}`;
        aboutPrice.textContent = `Price: $${item.price}`;
    }
}

function closeAboutProduct(): void {
    const aboutProduct = document.querySelector(".aboutProduct") as HTMLDivElement | null;
    const products = document.querySelector(".products") as HTMLDivElement | null;
    if (aboutProduct) aboutProduct.style.display = "none";
    if (products) products.style.display = "block";
}


// Делаем функции доступными глобально
// Делаем функции доступными глобально
(window as any).closeModal = closeModal;
(window as any).closeAboutProduct = closeAboutProduct;

