

document.getElementById('favorito').addEventListener('click', function() {
    const imgElement = this; 
    fetch(imgElement.src) 
        .then(response => response.text()) 
        .then(data => { 
            const parser = new DOMParser();
            const svgDoc = parser.parseFromString(data, "image/svg+xml"); 
            const svgElement = svgDoc.querySelector('path'); 
            const currentColor = svgElement.getAttribute('fill'); svgElement.setAttribute('fill', currentColor === 'white' ? 'red' : 'white'); 
            const serializedSvg = new XMLSerializer().serializeToString(svgElement); 
            const svgBlob = new Blob([serializedSvg], { type: 'image/svg+xml' }); 
            const url = URL.createObjectURL(svgBlob); imgElement.src = url; 
        }); 
}); 