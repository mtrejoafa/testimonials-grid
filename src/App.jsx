import { useEffect } from 'react';
import './App.css'
import { Card } from './components/Card/Card'
import { data } from "/src/data/data.js";
import { useState } from 'react';

function App() {

  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
      setTestimonials(data);
  }, []);


  return (
    <div className='app'>
      <div className='testimonials-container'>
        {testimonials.map(({id,name,job,testimonial,experience,img,bgColor,textColor}) => (
          <Card key={id} name={name} job={job} testimonial={testimonial} experience={experience} img={img} bgColor={bgColor} textColor={textColor}/>
        ))}
      </div>
    </div>
  )
}

export default App
