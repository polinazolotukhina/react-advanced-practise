import React, { Component } from 'react';
import './App.css';
import * as PropTypes from 'prop-types';


class Tabs extends Component {
    static childContextTypes ={
        activeIndex: PropTypes.number.isRequired,
        onSelectTab: PropTypes.func.isRequired,
    }
    state = {
        activeIndex: 0,
        onSelectTab: this.selectTabIndex,
    }
    getChildContext() {
        return {
            activeIndex: this.state.activeIndex,
            onSelectTab: this.selectTabIndex
        }
    }
    selectTabIndex = (activeIndex) => {
        this.setState({ activeIndex })
    }
  render() {
    return (
        <div>{this.props.children}</div>
    );
  }
}
class Tablist extends Component {
    static contextTypes = {
        activeIndex: PropTypes.number.isRequired,
        onSelectTab: PropTypes.func.isRequired,
    }

    render() {
        const { children } = this.props;
        const { activeIndex, onSelectTab } = this.context;

        const tabs = React.Children.map(children, (child, index) => {
            return React.cloneElement(child, {
                isActive: index === activeIndex,
                onSelect: () => onSelectTab(index)
            })
        })
        return (
            <div className="tabs">
                {tabs}
            </div>
        )
    }
}
class Tab extends Component {
    render() {
            const { isActive, isDisabled, onSelect, children } = this.props;
            return (
                <div
                    className={ isDisabled
                        ? 'disableTab'
                        : isActive
                            ? 'tabActive'
                            : 'tab'
                        }
                    onClick={isDisabled ? null :  onSelect}
                >
                     {children}
                </div>
            )
    }
}
class TabPanels extends Component {
    static contextTypes = {
        activeIndex: PropTypes.number.isRequired
    }
    render() {
        const {  children }  = this.props;
        const { activeIndex }  = this.context;
        return (
            <div className="panel">
                 { children[activeIndex]}
            </div>
        )

    }
}

class TabPanel extends Component {
    render() {
        return this.props.children
    }
}

///////////////////

class Context extends Component {
  render() {
    return (
      <div className="App">
         <Tabs>
            <Tablist>
                <Tab>Don Quixote</Tab>
                <Tab isDisabled>"Pilgrim's Progress"</Tab>
                <Tab>Robinson Crusoe</Tab>
                <Tab> "Gulliver's Travels"</Tab>
            </Tablist>
            <TabPanels>
                <TabPanel>
                    The story of the gentle knight and his servant Sancho Panza has entranced readers for centuries.
                </TabPanel>
                <TabPanel>
                    The one with the Slough of Despond and Vanity Fair.
                </TabPanel>
                <TabPanel>
                    The first English novel.
                </TabPanel>
                <TabPanel>
                    "A wonderful satire that still works for all ages, despite the savagery of Swift's vision."
                </TabPanel>
            </TabPanels>
         </Tabs>
      </div>
    );
  }
}

export default Context;
