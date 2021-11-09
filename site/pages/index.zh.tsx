import * as React from 'react';
import SEO from '@antv/gatsby-theme-antv/site/components/Seo';
import { useTranslation } from 'react-i18next';
import Banner from '@antv/gatsby-theme-antv/site/components/Banner';
import Features from '@antv/gatsby-theme-antv/site/components/Features';

const IndexPage = () => {
  const { t, i18n } = useTranslation();

  const features = [
    {
      icon:
        'https://gw.alipayobjects.com/mdn/rms_e7e1c6/afts/img/A*i8JcQZllXXkAAAAAAAAAAAAAARQnAQ',
      title: t('适配国内/外坐标系'),
      description: t('支持国内/外地图切换，适配不同经纬度坐标系。')
    },
    {
      icon:
        'https://gw.alipayobjects.com/mdn/rms_e7e1c6/afts/img/A*XQ1FQaEmpkMAAAAAAAAAAAAAARQnAQ',
      title: t('平台组件化'),
      description: t(
        '支持以React组件形式引入，针对各个功能提供控制开关。'
      )
    },
    {
      icon:
        'https://gw.alipayobjects.com/mdn/rms_e7e1c6/afts/img/A*5ZKOTbwQzMsAAAAAAAAAAAAAARQnAQ',
      title: t('前端静态配置和存储'),
      description: t('前端离线处理和保存数据，保证数据安全。')
    }
  ];
  const bannerButtons = [
    {
      text: t('在线配置'),
      link: 'demo',
      type: 'primary'
    },
    {
      text: t('下载使用'),
      link: 'https://www.npmjs.com/package/@antv/l7' // `/${i18n.language}/examples/basic`
    }
  ];

  // const coverImage = <img width='100%' src='https://gw.alipayobjects.com/mdn/antv_site/afts/img/A*o40BRo-ANLoAAAAAAAAAAABkARQnAQ' alt='cover' />
  return (
    <>
      <SEO title={t('地理数据可视化')} lang={i18n.language} />
      <Banner
        // coverImage={coverImage}
        coverImage={
          <img
            src="https://gw.alipayobjects.com/mdn/antv_site/afts/img/A*-gtxQbUPoGQAAAAAAAAAAABkARQnAQ"
            style={{ width: 600, marginTop: 90 }}
            alt=""
          />
        }
        title={t('基于L7的开源地理可视分析工具')}
        description={t(
          '静态配置地图可视化平台，快速完成地理数据图层，让地理数据可视化无边界、无门槛。'
        )}
        className="banner"
        buttons={bannerButtons}
        showGithubStars={false}
        notifications={[]}
      />
      <Features
        id="features"
        features={features}
        title="我们的优势"
        style={{ width: '100%' }}
      />
    </>
  );
};

export default IndexPage;
