import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { gridItems } from '../../../../data/index'  // Fix import path
function Grid() {
  return (
    <section id='#about'>
        <BentoGrid>
            {gridItems.map((item:any) => (
                <BentoGridItem id={item.id}
                 key={item.id}
                 title={item.title}
                 description={item.description}
                 className={item.className}
                 img ={item.img}
                 imgClassName={item.imgClassName}
                 titleClassName={item.titleClassName}
                 spareImg={item.spareImg}
                  />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid