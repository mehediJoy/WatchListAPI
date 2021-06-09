const Movie = require("../models/Movie");

exports.create = (req, res) => {
  if (!req.body)
    return res
      .status(400)
      .send({ operation: false, massage: "Request can't be empty!" });

  var movie = new Movie({
    userid: req.body.userid,
    name: req.body.name,
    year: req.body.year,
    director: req.body.director,
  });

  Movie.findOne({ name: req.body.name, year: req.body.year }, (err, doc) => {
    if (err)
      return res.status(500).send({
        operation: false,
        massage: "Problem with processing query to Database!",
      });
    if (doc)
      return res
        .status(409)
        .send({ operation: false, massage: "Movie Already Exists!" });

    movie.save((err, movie) => {
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
  var movie = {
    name: req.body.name,
    year: req.body.year,
    director: req.body.director, // Send "" form frontend
  };
  Movie.findByIdAndUpdate(req.params.id, movie, (err, doc) => {
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
  Movie.findByIdAndDelete(req.params.id, (err, doc) => {
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
  Movie.findById(req.params.id, (err, doc) => {
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
  Movie.find({}, (err, doc) => {
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
