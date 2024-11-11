

document.getElementById('favorito').addEventListener('click', function() {
    const imgElement = this; 
    fetch(imgElement.src) 
        .then(response => response.text()) 
        .then(data => { 
            const parser = new DOMParser();
            const svgDoc = parser.parseFromString(data, "image/svg+xml");
            const svgElement = svgDoc.querySelector('path'); // Alterado para selecionar o elemento <path>
            const currentColor = svgElement.getAttribute('fill');
            svgElement.setAttribute('fill', currentColor === 'white' ? 'red' : 'white'); // Alterado para 'white' 
            const serializedSvg = new XMLSerializer().serializeToString(svgElement.ownerDocument.documentElement);
            const svgBlob = new Blob([serializedSvg], { type: 'image/svg+xml' });
            const url = URL.createObjectURL(svgBlob);
            imgElement.src = url;

            // Aumenta a imagem em 5% 
            imgElement.style.transform = imgElement.style.transform === 'scale(1.1)' ? 'scale(1)' : 'scale(1.1)';
        }); 
}); 