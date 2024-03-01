import {defineField, defineType} from 'sanity'


export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',

  fields: [
    {
      name:"name",
      type:'string',
      title:'Restaurant name',
      validation:(Rule)=>Rule.required()
    },
    {
      name:"short_description",
      type:'string',
      title:'short description',
      validation:(Rule)=>Rule.max(200)
    },
    {
      name:"image",
      type:'image',
      title:'Image of restaurant',
      
    },
    {
      name:"lat",
      type:'number',
      title:'Latitude of restaurant',
      
    },
    {
      name:"long",
      type:'number',
      title:'Longititude of restaurant',
      
    },
    {
      name:"address",
      type:'string',
      title:'address of restaurant',
      validation:(Rule)=>Rule.required()
      
    },
    {
      name:"rating",
      type:'number',
      title:'enter rating from(1-5 stars)',
      validation:(Rule)=>Rule.required()
      .min(1)
      .max(5)
      .error('please enter a value between 1 and 5')
      
    },
    {
      name:"type",
      title:'Category',
      validation:(Rule)=>Rule.required(),
      type:'reference',
      to:[{type:"category"}],
       
      
    },
    {
      name:"dishes",
      title:'Dishes',
      type:'array',
      of:[{type:"reference",to:[{type:'dish'}]}],
       
      
    },

 
  ]
})
