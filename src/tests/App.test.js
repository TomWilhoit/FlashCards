import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { shallow } from "enzyme";
global.localStorage = require("../setupTests");

global.JSON = {
  parse: function(obj) {
    return obj;
  },
  stringify: function(obj) {
    return obj;
  }

};

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    localStorage.setItem("savedQuestions", "[{}, {}, {},]");
    wrapper = shallow(<App />);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it("should update local storage", () => {
    let savedArray = [{}, {}, {}];
    wrapper.setState({ savedArray, questionIndex: 0 });
    expect(wrapper.state().savedArray.length).toEqual(3);
    wrapper.instance().saveToStorage();
    let savedQuestions = JSON.parse(localStorage.getItem("savedQuestions"))
      .length;
    expect(savedQuestions).toEqual(48);
  });

  it("should have a proper default state", () => {
    expect(wrapper.state()).toEqual({
      questions: [],
      shouldRestart: false,
      questionIndex: 0,
      savedArray: [],
      wrongArray: []
    });
  });

  it("should match the snapshot with all data passed in correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('restart game', ()=>{
    wrapper.instance().incrementQuestionIndex();
    wrapper.setState({'shouldRestart':true});

    expect(wrapper.find('.restart-game-btn')).not.toBeNull();
  })
});
