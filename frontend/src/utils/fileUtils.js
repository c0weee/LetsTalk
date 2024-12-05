export const toBlob = (dataURI) => {
    const [header, base64Data] = dataURI.split(',');

    const mime = header.match(/:(.*?);/)[1];

    const binary = atob(base64Data);
    const arrayBuffer = new ArrayBuffer(binary.length);
    const uint8Array = new Uint8Array(arrayBuffer);

    for (let i = 0; i < binary.length; i++) {
        uint8Array[i] = binary.charCodeAt(i);
    }

    return new Blob([uint8Array], { type: mime });
}

export const toBase64 = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const reader = new FileReader();
            const blob = await fetch(data.objectURL).then(r => r.blob());
        
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
                resolve(reader.result); 
            };
        } catch (error) {
            reject(error);
        }
    })
}