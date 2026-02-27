import { Jimp } from "jimp";
import path from "path";

async function resizeImage() {
  try {
    const inputPath = path.join(process.cwd(), "public", "test.png");
    const outputPath = path.join(process.cwd(), "public", "favicon.png");

    const image = await Jimp.read(inputPath);
    console.log("Image loaded", image.bitmap.width, "x", image.bitmap.height);

    image.resize({ w: 256, h: 256 });
    await image.write(outputPath);
    console.log("Favicon created at", outputPath);
  } catch (err) {
    console.error("Error creating favicon", err);
  }
}

resizeImage();
