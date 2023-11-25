import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">
          Description
        </div>
        <div className="descriptionbox-nav-box fade">
          Reviews (122)
        </div>
      </div>
      <div className="descriptionbox-description">
        <p>Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Nihil libero rerum eaque 
          delectus sit voluptatum obcaecati illo 
          autem deleniti, aut facere doloremque, 
          vel consequatur tempore similique 
          veniam cumque modi dicta!
        </p>
        <p>Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Nihil libero rerum eaque 
          delectus sit voluptatum obcaecati illo 
          autem deleniti, aut facere doloremque, 
          vel consequatur tempore similique 
          veniam cumque modi dicta!
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox