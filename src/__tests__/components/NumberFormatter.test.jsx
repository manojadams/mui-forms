import { render, fireEvent } from "@testing-library/react";
import React from "react";
import NumberFormatter from "../../components/NumberFormatter/NumberFormatter";

describe("NumberFormatter", () => {
  it("should format number with thousand separator and currency symbol", () => {
    const onChange = jest.fn();
    const { getByRole } = render(<NumberFormatter name="amount" onChange={onChange} value="1234567" />);
    const input = getByRole("textbox");
    // ₹ 12,34,567
    expect(input.value).toBe("₹ 12,34,567");
  });

  it("should call onChange with numeric value", () => {
    const onChange = jest.fn();
    const { getByRole } = render(<NumberFormatter name="amount" onChange={onChange} value="" />);
    const input = getByRole("textbox");
    fireEvent.change(input, { target: { value: "1000" } });
    // The mock onChange should be called by onValueChange of NumericFormat
    expect(onChange).toHaveBeenCalledWith({ target: { name: "amount", value: "1000" } });
  });
});