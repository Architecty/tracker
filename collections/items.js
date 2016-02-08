Items = new Meteor.Collection('items');

Items_Schema = new SimpleSchema({
  vertical_id: {type: String, label: "The _id value of the vertical to which this pertains"},
  category_id: {type: String, label: "The _id value of the category this product is in"},
  name: {type: String, label: "The name of the item"},
  desc: {type: String, label: "A short description of the item, for admin use"},
  admin_notes: {type: String, label: "A short description of the item, for admin use"},
  product_url: {type: String, label: "The product url of this particular item"},
  vendor_name: {type: String, label: "The name of the vendor selling this item"},
  product_image_url: {type: String, label: "A url to the image for this particular product, either from the vendor or self-hosted"},
  cost: {type: Number, label: "The cost of the product"},
  costDenomination: {type: String, label: "The three character code for the denomination the cost is in"}
})
