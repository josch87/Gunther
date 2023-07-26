import formidable from "formidable";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  const form = formidable({});

  try {
    const [fields, files] = await form.parse(request);
    if (!files.profilePicture || !files.profilePicture[0]) {
      return response
        .status(400)
        .json({ error: "No profilePicture file provided" });
    }

    const imageFile = files.profilePicture[0];

    try {
      const uploadResult = await cloudinary.uploader.upload(
        imageFile.filepath,
        {
          folder: "gunther/" + process.env.ENVIRONMENT,
        }
      );

      return response.status(201).json({
        public_id: uploadResult.public_id,
        width: uploadResult.width,
        height: uploadResult.height,
        format: uploadResult.format,
        dateCreated: uploadResult.created_at,
        url: uploadResult.secure_url,
        folder: uploadResult.folder,
        originalFilename: imageFile.originalFilename,
      });
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error.message);
      return response
        .status(500)
        .json({ error: "Error uploading to Cloudinary " });
    }
  } catch (error) {
    console.error("Error parsing form data", error.message);
    return response.status(500).json({ error: "Error parsing form data" });
  }
}
