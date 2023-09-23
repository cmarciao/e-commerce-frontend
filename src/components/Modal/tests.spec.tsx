import { Modal, ModalProps } from ".";
import { TestService } from "../../tests/TestService";

function renderComponent(modalProps: ModalProps) {
    return (
        <Modal
            {...modalProps}
        />
    );
}

describe('Modal component', () => {
    it('should render correctly', () => {
        const modalTest = new TestService(renderComponent({
            title: 'Test Modal',
            isVisible: true,
            isLoading: false,
            cancelLabel: 'Cancel Test',
            confirmLabel: 'Confirm Test',
            onCancel() {
            },
            onConfirm() {
            },
            children: <></>
        }));

        modalTest.checkIfTextAppear('Test Modal');
    });

    it('should render correctly but is not visible', () => {
        const modalTest = new TestService(renderComponent({
            title: 'Test Modal',
            isVisible: false,
            isLoading: false,
            cancelLabel: 'Cancel Test',
            confirmLabel: 'Confirm Test',
            onCancel() {
            },
            onConfirm() {
            },
            children: <></>
        }));

        modalTest.checkIfTextNotAppear('Test Modal');
    });

    it('should click on cancel modal button', () => {
        const params = {
            onCancel() {
                // Do nothing
            }
        }
        const onCancelSpy = jest.spyOn(params, 'onCancel');
        const modalTest = new TestService(renderComponent({
            title: 'Test Modal',
            isVisible: true,
            isLoading: false,
            cancelLabel: 'Cancel Test',
            confirmLabel: 'Confirm Test',
            onCancel: params.onCancel,
            onConfirm() {},
            children: <></>
        }));

        modalTest
            .clickButtonByText('Cancel Test')
            .toHaveBeenCalled(onCancelSpy);
    });

    it('should click on confirm modal button', () => {
        const params = {
            onConfirm() {
                // Do nothing
            }
        }
        const onConfirmSpy = jest.spyOn(params, 'onConfirm');
        const modalTest = new TestService(renderComponent({
            title: 'Test Modal',
            isVisible: true,
            isLoading: false,
            cancelLabel: 'Cancel Test',
            confirmLabel: 'Confirm Test',
            onCancel() {},
            onConfirm: params.onConfirm,
            children: <></>
        }));

        modalTest
            .clickButtonByText('Confirm Test')
            .toHaveBeenCalled(onConfirmSpy);
    });

    it('should disable buttons when is loading', () => {
        const params = {
            onConfirm() {
                // Do nothing
            },
            onCancel() {
                // Do nothing
            }
        }
        const onConfirmSpy = jest.spyOn(params, 'onConfirm');
        const onCancelSpy = jest.spyOn(params, 'onCancel');
        const modalTest = new TestService(renderComponent({
            title: 'Test Modal',
            isVisible: true,
            isLoading: true,
            cancelLabel: 'Cancel Test',
            confirmLabel: 'Confirm Test',
            onCancel: params.onCancel,
            onConfirm: params.onConfirm,
            children: <></>
        }));

        modalTest
            .checkIfTextNotAppear('Confirm Test')
            .toHaveNotBeenCalled(onConfirmSpy)
            .toHaveNotBeenCalled(onCancelSpy);
    });
});