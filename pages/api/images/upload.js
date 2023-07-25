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
    response.status(405).json({ error: "Method not allowed" });
    return;
  }

  const form = formidable({});
  const [fields, files] = await form.parse(request);

  const imageFile = files.profilePicture[0];

  const uploadResult = await cloudinary.uploader.upload(imageFile.filepath);

  console.log(uploadResult);

  response.status(200).json({
    public_id: uploadResult.public_id,
    width: uploadResult.width,
    height: uploadResult.height,
    format: uploadResult.format,
    dateCreated: uploadResult.created_at,
    url: uploadResult.secure_url,
    folder: uploadResult.folder,
    originalFilename: uploadResult.original_filename,
  });
}
