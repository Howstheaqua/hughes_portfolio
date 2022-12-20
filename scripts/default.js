function importFooter() {
    console.log('Loading footer');
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'components/footer.html', true);
    console.log(xhr.readyState);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementsByTagName(footer).innerHTML = xhr.responseText;
            console.log('Footer loaded');
        }
    }
}

window.onload = function() {
    importFooter();
}