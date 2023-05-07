function generateJSONLD() {
    const productName = document.getElementById("product-name").value;
    const productImage = document.getElementById("product-image").value;
    const productDescription = document.getElementById("product-description").value;
    const productPrice = document.getElementById("product-price").value;

    const productJSONLD = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": productName,
        "image": productImage,
        "description": productDescription,
        "offers": {
            "@type": "Offer",
            "price": productPrice,
            "priceCurrency": "rub"
        }
    };

    const output = JSON.stringify(productJSONLD, null, 2);
    const jsonldOutput = document.getElementById("jsonld-output");

    if (jsonldOutput.innerHTML !== "") {
        jsonldOutput.innerHTML += ",";
    }

    const newOutput = document.createElement("pre");
    newOutput.innerText = output;
    jsonldOutput.appendChild(newOutput);  
    
}