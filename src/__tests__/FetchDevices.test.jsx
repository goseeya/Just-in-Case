import { render, screen, waitFor} from '@testing-library/react'
import { act } from 'react-dom/test-utils'

const mockData = [
    {
        type: 'iPhone6'
    },
]

const fetchDevices = jest.fn();

test("Fetch Data API called", async () => {


    const mockFetchData = jest.spyOn(fetchDevices, 'Fetch Devices')
        .mockImplementation(async () => {
            return [{
                data: mockData
            }];
        })

    render(<IphoneCase />)
    expect(mockFetchData).toHaveBeenCalled();
    await waitFor(() => {
        expect(screen.getByText(/fetched/i)).toBeInTheDocument();
    })

})