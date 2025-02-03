function startLoading() {
    let username = document.getElementById("username").value;
    if (username.trim() === "") {
        alert("Masukkan username terlebih dahulu!");
        return;
    }

    document.getElementById("welcome-screen").style.display = "none";
    document.getElementById("loading-screen").style.display = "block";
    document.getElementById("loading-username").innerText = username;

    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("main-content").style.display = "block";
        document.getElementById("user-greeting").innerText = `Selamat Datang, ${username}`;
    }, 15000);
}

function showPopup(product, price) {
    let username = document.getElementById("username").value;
    document.getElementById("order-popup").style.display = "block";
    document.getElementById("popup-product").innerText = `Anda membeli ${product} seharga Rp ${price}`;
    
    document.getElementById("confirm-order").onclick = function() {
        let whatsappMessage = `Saya ${username} MEMBELI ${product} dan ini bukti TF nya.`;
        window.open(`https://wa.me/6287836518013?text=${encodeURIComponent(whatsappMessage)}`);
    };
}

function closePopup() {
    document.getElementById("order-popup").style.display = "none";
}
