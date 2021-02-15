import React from 'react';

export default function Footer() {
  return (
    <footer className='footer'>
      <p className='footer-text'>
        Desenvolvido por&nbsp;
        <a href='https://github.com/akemimeka' title='GitHub' target="_blank" rel="noopener noreferrer" className='tag-link footer-link'>Akemi Mitsueda</a>
        &nbsp;&&nbsp;
        <a href='https://github.com/crismantovani' title='GitHub' target="_blank" rel="noopener noreferrer" className='tag-link footer-link'>Cris Mantovani</a>
        &emsp;|&emsp;Copyright 2021
      </p>
    </footer>
  );
}
