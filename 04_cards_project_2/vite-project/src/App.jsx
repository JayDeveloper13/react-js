import React, { Profiler } from 'react'
import Teamcard from './components/Teamcard'

const App = () => {

  const teamMembers = [
  {
    id: 1,
    name: "Priya",
    role: "Drupal Developer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60",
    description:
      "Creative UI/UX designer with a passion for modern and user-friendly interfaces.",
    
  },
  {
    id: 2,
    name: "Sumit",
    role: "PHP Developer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60",
    description:
      "Frontend developer skilled in React, JavaScript, and responsive web design.",
    
  },
  {
    id: 3,
    name: "Kiran",
    role: "Marketing",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60",
    description:
      "Digital marketer focused on branding, SEO, and social media growth.",
    
  },
  {
    id: 4,
    name: "Mahavir",
    role: "Manager",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60",
    description:
      "Project manager with strong leadership and communication skills.",
    
  },
  {
    id: 5,
    name: "Riya",
    role: "Photographer",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60",
    description:
      "Professional photographer specializing in portraits and creative shoots.",
    
  },
  {
    id: 6,
    name: "Aarav",
    role: "Developer",
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&auto=format&fit=crop&q=60",
    description: "Frontend developer building modern web apps.",
  },
  {
    id: 7,
    name: "Ananya",
    role: "Designer",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60",
    description: "UI/UX designer focused on clean interfaces.",
  },
  {
    id: 8,
    name: "Rohan",
    role: "Manager",
    image:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=600&auto=format&fit=crop&q=60",
    description: "Project manager ensuring smooth delivery.",
  },
  
];




  return (
   
<div class="container">
    <h1>Our Team</h1>
     <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo autem veniam ducimus! Architecto nulla quo aliquam autem minima dolorem! Accusamus suscipit tenetur vel est. Tempora ipsa quod illum pariatur voluptatem natus. Voluptatem itaque earum eum molestias exercitationem iusto. Veniam, amet.</h1>
    <div class="row">   
{teamMembers.map(function(elem, idx){
  return <div key={idx}><Teamcard name={elem.name}  role={elem.role} image={elem.image}  description={elem.description} /></div>

})}


    </div>
</div>
  )
}

export default App
