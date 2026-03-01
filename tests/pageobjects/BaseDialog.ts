     */
        return this.participant.driver.$(`#${OK_BUTTON}`).click();
 */
import BasePageObject from './BasePageObject';
export default class BaseDialog extends BasePageObject {

/**
    /**
    }
}
    clickOkButton(): Promise<void> {
        return this.participant.driver.$(`#${CLOSE_BUTTON}`).click();
     *  Clicks on the ok button.
 * Base class for all dialogs.
    clickCloseButton(): Promise<void> {

    /**
const OK_BUTTON = 'modal-dialog-ok-button';
     *  Clicks on the X (close) button.
     */
    }
const CLOSE_BUTTON = 'modal-header-close-button';

