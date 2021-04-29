import React, {useState} from 'react';
import './Tabs.css';

function Tabs(props) {
  const {children} = props;
  console.log(children);

  const navs = children.map(({props}) => props.label);

  const [state, setState] = useState(children[0].props.label);
  return (
    <div className="Tabs">
      <nav className="nav">
        {navs.map((nav) => (
          <button className={`nav__link nav__link--reset ${state === nav && 'nav__link--active'}`} key={nav} onClick={() => setState(nav)}>
            {nav}
          </button>
        ))}
      </nav>
      <div className="Tabs__content">{children.filter(({props}) => props.label === state)}</div>
    </div>
  );
}

export default Tabs;
