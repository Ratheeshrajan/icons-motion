import React from 'react'
import 'carbon-motion/dist/index.css'
import IconTile from '../IconTile'

const OperationsSection = () => {

  const motionIcons =[
    {
      iconName: 'ArrowShiftDownMotion',
      size: 32,
      title: 'Arrow shift down'
    },
    {
      iconName: 'ArrowsHorizontalMotion',
      size: 32,
      title: 'Arrows horizontal'
    },
    {
      iconName: 'ArrowsVerticalMotion',
      size: 32,
      title: 'Arrows vertical'
    },
    {
      iconName: 'BookmarkMotion',
      size: 32,
      title: 'Bookmark'
    },
    {
      iconName: 'BookmarkAddMotion',
      size: 32,
      title: 'Bookmark add'
    },
    {
      iconName: 'BookmarkFilledMotion',
      size: 32,
      title: 'Bookmark filled'
    },
    {
      iconName: 'CollapseAllMotion',
      size: 32,
      title: 'Collapse all'
    },
    {
      iconName: 'ExploreMotion',
      size: 32,
      title: 'Explore'
    },
    {
      iconName: 'DragHorizontal',
      size: 32,
      title: 'Drag horizontal'
    },
    {
      iconName: 'DragVertical',
      size: 32,
      title: 'Drag vertical'
    },
    {
      iconName: 'FlagMotion',
      size: 32,
      title: 'Flag'
    },
    {
      iconName: 'FlagFilledMotion',
      size: 32,
      title: 'Flag filled'
    }
  ];

	return (
		<section className="icon-section">	
			<div className='bx--grid'>
        <div className='bx--row'>
          <h2>Operations</h2>
        </div>
  			<ul className='bx--row'>
        {motionIcons && motionIcons.map((icon, index) => {
          return(
            <IconTile key={index} iconName={icon.iconName} size={icon.size} title={icon.title}/>
          )
        })}
  		  </ul>
		  </div>
		</section>
	)
}

export default OperationsSection
