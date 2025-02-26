import React from 'react'
import img_1 from '../assets/img/IMG_20250222_111143_copy.jpg'
import Header from '../components/Header/Header'
import AutoScroll from '../components/AutoScroll';

const Arhchitecture = () => {
  const sections = ['architecture', 'about'];

  return (
    <div className='arhchitecture' id='architecture'>
      <Header />
      <AutoScroll sections={sections} offset={20} />
      <div className="header-section container">
        <div className="wrapper">
          <h1 className='mani-heading wrapper'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, beatae?</h1>
        </div>
      </div>
      <div id="about" className="about-section container">
        <div className="wrapper">
          <h2 className='title'>O nama</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi eveniet vel labore itaque sunt odit ipsum doloremque nulla. Nostrum illo similique voluptatum nulla quis, eveniet sit hic inventore optio facere eum magni nemo mollitia perspiciatis atque ut. Atque eius praesentium doloremque fuga sunt optio, earum maxime. Possimus nemo suscipit a, qui quidem iste eaque exercitationem quam quis nostrum dolorem distinctio dolor ratione. Aliquid laudantium, a facere ab non quas accusantium ea quam tempore! Totam reprehenderit labore similique, voluptas iste earum at temporibus accusamus nam in voluptates facere nostrum! Error consectetur architecto perferendis veritatis fugit, possimus sapiente quisquam ut cupiditate impedit dolor repellendus voluptates aut beatae! Deleniti veniam et quaerat sapiente, perspiciatis numquam suscipit quae? Sequi iusto corrupti odit nemo molestiae quibusdam mollitia et omnis. Voluptate ducimus blanditiis quam quos sint minus tempora possimus corporis atque esse magni temporibus nesciunt vero voluptas, sit nobis eius consequatur sequi provident. Quisquam, consequatur voluptates.</p>
        </div>
      </div>
      
    </div>
  )
}

export default Arhchitecture

