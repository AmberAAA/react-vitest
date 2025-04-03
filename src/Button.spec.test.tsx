import { render, screen, fireEvent } from '@testing-library/react'
import { it, expect, vi, beforeEach, describe, } from 'vitest'
import Button from './Button'

describe("my-button", () => {
  it('render button', async () => {
    const click = vi.fn()
    render(<Button onClick={click} />)
    const btn = screen.getByRole("button")
    fireEvent.click(btn);
    expect(click).toBeCalledTimes(1);
  })

  it("user key", async () => {
    render(<Button />)
    const input: HTMLInputElement = screen.getByLabelText("name");
    fireEvent.change(input, { target: { value: "123" } })
    expect(input.value).toEqual("123")
  })

  it("age button", async () => {
    render(<Button />);
    const input = screen.getByLabelText("age");
    fireEvent.change(input, { target: { value: "123" } });
    expect(input).toMatchInlineSnapshot(`
    <input
      aria-label="age"
    />
  `);
  })

  it("test p", () => {
    render(<Button />);
    const p = screen.getByText(/Name/);
    expect(p.innerText).toMatchInlineSnapshot(`"My Name is: Amber"`)
    fireEvent.click(p)
  })

  beforeEach(() => {
    document.body.innerHTML = "";
  })
})


