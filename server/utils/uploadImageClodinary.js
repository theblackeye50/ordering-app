import { v2 as cloudinary } from 'cloudinary';

// cloudinary.config({
//     cloud_name : process.env.CLODINARY_CLOUD_NAME,
//     api_key : process.env.CLODINARY_API_KEY,
//     api_secret : process.env.CLODINARY_API_SECRET_KEY
// })

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET_KEY
})

// const uploadImageClodinary = async(image)=>{
//     const buffer = image?.buffer || Buffer.from(await image.arrayBuffer())

//     const uploadImage = await new Promise((resolve,reject)=>{
//         cloudinary.uploader.upload_stream({ folder : "AURABAY "},(error,uploadResult)=>{
//             return resolve(uploadResult)
//         }).end(buffer)
//     })

//     return uploadImage
// }

// export default uploadImageClodinary

const uploadImageClodinary = async (image) => {
    try {
        const buffer = image?.buffer || Buffer.from(await image.arrayBuffer());

        return new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream(
                { folder: "AURABAY" },
                (error, uploadResult) => {
                    if (error) {
                        reject(error); // Pass the specific Cloudinary error to the caller
                    } else {
                        resolve(uploadResult);
                    }
                }
            ).end(buffer);
        });
    } catch (error) {
        console.error("Error uploading to Cloudinary:", error);
        throw error; // Re-throw the error to be caught by the calling function
    }
};

export default uploadImageClodinary