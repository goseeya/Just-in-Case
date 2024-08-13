import { render, screen, waitFor } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import IphoneCaseControls from '../components/IphoneCase/IphoneCaseControls/IphoneCaseControls.tsx';

test("Renders four checkboxes", () => {
    render(<IphoneCaseControls />);

    const element = screen.getByText(/iPhone6/i);
    const element7 = screen.getByText(/iPhone7/i);

    expect(element).toBeInTheDocument();
})

test("Select checkbox", async () => {
    const mockHandleClick = jest.fn();
    render(<IphoneCaseControls
        price='100'
        typeSelected={mockHandleClick}
        checkedType='iPhone6'
        purchaseable={true}
        isAuth={true}
        ordered={mockHandleClick}
    />);

    await userEvent.click(screen.getByText(/iPhone7/i));
    expect(mockHandleClick).toHaveBeenCalled();
})