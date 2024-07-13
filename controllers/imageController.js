const { Image } = require("../models");

exports.uploadImage = async (req, res) => {
  const { title, description } = req.body;
  const userId = req.userId;
  let url = req.file.path;
  console.log(url);
  console.log(req.file.path);

  try {
    const image = await Image.create({ userId, title, description, url });
    res.status(201).json({ message: "Image uploaded", image });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllImages = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const images = await Image.findAndCountAll({
      offset: (page - 1) * limit,
      limit,
    });
    res.status(200).json({ message: "All images", images });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getImageById = async (req, res) => {
  const { id } = req.params;
  try {
    const option = {
      root: __dirname + "/../uploads",
    };
    res.sendFile(id, option);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

