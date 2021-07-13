import React from "react";
import renderer from "react-test-renderer";
import Button from "../components/Button";
test("basic snapshot with some optional props", () => {
  const component = renderer.create(
    <Button
      onClick="required"
      setSize="optional prop"
      setColor="optional prop"
      optionalBool
    />
  );
  expect(component.toJSON()).toMatchSnapshot();
});
