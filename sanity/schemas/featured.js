// @ts-check
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured menu category ',
  type: 'document',
  fields: [
    {
      name:"name",
      type:'string',
      title:'featured category name',
      validation:(Rule)=>Rule.required()
    },
    {
      name:"short_description",
      type:'string',
      title:'short description',
      validation:(Rule)=>Rule.max(200)
    },
    {
      name:"restaurants",
      type:'array',
      title:'Restaurant',
      of:[{type:'reference',to:[{type:'restaurant'}]}]
      
    },
   

    
  ],


})
