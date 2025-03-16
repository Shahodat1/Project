interface Product {
    id: number;
    title: string;
    price: number;
    img: string;
}

const product: Product[] = [
    {
        id: 1,
        title: "Google Pixel - Black",
        price: 699,
        img: "/img/1.jpg",
    },
    {
        id: 2,
        title: "Samsung S7",
        price: 599,
        img: "/img/2.jpg",
    },
    {
        id: 3,
        title: "HTC 10 - Black",
        price: 499,
        img: "/img/3.jpg",
    },
    {
        id: 4,
        title: "HTC 10 - White",
        price: 369,
        img: "/img/4.jpg",
    },
    {
        id: 5,
        title: "HTC Desire 626s",
        price: 699,
        img: "/img/5.jpg",
    },
    {
        id: 6,
        title: "Vintage iPhone",
        price: 599,
        img: "/img/6.jpg",
    },
    {
        id: 7,
        title: "iPhone 7",
        price: 499,
        img: "/img/7.jpg",
    },
    {
        id: 8,
        title: "Smashed iPhone",
        price: 369,
        img: "/img/8.jpg",
    },
]



const addToCartBtns: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.addToCart');


for (let i = 0; i < addToCartBtns.length; i++) {
    const button = addToCartBtns[i];
    button.addEventListener("click", () => {
        openModal(i);
        console.log("clicked");
        button.textContent = "In Cart";
    })
}

function openModal(id:number): void {
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

// Делаем функции доступными глобально
(window as any).openModal = openModal;
(window as any).closeModal = closeModal;
