document.addEventListener("DOMContentLoaded", function() {
    const products = [
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
            title: 'Producto 11',
            img: 'https://m.media-amazon.com/images/I/61dHymGI3-L._AC_SY695_.jpg',
            link: 'https://amzn.to/4bUKeP4'
        },
        {
            title: 'Producto 12',
            img: 'https://m.media-amazon.com/images/I/61dHymGI3-L._AC_SY695_.jpg',
            link: 'https://amzn.to/4bUKeP4'
        },
        {
            title: 'Producto 13',
            img: 'https://m.media-amazon.com/images/I/61dHymGI3-L._AC_SY695_.jpg',
            link: 'https://amzn.to/4bUKeP4'
        },
        {
            title: 'Producto 14',
            img: 'https://m.media-amazon.com/images/I/61dHymGI3-L._AC_SY695_.jpg',
            link: 'https://amzn.to/4bUKeP4'
        },
        {
            title: 'Producto 15',
            img: 'https://m.media-amazon.com/images/I/61dHymGI3-L._AC_SY695_.jpg',
            link: 'https://amzn.to/4bUKeP4'
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


