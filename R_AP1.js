function afficherPDF(...pdfs) {
    const pdfViewer = document.getElementById('pdfViewer');
    const pdfFrame = document.getElementById('pdfFrame');

    if (pdfs.length === 1) {
        pdfFrame.src = pdfs[0];
    } else {
        let pdfContent = '';
        pdfs.forEach(pdf => {
            pdfContent += `<iframe src="${pdf}" width="100%" height="300px"></iframe>`;
        });
        pdfViewer.innerHTML = pdfContent;
    }
    
    pdfViewer.style.display = 'block';
}
