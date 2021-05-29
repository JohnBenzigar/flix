import React from 'react';
import jumboData from './fixtures/jumbo';
import Jumbotron from './container/jumbotron';
import {JumbotronContainer} from './container/jumbotron'
import {FooterContainer} from './container/footer';
import { Accordion } from './components';
import { FaqsContainer } from './container/faqs';

export default function App() {
  return (

    <>
    <JumbotronContainer/>
    <FaqsContainer/>
    <FooterContainer/>
    
    
    </>
  );
}


