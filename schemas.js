const Joi = require('joi')

//Adding Joi validations
module.exports.groundSchema = Joi.object({
  ground: Joi.object({
    title: Joi.string().required(),
    price: Joi.number().required().min(0),
    // image : Joi.string().required(),
    location: Joi.string().required(),
    description: Joi.string().required(),
  }).required(),
  deleteImages: Joi.array(),
})

module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().required().min(0).max(5),
    body: Joi.string().required(),
  }).required(),
})
