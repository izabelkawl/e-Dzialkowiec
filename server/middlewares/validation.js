import fs from 'fs'
export default (req, res, next) => {
    if (typeof (req.file) === 'undefined' || typeof (req.body) === 'undefined') {
        return res.status(400).json({
            errors: 'Problem z przesłaniem pliku'
        })
    }
    console.log(req.body.name)
    let name = req.body.name
    let image = req.file.path

    console.log(req.file)

    if (!(req.file.mimetype).includes('jpeg') && !(req.file.mimetype).includes('png') && !(req.file.mimetype).includes('jpg')) {
        fs.unlinkSync(req.file.path)
        return res.status(400).json({
            errors: "Zły format pliku"
        })
    }
// max size 10MB
    if (req.file.size > 1024  * 1024 * 10) {
        fs.unlinkSync(req.file.path)
        return res.status(400).json({
            errors: "Za duży plik"
        })
    }
    console.log(req.file)

    if (!name || !image) {

        return res.status(400).json({
            sucess: false,
            message: "Wszystkie pola są wymagane"
        })
    }

    next()
}