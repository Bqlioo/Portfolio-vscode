function afficherPDF(pdfUrl) {
    const pdfViewer = document.getElementById('pdfViewer');
    const pdfFrame = document.getElementById('pdfFrame');

    pdfFrame.src = pdfUrl;
    pdfViewer.style.display = 'block';
}
