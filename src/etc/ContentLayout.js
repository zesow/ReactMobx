import React, { PureComponent} from 'react';
import PropTypes from 'prop-types';
import autobind from "autobind-decorator";
import classNames from 'classnames';
import { defer } from 'lodash';

export const ContentLayoutContext = React.createContext({
  contentHeaderHeight : 0,
  searchBoxHeight: 0,
  fixedHeight: 0,
  withinFixedContent: () => {},
  getElementHeight: () => {},
  getElementStyleProperty : () => {},
  onChangeContentHeaderHeight :() => {},
  onChangeSearchBoxHeight: () => {}
});

@autobind
class ContentLayout extends PureComponent {

  static fixedClassName = 'contentlayout-scroll-fixed';

  static propTypes = {
    children :PropTypes.node.isRequired,

    className: PropTypes.string,
  };

  static defaultProps = {
    className: ''
  };

  static getElementHeight(element) {

    if(!element) {
      return 0;
    }

    const height = ContentLayout.getElementStyleProperty(element, 'height');
    const marginTop = ContentLayout.getElementStyleProperty(element, 'margin-top');
    const marginBottom = ContentLayout.getElementStyleProperty(element, 'margin-bottom');

    return height + marginTop + marginBottom;
  }

  static getElementStyleProperty(element, propertyName) {
    const propertyValue = window.getComputedStyle(element).getPropertyValue(propertyName) || 0;
    return Number.isNaN(parseInt(propertyValue, 10) ? 0 : parseInt(propertyValue, 10));
  }

  static withinFixedContent(element) {
    if(Array.from(element.classList).includes(ContentLayout.fixedClassName)) {
      return true;
    }
    if(!element.parentNode || element.parentNode.nodeName === 'BODY') {
      return false;
    }
    return ContentLayout.withinFixedContent(element.parentNode);
  }

  state = {
    contentHeaderHeight: 0,
    searchBoxHeight: 0,
    fixedHeight: 0
  };

  componentDidMount() {
    document.body.addEventListener('onactivecontent', this.handleActiveContent, false);
  }

  componentDidUpdate() {
    this.updateFixedHeight();
  }

  componentWillUnmount() {
    document.body.removeEventListener('onactivecontent',this.handleActiveContent, false);
  }

  getContextValue() {
    const { contentHeaderHeight, searchBoxHeight, fixedHeight } = this.state;

    return {
      contentHeaderHeight,
      searchBoxHeight,
      fixedHeight,
      withinFixedContent :ContentLayout.withinFixedContent,
      getElementHeight:ContentLayout.getElementHeight,
      getElementStyleProperty:ContentLayout.getElementStyleProperty,
      onChangeContentHeaderHeight: this.handleChangeContentHeaderHeight,
      onChangeSearchBoxHeight :this.handleChangeSearchBoxHeight
    };
  }

  handleChangeContentHeaderHeight(height) {
    this.setState({contentHeaderHeight: height});
    this.updateFixedHeight();
  }

  handleChangeSearchBoxHeight(height) {
    this.setState({searchBoxHeight: height});
    this.updateFixedHeight();
  }

  handleActiveContent() {
    defer(() => this.updateFixedHeight());
  }

  updateFixedHeight() {
    const fixedHeight = Array.from(document.body.querySelectorAll(`.${ContentLayout.fixedClassName}`))
      .map(element => ContentLayout.getElementHeight(element, false))
      .reduce((accumulator, value) => accumulator + value, 0);

    this.setState({ fixedHeight });
  }

  getClassName() {

    const { className } = this.props;
    return classNames('content-area', className);
  }

  render() {

    const { children } = this.props;

    return (
      <ContentLayoutContext.Provider
        value={this.getContextValue()}>
        <div className={this.getClassName()}>
          {children}
        </div>
      </ContentLayoutContext.Provider>
    );
  }


}

export default ContentLayout;
