import React from 'react';
import './TourTabs.css';

import Tabs from '../../../shared/Tabs';

function TourTabs({services, ...props}) {
  return (
    <Tabs>
      {services.map((service) => {
        const {title, main, free, paid} = service;
        return (
          <div label={title} key={title}>
            {main && (
              <ul className='main__info'>
                {main?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            {free && (
              <div className='free'>
                <h3 className='free__title'>Безкоштовно</h3>
                <ul className='free__info'>
                  {free?.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {paid && (
              <div className='paid'>
                <h3 className='paid__title'>Платно</h3>
                <ul className='paid__info'>
                  {paid?.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </Tabs>
  );
}

export default TourTabs;
