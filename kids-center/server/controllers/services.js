const { Console } = require("console");
const Service = require("../models/services.js");

module.exports = {
     find_All: async (req, res, next) => {
          // get all the users
          try {
               console.log("query", req.query);               // the server will try the following
               console.log("params", req.params);
               const services = await Service
                    .find({})
               // .populate(["parent", "provider"])
               // .select('-password')

               res.status(200).json(services);
          } catch (error) {
               next(error);
          }
     }, find: async (req, res, next) => {
          // get all the users
          try {
               console.log("query", req.query);               // the server will try the following
               console.log("params", req.params);
               const services = await Service
                    //{fullname:"/"+req.query.fullname+"/",city:"/"+req.query.city+"/",specialty:"/"+req.query.specialty+"/"}
                    .find({ city: { $regex: req.query.city }, fullname: { $regex: req.query.fullname }, specialty: { $regex: req.query.specialty } })

               console.log(services)
               // .populate(["parent", "provider"])
               // .select('-password')

               res.status(200).json(services);
          } catch (error) {
               next(error);
          }
     }, find_One: async (req, res, next) => {
          try {
               console.log("\nRequesting the server to give me a specific user from the database ...\n");
               // the server will try the following
               const services = await Service
                    .findById(req.params.servicesId)

               res.status(200).json(services);
          } catch (error) {
               next(error);
          }
     }
}