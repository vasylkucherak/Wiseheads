const download = () => {
    const downloadForm = document.querySelector('.download__form');
    const formInputs = downloadForm.querySelectorAll('.download__input');
    const downloadLink = downloadForm.querySelector('.download__link');

    downloadForm.addEventListener('submit', function(e) {
        e.preventDefault();
        formInputs.forEach(input => {
            input.value = '';
        });
        downloadLink.click();
    });
}

export default download;