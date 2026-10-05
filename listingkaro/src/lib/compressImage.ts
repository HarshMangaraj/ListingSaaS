const MAX_SIDE = 1000;
const JPEG_QUALITY = 0.8;

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("Could not load that image. Try another photo."));
    img.src = src;
  });
}

/**
 * Shrinks a photo in the browser so later Gemini uploads stay small and cheap.
 * Longest side becomes at most 1000px. Output is JPEG at ~0.8 quality.
 */
export async function compressImage(file: File): Promise<Blob> {
  const src = URL.createObjectURL(file);

  try {
    const img = await loadImage(src);
    let width = img.naturalWidth;
    let height = img.naturalHeight;
    const longest = Math.max(width, height);

    if (longest > MAX_SIDE) {
      const scale = MAX_SIDE / longest;
      width = Math.round(width * scale);
      height = Math.round(height * scale);
    }

    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      throw new Error("Could not create a canvas. Please update your browser and try again.");
    }

    ctx.drawImage(img, 0, 0, width, height);

    const blob = await new Promise<Blob>((resolve, reject) => {
      canvas.toBlob(
        (result) => {
          if (!result) {
            reject(new Error("Could not compress that image. Try another photo."));
            return;
          }
          resolve(result);
        },
        "image/jpeg",
        JPEG_QUALITY,
      );
    });

    return blob;
  } finally {
    URL.revokeObjectURL(src);
  }
}
