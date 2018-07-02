import React from 'react';
import { shallow } from 'enzyme';
import PortfolioExample, {PortfolioExampleBox} from '../js/portfolio-example';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const myWork = [
  {
    'title': "Example1",
    'image': {
      'desc': "Example screenshot1",
      'src': "images/example1.png",
      'comment': ""
    }
  },
  {
    'title': "Example2",
    'image': {
      'desc': "Example screenshot2",
      'src': "images/example2.png",
      'comment': ""
    }
  }
]

describe("PortfolioExample Component", () => {
  let component = shallow(<PortfolioExample work={myWork}/>);

  it("Test should be a 'span' element", () => {
    expect(component.type()).toEqual('span');
  });

  it("Test should contain a child for each work example", () => {
    expect(component.find("PortfolioExampleBox").length).toEqual(myWork.length);
  });

  it("Test should allow the modal to open and close", () => {
    component.instance().openModal();
    expect(component.instance().state.modalOpen).toBe(true);
    component.instance().closeModal();
    expect(component.instance().state.modalOpen).toBe(false);
  });

});

describe("PortfolioExampleModal Component", () => {
  let mockOpenModalFn = jest.fn();

  let component = shallow(<PortfolioExampleBox example={myWork[1]}
    openModal={mockOpenModalFn}/>);

  let images = component.find("img");

  it("Test should contain a single 'img' element", () => {
    expect(images.length).toEqual(1);
  });

  it("Test should have the image srs set correctly", () => {
    expect(images.prop('src')).toEqual(myWork[1].image.src);
  });

  it("Test should call the openModal handler when clicked", () => {
    component.find(".section_exampleBoxWrapper").simulate('click');
    expect(mockOpenModalFn).toHaveBeenCalled();
  });
});
