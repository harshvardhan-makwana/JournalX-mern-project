const Journal = require("../models/journalModel");

const getJournals = async (req, res) => {
  const journals = await Journal.find({ user: req.user._id });
  res.status(200).json(journals);
};

const createJournal = async (req, res) => {
  const { title, content ,mood} = req.body;
  if (!title || !content) {
    return res.status(400).json({ message: "Please add a title and content" });
  }
  const journal = await Journal.create({
    title,
    content,
    mood,
    user: req.user._id,
  });
  res.status(201).json(journal);
};

const getJournalById = async (req, res) => {
  let { id } = req.params;
  try {
    const journal = await Journal.findById(id);
    if (!journal) {
      return res.status(404).message({ message: "Journal Not Found" });
    }
    if (!journal.user.equals(req.user._id)) {
      return res.status(401).json({ message: "User not authorized" });
    }
    res.json(journal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateJournal = async (req, res) => {
  try {
    const journal = await Journal.findById(req.params.id);
    if (!journal) {
      res.status(404).send({ message: "Journal not found" });
    }
    if (!journal.user.equals(req.user._id)) {
      return res.status(401).json({ message: "User not authorized" });
    }
    const updateJournal = await Journal.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    res.status(200).json(updateJournal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteJournal = async (req, res) => {
  try {
    const journal = await Journal.findById(req.params.id);
    if (!journal) {
      res.status(404).send({ message: "Journal not found" });
    }
    if (!journal.user.equals(req.user._id)) {
      return res.status(401).json({ message: "User not authorized" });
    }
    await journal.deleteOne();
    res.status(200).json({ id: req.params.id, message: "journal deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getJournals, createJournal, updateJournal, deleteJournal,getJournalById};
