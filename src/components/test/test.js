import React from "react";
import  {shallow}  from "enzyme";
import Test from "./test";

describe("Test", () => {
    it("renders correctly", () => {
        const wrapper = shallow(<Test />);
        expect(wrapper).toMatchSnapshot();
    });
});