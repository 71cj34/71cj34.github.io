function lanczosResample(srcCanvas, dstCanvas, scale) {
    const srcCtx = srcCanvas.getContext('2d');
    const dstCtx = dstCanvas.getContext('2d');

    const srcWidth = srcCanvas.width;
    const srcHeight = srcCanvas.height;
    const dstWidth = Math.floor(srcWidth * scale);
    const dstHeight = Math.floor(srcHeight * scale);

    dstCanvas.width = dstWidth;
    dstCanvas.height = dstHeight;

    const srcImageData = srcCtx.getImageData(0, 0, srcWidth, srcHeight);
    const dstImageData = dstCtx.createImageData(dstWidth, dstHeight);

    const srcData = srcImageData.data;
    const dstData = dstImageData.data;

    const lanczosWindow = 3; // Lanczos window size

    function lanczos(x) {
        if (x === 0) return 1;
        if (Math.abs(x) >= lanczosWindow) return 0;
        const px = Math.PI * x;
        const pxlw = px / lanczosWindow;
        return (Math.sin(px) * Math.sin(pxlw)) / (px * pxlw);
    }

    for (let y = 0; y < dstHeight; y++) {
        for (let x = 0; x < dstWidth; x++) {
            const srcX = (x + 0.5) / scale - 0.5;
            const srcY = (y + 0.5) / scale - 0.5;

            let r = 0, g = 0, b = 0, a = 0;
            let weightSum = 0;

            for (let i = Math.floor(srcX - lanczosWindow + 1); i <= Math.floor(srcX + lanczosWindow); i++) {
                for (let j = Math.floor(srcY - lanczosWindow + 1); j <= Math.floor(srcY + lanczosWindow); j++) {
                    if (i >= 0 && i < srcWidth && j >= 0 && j < srcHeight) {
                        const weight = lanczos(srcX - i) * lanczos(srcY - j);
                        const idx = (j * srcWidth + i) * 4;

                        r += srcData[idx] * weight;
                        g += srcData[idx + 1] * weight;
                        b += srcData[idx + 2] * weight;
                        a += srcData[idx + 3] * weight;
                        weightSum += weight;
                    }
                }
            }

            const dstIdx = (y * dstWidth + x) * 4;
            dstData[dstIdx] = r / weightSum;
            dstData[dstIdx + 1] = g / weightSum;
            dstData[dstIdx + 2] = b / weightSum;
            dstData[dstIdx + 3] = a / weightSum;
        }
    }

    dstCtx.putImageData(dstImageData, 0, 0);
}

let srcCanvas = document.createElement('canvas');
let dstCanvas = document.getElementById('canvas');

document.getElementById('imageInput').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = new Image();
            img.onload = function () {
                srcCanvas.width = img.width;
                srcCanvas.height = img.height;
                const ctx = srcCanvas.getContext('2d');
                ctx.drawImage(img, 0, 0);
                dstCanvas.width = img.width;
                dstCanvas.height = img.height;
                dstCanvas.getContext('2d').drawImage(img, 0, 0);
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

function upscaleImage() {
    const scale = 2; // Upscale by 2x
    lanczosResample(srcCanvas, dstCanvas, scale);
}
