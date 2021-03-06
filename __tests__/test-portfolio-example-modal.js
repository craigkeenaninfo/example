import React from 'react';
import { shallow } from 'enzyme';
import PortfolioExampleModal from '../js/portfolio-example-modal';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const myExample = {
  'title': "Example1",
    'href': "http://example.com",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image': {
      'desc': "Example screenshot1",
      'src': "images/example1.png",
      'comment': ""
    }
};

describe("PortfolioExampleModal Component", () => {
  let component = shallow(<PortfolioExampleModal example={myExample}
    open={false}/>);
  let openComponent = shallow(<PortfolioExampleModal example={myExample}
    open={true}/>);

  let anchors = component.find("a");

  it("Test should contain a single Anchor Tag or 'a' element", () => {
    expect(anchors.length).toEqual(1);
  });

  it("Test should link to our project", () => {
    expect(anchors.prop('href')).toEqual(myExample.href);
  });

  it("Test should have the modal class set correctly", () => {
    expect(component.find(".oaws-white").hasClass("oaws-modal--closed")).toBe(true);
    expect(openComponent.find(".oaws-white").hasClass("oaws-modal--open")).toBe(true);
  });

});
