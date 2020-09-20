import React from 'react';
import Logo from './Logo';
import PaintingList from './PaintingList';
import Panel from './Panel';
import paintings from '../paintings.json';
import Profile from './Profile/Profile';

const App = ({ user }) => {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Panel title="Последние новости">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam,
          obcaecati dolorum assumenda vitae aspernatur, aliquid numquam
          explicabo, facere tenetur unde dolorem quo! Sit iusto natus at,
          aliquam, repellendus repellat ipsa eligendi dolorem tempore atque
          reprehenderit nulla magnam reiciendis, aliquid minus tenetur ipsam
          fuga. Quas vel, sunt voluptatum debitis incidunt numquam?
        </p>

        <a href="/">Читать...</a>
      </Panel>

      <Panel>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
          explicabo aperiam architecto perspiciatis quae amet. Porro magni
          laudantium aspernatur debitis deserunt ipsam. Nostrum id accusamus
          praesentium eum incidunt tenetur cum!
        </p>
      </Panel>

      <Logo text="Главный компонент-контейнер приложения" />
      <PaintingList paintings={paintings} />
    </div>
  );
};

export default App;
