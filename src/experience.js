import './experience.css';
import React , {useState} from 'react';

function Experience() {
  return(
    <> 
      <div className='home' id='experience'>
        <div className='home-title'>
          <h1>Experience</h1>
        </div>
        <Card title = 'Textron Systems' 
          description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat pellentesque adipiscing commodo elit at imperdiet dui. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Amet mattis vulputate enim nulla aliquet porttitor. Faucibus nisl tincidunt eget nullam non nisi est. Vitae auctor eu augue ut. Facilisi cras fermentum odio eu feugiat. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Bibendum arcu vitae elementum curabitur. Elit eget gravida cum sociis natoque penatibus et magnis. Vitae nunc sed velit dignissim. Ac tortor vitae purus faucibus ornare. Fermentum posuere urna nec tincidunt praesent. Leo vel fringilla est ullamcorper eget nulla facilisi. Ridiculus mus mauris vitae ultricies."
          back = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat pellentesque adipiscing commodo elit at imperdiet dui. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Amet mattis vulputate enim nulla aliquet porttitor. Faucibus nisl tincidunt eget nullam non nisi est. Vitae auctor eu augue ut. Facilisi cras fermentum odio eu feugiat. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Bibendum arcu vitae elementum curabitur. Elit eget gravida cum sociis natoque penatibus et magnis. Vitae nunc sed velit dignissim. Ac tortor vitae purus faucibus ornare. Fermentum posuere urna nec tincidunt praesent. Leo vel fringilla est ullamcorper eget nulla facilisi. Ridiculus mus mauris vitae ultricies."
          />
        <Card title = 'GEECS' 
          description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat pellentesque adipiscing commodo elit at imperdiet dui. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Amet mattis vulputate enim nulla aliquet porttitor. Faucibus nisl tincidunt eget nullam non nisi est. Vitae auctor eu augue ut. Facilisi cras fermentum odio eu feugiat. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Bibendum arcu vitae elementum curabitur. Elit eget gravida cum sociis natoque penatibus et magnis. Vitae nunc sed velit dignissim. Ac tortor vitae purus faucibus ornare. Fermentum posuere urna nec tincidunt praesent. Leo vel fringilla est ullamcorper eget nulla facilisi. Ridiculus mus mauris vitae ultricies."
          back = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat pellentesque adipiscing commodo elit at imperdiet dui. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Amet mattis vulputate enim nulla aliquet porttitor. Faucibus nisl tincidunt eget nullam non nisi est. Vitae auctor eu augue ut. Facilisi cras fermentum odio eu feugiat. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Bibendum arcu vitae elementum curabitur. Elit eget gravida cum sociis natoque penatibus et magnis. Vitae nunc sed velit dignissim. Ac tortor vitae purus faucibus ornare. Fermentum posuere urna nec tincidunt praesent. Leo vel fringilla est ullamcorper eget nulla facilisi. Ridiculus mus mauris vitae ultricies."
          />
        <Card title = 'VSA' 
          description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat pellentesque adipiscing commodo elit at imperdiet dui. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Amet mattis vulputate enim nulla aliquet porttitor. Faucibus nisl tincidunt eget nullam non nisi est. Vitae auctor eu augue ut. Facilisi cras fermentum odio eu feugiat. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Bibendum arcu vitae elementum curabitur. Elit eget gravida cum sociis natoque penatibus et magnis. Vitae nunc sed velit dignissim. Ac tortor vitae purus faucibus ornare. Fermentum posuere urna nec tincidunt praesent. Leo vel fringilla est ullamcorper eget nulla facilisi. Ridiculus mus mauris vitae ultricies.'
          back = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat pellentesque adipiscing commodo elit at imperdiet dui. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Amet mattis vulputate enim nulla aliquet porttitor. Faucibus nisl tincidunt eget nullam non nisi est. Vitae auctor eu augue ut. Facilisi cras fermentum odio eu feugiat. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Bibendum arcu vitae elementum curabitur. Elit eget gravida cum sociis natoque penatibus et magnis. Vitae nunc sed velit dignissim. Ac tortor vitae purus faucibus ornare. Fermentum posuere urna nec tincidunt praesent. Leo vel fringilla est ullamcorper eget nulla facilisi. Ridiculus mus mauris vitae ultricies."
          />
        <Card title = 'Looking For More...' 
          description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat pellentesque adipiscing commodo elit at imperdiet dui. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Amet mattis vulputate enim nulla aliquet porttitor. Faucibus nisl tincidunt eget nullam non nisi est. Vitae auctor eu augue ut. Facilisi cras fermentum odio eu feugiat. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Bibendum arcu vitae elementum curabitur. Elit eget gravida cum sociis natoque penatibus et magnis. Vitae nunc sed velit dignissim. Ac tortor vitae purus faucibus ornare. Fermentum posuere urna nec tincidunt praesent. Leo vel fringilla est ullamcorper eget nulla facilisi. Ridiculus mus mauris vitae ultricies."
          back = "There's more work to do"
          />
      </div>
    </>
   
    );
}
export default Experience;

function Card(props) {
  const [clicked, setClicked] = useState(true)
  if(clicked){
    return( 
      <div className='card'>
        <div className='card-body'>
        <h2 className='card-title'>
          {props.title}
        </h2>
        <p className='card-description'>
          {props.description}
        </p>
        </div>
        <div className='button-wrapper'>
          <button className='card-btn' onClick={() => {setClicked(!clicked)}}>See More</button>
        </div>
      </div>
    )
  }
  else {
    return(
      <div className='card'>
        <p className='card-back'>
          {props.back}
        </p>
        <div className='button-wrapper'>
          <button className='card-btn' onClick={() => {setClicked(!clicked)}}>Back</button>
        </div>
      </div>
    )
  }
}