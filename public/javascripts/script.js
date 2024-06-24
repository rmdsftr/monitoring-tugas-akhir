document.addEventListener('DOMContentLoaded', function() {
    const pdfUrl = '/uploads/{{nama_dokumen}}'; // Ganti dengan URL PDF Anda

    const loadingTask = pdfjsLib.getDocument(pdfUrl);
    loadingTask.promise.then(function(pdf) {
        console.log('PDF loaded');

        // Loop through each page and render it
        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
            pdf.getPage(pageNum).then(function(page) {
                const viewport = page.getViewport({ scale: 1.5 });

                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;
                canvas.classList.add('pdf-page');

                const pdfContainer = document.getElementById('pdf-container');
                pdfContainer.appendChild(canvas);

                const renderContext = {
                    canvasContext: context,
                    viewport: viewport
                };
                const renderTask = page.render(renderContext);
                renderTask.promise.then(function() {
                    console.log('Page rendered');
                    // Initialize PDFAnnotate after the page is rendered
                    PDFAnnotate.setStoreAdapter(new PDFAnnotate.LocalStoreAdapter());
                    PDFAnnotate.UI.renderPage(pageNum, canvas);
                });
            });
        }
    }, function(reason) {
        console.error(reason);
    });

    document.addEventListener('mouseup', function(event) {
        const selection = window.getSelection();
        if (selection.toString().length > 0) {
            const rect = selection.getRangeAt(0).getBoundingClientRect();
            const commentBox = document.createElement('div');
            commentBox.classList.add('comment-popup');
            commentBox.style.top = `${rect.top + window.scrollY + rect.height}px`;
            commentBox.style.left = `${rect.left + window.scrollX}px`;

            const textarea = document.createElement('textarea');
            commentBox.appendChild(textarea);

            const submitButton = document.createElement('button');
            submitButton.textContent = 'Submit';
            submitButton.onclick = function() {
                alert(`Comment: ${textarea.value}`);
                document.body.removeChild(commentBox);
            };
            commentBox.appendChild(submitButton);

            document.body.appendChild(commentBox);
            commentBox.style.display = 'block';
        }
    });
});

function enableHighlight() {
    PDFAnnotate.UI.setBorderColor('#FFEB3B');
    PDFAnnotate.UI.enableHighlight();
}

function enableComment() {
    PDFAnnotate.UI.setBorderColor('#FFEB3B');
    PDFAnnotate.UI.enableComment();
}
