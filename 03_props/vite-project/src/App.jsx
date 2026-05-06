import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      

     <Card user="Vijay" age ={25} img="https://images.unsplash.com/photo-1776445602573-0cc8680b4d0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMjR8fHxlbnwwfHx8fHw%3D" />
      <Card user="Jay" age ={25} img="https://media.istockphoto.com/id/2081071556/photo/field-of-yellow-sunflower-flowers-against-a-background-of-clouds-sunflower-sways-in-the-wind.webp?a=1&b=1&s=612x612&w=0&k=20&c=medwR2OXAUsuqgMDYCH2qVJ6BA5fQcEFvr1DocoWFx8="/>
       <Card user="Sanjay" age ={23} img="https://media.istockphoto.com/id/825849810/photo/sunflowers-field.webp?a=1&b=1&s=612x612&w=0&k=20&c=fsvHcVcGpsV-8oxQ94KqVryW3bsUg_4--0-_Hf0CSe0="/>
     

      

      
    </div>
  )
}

export default App
