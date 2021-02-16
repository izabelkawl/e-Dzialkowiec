import Act from "../models/act.js";

const createAct = (req, res) => {
    let name = req.body.name
    let actfile = req.file.path
    const act = new Act({
        name: name,
        actfile: actfile
    })
    act.save((err, act) => {
        if (err) {
            console.log(err)
            return res.status(400).json({
                errors: err.meesage
            })
        }
        return res.json({
            message: "Przesłano pomyślnie!",
            act
        })
    })

  };

  const getActs = async (req, res) => {
    await Act.find({}, (err, acts) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      if (!acts.length) {
        return res
          .status(404)
          .json({ success: false, error: `nie znaleziono ustaw` });
      }
      return res.status(200).json({ success: true, data: acts });
    }).catch((err) => console.log(err));
  };

  const deleteAct = async (req, res) => {
    await Act.findOneAndDelete({ _id: req.params.id }, (err, act) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
  
      if (!act) {
        return res
          .status(404)
          .json({ success: false, error: `nie znaleziono ustawy` });
      }
  
      return res.status(200).json({ success: true, data: act });
    }).catch((err) => console.log(err));
  };
  export default {
    createAct,
    getActs,
    deleteAct
};