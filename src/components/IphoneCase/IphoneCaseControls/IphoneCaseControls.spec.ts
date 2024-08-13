import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {http, HttpResponse} from 'msw'
import {setupServer} from 'msw/node'
import '@testing-library/jest-dom'

const server = setupServer(
  http.get('/types', () => {
    return HttpResponse.json({type: 'iPhone6'})
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('loads and displays controls', async () => {
  // ACT
  await userEvent.click(screen.getByText('iPhone6'))

  // ASSERT
  expect(screen.getByRole('button')).toBeEnabled()
})