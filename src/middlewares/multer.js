const path = require('path');
const multer = require('multer');

let multerDiskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        let folder = path.join(__dirname, '../../public/img/users')
        cb(null, folder);
    },

    filename: (req, file, cb) => {
        let imageName = 'user-' + Date.now() + path.extname(file.originalname)
        cb(null, imageName)
    }
})

let fileUpload = multer({storage: multerDiskStorage});

module.exports = fileUpload;