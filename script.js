document.addEventListener("DOMContentLoaded", function() {
    const products = [
        {
            title: 'Music Boxing Machine',
            img: 'https://m.media-amazon.com/images/I/81t9jcTVYPL._AC_SL1500_.jpg',
            link: 'https://amzn.to/4gn9rVF'
        },
        {
            title: 'Personal Shopping Cart',
            img: 'https://m.media-amazon.com/images/I/71rlPd2-wZL._AC_SL1500_.jpg',
            link: 'https://amzn.to/4dqLcDO'
        },
        {
            title: 'Tissue Box Safe',
            img: 'https://m.media-amazon.com/images/I/71dQ7jhp4kL._AC_SL1500_.jpg',
            link: 'https://amzn.to/3Wmp7z9'
        },
        {
            title: 'Hidden Package Bush',
            img: 'https://m.media-amazon.com/images/I/41lFWhl2KOL._AC_.jpg',
            link: 'https://amzn.to/4cWqn3d'
        },
        {
            title: 'Invisible Cabinet Lock',
            img: 'https://m.media-amazon.com/images/I/61iwaWorWlL._AC_SL1000_.jpg',
            link: 'https://amzn.to/4c1LqjI'
        },
        {
            title: 'Fake Light Bulb',
            img: 'https://m.media-amazon.com/images/I/51V-JIHJbYL._AC_.jpg',
            link: 'https://amzn.to/4dg2BPk'
        },
        {
            title: 'Hidden Drawer',
            img: 'https://m.media-amazon.com/images/I/51e-9KXxKdL._AC_SL1052_.jpg',
            link: 'https://amzn.to/4c1C2MT'
        },
        {
            title: 'Picture Frame Safe',
            img: 'https://m.media-amazon.com/images/I/81eXR8H3+WL._AC_SL1500_.jpg',
            link: 'https://amzn.to/4cXu20N'
        },
        {
            title: 'Govee Curtain Lights',
            img: 'https://m.media-amazon.com/images/I/81MMHdCWb0L._AC_SL1500_.jpg',
            link: 'https://amzn.to/4cZyVGC'
        },
        {
            title: 'Narwal Freo X Ultra',
            img: 'https://m.media-amazon.com/images/I/61BZUKgzTuL._AC_SL1500_.jpg',
            link: 'https://amzn.to/3Yodb2C'
        },
        {
            title: 'Eureka Rapid Wash',
            img: 'https://m.media-amazon.com/images/I/61T6jN9AYrL._AC_SL1500_.jpg',
            link: 'https://amzn.to/3Stp4k1'
        },
        {
            title: 'Turf Pee Pad For Dogs',
            img: 'https://m.media-amazon.com/images/I/71FM21Q6hBL._AC_SL1500_.jpg',
            link: 'https://amzn.to/3Sr0W1y'
        },
        {
            title: 'Bath Glove For Pet',
            img: 'https://m.media-amazon.com/images/I/71U1ddkAPyL._AC_SL1500_.jpg',
            link: 'https://amzn.to/3y6DDDj'
        },
        {
            title: 'Dual Untangle Leash',
            img: 'https://m.media-amazon.com/images/I/71oi6yhkEzL._AC_SL1500_.jpg',
            link: 'https://amzn.to/4d38lfA'
        },
        {
            title: 'Suction Tug Toy',
            img: 'https://m.media-amazon.com/images/I/71WT4A1M21L._AC_SL1500_.jpg',
            link: 'https://amzn.to/3ygw64Q'
        },
        {
            title: 'Nail Trimmer',
            img: 'https://m.media-amazon.com/images/I/717UALT1oLL._AC_SL1500_.jpg',
            link: 'https://amzn.to/3Ynz6qy'
        },
        {
            title: 'Outdoor Dog Tent',
            img: 'https://m.media-amazon.com/images/I/71bW8NxIICS._AC_SL1500_.jpg',
            link: 'https://amzn.to/3WEorqh'
        },
        {
            title: 'Furbo 360 Pet Camera',
            img: 'https://m.media-amazon.com/images/I/61LRvAXMi7L._AC_SL1500_.jpg',
            link: 'https://amzn.to/4dn5vlg'
        },
        {
            title: 'Human Dog Bed',
            img: 'https://m.media-amazon.com/images/I/91gRfhnC3-L._AC_SL1500_.jpg',
            link: 'https://amzn.to/4cYCmNJ'
        },
        {
            title: 'Self Rolling Ball',
            img: 'https://m.media-amazon.com/images/I/61F403FcokL._AC_SL1500_.jpg',
            link: 'https://amzn.to/3LI4yIu'
        },
        {
            title: 'Paw Cleaner',
            img: 'https://m.media-amazon.com/images/I/71D2Vym14XL._AC_SL1500_.jpg',
            link: 'https://amzn.to/4do2P72'
        },
        {
            title: 'Trolley Leash',
            img: 'https://m.media-amazon.com/images/I/81ELn-Y4nqL._AC_SL1500_.jpg',
            link: 'https://amzn.to/3A5Jfyg'
        },
        {
            title: 'Butter Cutter',
            img: 'https://m.media-amazon.com/images/I/41cFoI4NOdL._AC_SL1000_.jpg',
            link: 'https://amzn.to/46qX8D4'
        },
        {
            title: 'Bottle Magnets',
            img: 'https://m.media-amazon.com/images/I/81jhdcGAtwL._SL1500_.jpg',
            link: 'https://amzn.to/3A4MplT'
        },
        {
            title: 'Strawberry Pitter',
            img: 'https://m.media-amazon.com/images/I/61a1Lc+g+TL._AC_SL1500_.jpg',
            link: 'https://amzn.to/3AdHCOP'
        },
         {
            title: 'Rhinoshield Water Bottle',
            img: 'https://m.media-amazon.com/images/I/61hHpofKSWL._AC_SL1500_.jpg',
            link: 'https://amzn.to/4dqvE2V'
        },
        {
            title: 'Rice Dispenser',
            img: 'https://m.media-amazon.com/images/I/51X8CRLzOLL._AC_SL1500_.jpg',
            link: 'https://amzn.to/4dk5nTO'
        },
        {
            title: 'Fruit Washer',
            img: 'https://m.media-amazon.com/images/I/71TI3vvEm8L._AC_SL1500_.jpg',
            link: 'https://amzn.to/3A6xaJ5'
        },
        {
            title: 'Metal Ice Cubes',
            img: 'https://m.media-amazon.com/images/I/718up+MnEYL._AC_SL1500_.jpg',
            link: 'https://amzn.to/3SuBZ5k'
        },
        {
            title: 'Paper Towel Holder',
            img: 'https://m.media-amazon.com/images/I/71K8LOWTPBL._AC_SL1500_.jpg',
            link: 'https://amzn.to/3SsnY8a'
        },
        {
            title: 'Cute Rabbit Bowl',
            img: 'https://m.media-amazon.com/images/I/51k3YuuPZXL._AC_SL1000_.jpg',
            link: 'https://amzn.to/3SxH0tN'
        },
        {
            title: 'Electric Can Opener',
            img: 'https://m.media-amazon.com/images/I/61eqNRPW8mL._AC_SL1500_.jpg',
            link: 'https://amzn.to/46oRb9S'
        },
        {
            title: 'Microwave Pasta Maker',
            img: 'https://m.media-amazon.com/images/I/81G1AHpRXML._AC_SL1500_.jpg',
            link: 'https://amzn.to/4fqtDWk'
        },
        {
            title: 'Chicken Shredder',
            img: 'https://m.media-amazon.com/images/I/614QR0feY2L._AC_SL1500_.jpg',
            link: 'https://amzn.to/3A0cnXr'
        },
        {
            title: 'Wine Wash',
            img: 'https://m.media-amazon.com/images/I/71VXSAaDgZL._AC_SL1500_.jpg',
            link: 'https://amzn.to/46sXt8c'
        },
        {
            title: 'Bottle Opener',
            img: 'https://m.media-amazon.com/images/I/61j2ECTpK3L._AC_SL1500_.jpg',
            link: 'https://amzn.to/4c4YnJe'
        },
        {
            title: 'Oven Liners',
            img: 'https://m.media-amazon.com/images/I/71k+G+WDC8L._AC_SL1500_.jpg',
            link: 'https://amzn.to/3A4qr2e'
        },
        {
            title: 'Cleaning Tablets',
            img: 'https://m.media-amazon.com/images/I/810nT55bC1L._AC_SL1500_.jpg',
            link: 'https://amzn.to/46sXJnG'
        },
        
        // Agrega más productos según sea necesario
    ];

    const productList = document.getElementById('productList');

    function displayProducts(filteredProducts) {
        productList.innerHTML = ''; // Limpiar resultados anteriores
        filteredProducts.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <a href="${product.link}" target="_blank">
                    <img src="${product.img}" alt="${product.title}">
                </a>
                <a href="${product.link}" target="_blank">${product.title}</a>
            `;
            productList.appendChild(productDiv);
        });
    }

    function searchProducts() {
        const query = document.getElementById('searchInput').value.toLowerCase();
        const filteredProducts = products.filter(product => product.title.toLowerCase().includes(query));
        displayProducts(filteredProducts);
    }

    // Mostrar todos los productos al cargar la página
    displayProducts(products);

    // Agregar el evento input al campo de búsqueda
    document.getElementById('searchInput').addEventListener('input', searchProducts);
});


