function generateMaterial() {
    const topic = document.getElementById('topic').value;
    if(!topic) {
        alert("Please enter a topic name!");
        return;
    }
    
    document.getElementById('results').style.display = 'block';
    window.scrollTo({
        top: document.getElementById('results').offsetTop,
        behavior: 'smooth'
    });
}
