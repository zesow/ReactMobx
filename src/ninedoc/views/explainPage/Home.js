import React from 'react';
import classNames from 'classnames';

const Home = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    ...props
  }) => {

    const outerClasses = classNames(
        'hero section center-content',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
      );

      const innerClasses = classNames(
        'hero-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
      );

  return (
    <section
        {...props}
      className={outerClasses}
    >
        <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                9doc 어쩌구
            </h1>
            <div>ninedoc은 최고의 구독 모음 프로그램입니다.</div>
          </div>
        </div>
    </div>
    </section>
  );
}

export default Home;