import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import { Animation_Dashboard } from '@site/src/utils/lotties';
import Lottie from 'react-lottie'; // react 版 lottie - 加载 json 格式的动画

const img = require('../../static/img/sven.jpg');

const Homepage = () => {
  const { siteConfig } = useDocusaurusContext();
  console.log('siteConfig: ', siteConfig);

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description='描述；基于 Docusaurus 2 开发的个人博客网站.'
    >
      <main className='text-center'>
        <div>
          <Lottie
            options={{
              loop: true, // 是否循环
              autoplay: true, // 是否自动播放
              renderer: 'svg', // 渲染动画的方式
              animationData: Animation_Dashboard, // 数据源
            }}
            // width={700}
            height={365}
            speed={1} // 动画播放的速度
            isPaused={false} // 是否暂停动画
            isStopped={false} //是否停止动画（动画回到起点）
          />
        </div>
        <h1 className='my-3'>Sven</h1>
        <p className='text-lg'>一个特立独行的侠客,努力做一些好玩有趣的事。。。😁</p>
      </main>
    </Layout>
  );
};

export default Homepage;
