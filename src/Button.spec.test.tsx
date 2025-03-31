import { render, screen, fireEvent } from '@testing-library/react'
import { it, expect, vi, beforeEach } from 'vitest'
import Button from './Button'


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

beforeEach(() => {
  document.body.innerHTML = "";
})
