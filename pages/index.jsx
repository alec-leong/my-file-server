import React from 'react';
import hrefs from '../data/hrefs';

const Index = () => (
  <>
    <h1>File Directory</h1>
    <ul>
      {hrefs.map((href) => (
        <li>
          {href.name}
          <ul>
            {href.files.map((filename) => (
              <li><a href={`${href.name}/${filename}`}>{filename}</a></li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </>
);

export default Index;
