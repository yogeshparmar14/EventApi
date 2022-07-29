const dbConnect = require("../model/connectiondb.js")
const mongodb = require("mongodb");


const createEvent = async (req, res) => {
    const {
      name,
      files,
      tagline,
      schedule,
      description,
      moderator,
      category,
      sub_category,
      rigor_rank,
    } = req.body;
  
    const data = await dbConnect();
  
    data
      .insertOne({
        name: name,
        files: files,
        tagline: tagline,
        schedule: schedule,
        description: description,
        moderator: moderator,
        category: category,
        sub_category: sub_category,
        rigor_rank: rigor_rank,
      })
      .then((result) => {
        res.send("Events is sucessfully saved");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
       
  const updateEvent = async (req, res) => {
    console.log(req.params.id);
    const {
      name,
      files,
      tagline,
      schedule,
      description,
      moderator,
      category,
      sub_category,
      rigor_rank,
    } = req.body;
  
    const data = await dbConnect();
    data
      .updateOne(
        { _id: new mongodb.ObjectId(req.params.id) },
        {
          $set: {
            name: name,
            files: files,
            tagline: tagline,
            schedule: schedule,
            description: description,
            moderator: moderator,
            category: category,
            sub_category: sub_category,
            rigor_rank: rigor_rank,
          },
        }
      )
      .then((result) => {
        res.send("Events is sucessfully updated");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  

  const deleteEvent = async (req, res) => {
    try {
      const data = await dbConnect();
      data.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
      res.send("Events is sucessfully delete");
    } catch (error) {
      console.log(error);
    }
  };

  const getOneEvent = async (req, res) => {
    try {
      if (req.query.id) {
        console.log();
        const data = await dbConnect();
        const result = await data.findOne({
          _id: new mongodb.ObjectId(req.query.id),
        });
  
        res.send(result);
      } else {
        const perPage = req.query.limit; //10docs in single page
        const page = req.query.page;
  
        const data = await dbConnect();
        const result = data
          .find({})
          .skip(perPage * page)
          .limit(5)
          .toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            res.send(result);
          });
  
        // .limit(limit)
      }
    } catch (error) {
      console.log(error);
    }
  };
  
 

module.exports = { createEvent,updateEvent,deleteEvent,getOneEvent };
