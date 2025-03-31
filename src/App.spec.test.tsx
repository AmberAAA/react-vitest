import { expect, it } from 'vitest'
import { screen, render } from '@testing-library/react'
import App from './App'
import userEvent from "@testing-library/user-event"

it("import", async () => {
  render(<App />);
  const button = screen.getByRole("button")
  expect(button).toMatchInlineSnapshot(`
    <button>
      count is 
      0
    </button>
  `);
  await userEvent.click(button);
  expect(button.innerHTML).toMatch(/1/);


})
