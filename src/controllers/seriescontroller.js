const Series = require("../models/Series");

exports.create = (req, res) => {
  if (!req.body)
    return res
      .status(400)
      .send({ operation: false, massage: "Request can't be empty!" });

  var series = new Series({
    userid: req.body.userid,
    name: req.body.name,
    year: req.body.year,
    director: req.body.director,
  });

  Series.findOne({ name: req.body.name, year: req.body.year }, (err, doc) => {
    if (err)
      return res.status(500).send({
        operation: false,
        massage: "Problem with processing query to Database!",
      });

    if (doc)
      return res
        .status(409)
        .send({ operation: false, massage: "Movie Already Exists!" });

    series.save((err, series) => {
      if (err)
        return res.status(500).send({
          operation: false,
          massage: "Problem with saving to Database!",
        });
      return res
        .status(200)
        .send({ operation: true, massage: "Saved Successfully!" });
    });
  });
};

exports.update = (req, res) => {
  if (!req.body)
    return res
      .status(400)
      .send({ operation: false, massage: "Request can't be empty!" });

  var series = {
    name: req.body.name,
    year: req.body.year,
    director: req.body.director,
  };

  Series.findByIdAndUpdate(req.params.id, series, (err, doc) => {
    if (err)
      return res.status(500).send({
        operation: false,
        massage: "Problem with processing query to Database!",
      });

    if (!doc)
      return res
        .status(404)
        .send({ operation: false, massage: "Document not found!" });

    return res
      .status(200)
      .send({ operation: true, massage: "Document update successful!" });
  });
};

exports.delete = (req, res) => {
  if (!req.body)
    return res
      .status(400)
      .send({ operation: false, massage: "Request can't be empty!" });

  Series.findByIdAndDelete(req.params.id, (err, doc) => {
    if (err)
      return res.status(500).send({
        operation: false,
        massage: "Problem with processing query to Database!",
      });

    if (!doc)
      return res
        .status(404)
        .send({ operation: false, massage: "Document not found!" });

    return res
      .status(200)
      .send({ operation: true, massage: "Document deletion successful!" });
  });
};

exports.getone = (req, res) => {
  Series.findById(req.params.id, (err, doc) => {
    if (err)
      return res.status(500).send({
        operation: false,
        massage: "Problem with processing query to Database!",
      });

    if (!doc)
      return res
        .status(404)
        .send({ operation: false, massage: "Document not found!" });

    return res.status(200).send(doc);
  });
};

exports.getall = (req, res) => {
  Series.find({}, (err, doc) => {
    if (err)
      return res.status(500).send({
        operation: false,
        massage: "Problem with processing query to Database!",
      });

    if (!doc)
      return res
        .status(404)
        .send({ operation: false, massage: "Document not found!" });
    return res.status(200).send(doc);
  });
};
