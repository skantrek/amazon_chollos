document.addEventListener("DOMContentLoaded", function() {
    const products = [
        {
            title: 'Tissue Box Safe',
            img: 'https://m.media-amazon.com/images/I/817rynJ+XzL._AC_SL1500_.jpg',
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
            link: 'https://amzn.to/4c1C2MT
        {
            title: 'Producto 6',
            img: 'https://m.media-amazon.com/images/I/61dHymGI3-L._AC_SY695_.jpg',
            link: 'https://amzn.to/4bUKeP4'
        },
        {
            title: 'Producto 7',
            img: 'https://m.media-amazon.com/images/I/61dHymGI3-L._AC_SY695_.jpg',
            link: 'https://amzn.to/4bUKeP4'
        },
        {
            title: 'Producto 8',
            img: 'https://m.media-amazon.com/images/I/61dHymGI3-L._AC_SY695_.jpg',
            link: 'https://amzn.to/4bUKeP4'
        },
        {
            title: 'Producto 9',
            img: 'https://m.media-amazon.com/images/I/61dHymGI3-L._AC_SY695_.jpg',
            link: 'https://amzn.to/4bUKeP4'
        },
        {
            title: 'Producto 10',
            img: 'https://m.media-amazon.com/images/I/61dHymGI3-L._AC_SY695_.jpg',
            link: 'https://amzn.to/4bUKeP4'
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

