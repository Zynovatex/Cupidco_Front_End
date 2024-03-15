'use client';

import React from 'react';
import HomeSection1 from './(pages)/_page-components/home/HomeSection1';
import HomeSection2 from './(pages)/_page-components/home/HomeSection2';

const ParentComponent = () => {

  return (
    <div>
      <HomeSection1/>
      <HomeSection2/>
    </div>
  );
};

export default ParentComponent;
