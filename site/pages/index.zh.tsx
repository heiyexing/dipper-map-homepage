import React from 'react';
import SEO from '@antv/gatsby-theme-antv/site/components/Seo';
import { useTranslation } from 'react-i18next';
import Banner from '@antv/gatsby-theme-antv/site/components/Banner';
import Features from '@antv/gatsby-theme-antv/site/components/Features';

const IndexPage = () => {
  const { t, i18n } = useTranslation();

  const features = [
    {
      icon:
        'https://gw.alipayobjects.com/zos/basement_prod/5dbaf094-c064-4a0d-9968-76020b9f1510.svg',
      title: t('简单方便'),
      description: t('从数据出发，仅需几行代码可以轻松获得想要的图表展示效果。')
    },
    {
      icon:
        'https://gw.alipayobjects.com/zos/basement_prod/0a0371ab-6bed-41ad-a99b-87a5044ba11b.svg',
      title: t('方便可靠'),
      description: t(
        '大量产品实践之上，提供绘图引擎、完备图形语法，专业设计规范。'
      )
    },
    {
      icon:
        'https://gw.alipayobjects.com/zos/basement_prod/716d0bc0-e311-4b28-b79f-afdd16e8148e.svg',
      title: t('无限可能'),
      description: t('任何图表，都可以基于图形语法灵活绘制，满足你无限的创意。')
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
        title={t('地理数据配置React组件')}
        description={t(
          'AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。'
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
