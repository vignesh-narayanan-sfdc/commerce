document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { name: 'Gate Valve', image: 'gate-valve.jpg', description: 'High-quality gate valve for various applications.' },
        { name: 'Globe Valve', image: 'globe-valve.jpg', description: 'Durable globe valve with excellent flow control.' },
        { name: 'Check Valve', image: 'check-valve.jpg', description: 'Reliable check valve to prevent backflow.' }
    ];

    const productGrid = document.querySelector('.product-grid');

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}" style="width:100%; border-radius: 5px;">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
        `;
        productGrid.appendChild(productItem);
    });
});
