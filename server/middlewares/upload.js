import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        console.log(file)
        cb(null, 'congar' + '-' + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    cb(null, true);
};

let upload = multer({
    storage: storage,

    fileFilter: fileFilter,
});

export default upload.single('categoryImage')