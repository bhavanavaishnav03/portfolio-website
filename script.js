function downloadImage() {
    axios({
        url: 'C:\Users\vs\OneDrive\Desktop\portfolio\WhatsApp Image 2024-08-14 at 11.31.12_0a48dd16.jpg',
        method: 'GET',
        responseType: 'blob'
    })
        .then((response) => {
            if (response.status === 200) {
                const url = 
                    window.URL.createObjectURL
                    (new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'C:\Users\vs\OneDrive\Desktop\portfolio\WhatsApp Image 2024-08-14 at 11.31.12_0a48dd16.jpg');
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);
            } else {
                console.error('Error: Received non-200 status code');
            }
        })
        .catch((error) => {
            console.error('Error downloading the image:', error);
        });
}
