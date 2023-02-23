import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={clsx('hero hero--primary margin-bottom--xl', styles.heroBanner)}>
      <div className='container'>
        <h1 className='hero__title'>{siteConfig.title}</h1>
        <p className='hero__subtitle'>
          <Translate
            id='homepage.TagLineText'
            description='Tagline intro text in the homepage'
          />
        </p>
        <div className='indexCtas'>
          <a className='button button--secondary' href='/docs'>
            <Translate id='homepage.GetStarted.Button' description='Get started button text'>
              Get Started
            </Translate>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={
        translate({
          message: 'Get started with the ',
          description: 'Title meta tag in <head />',
        }) + siteConfig.title
      }
      description='Description will go into a meta tag in <head />'>
      <HomepageHeader />
    </Layout>
  );
}
