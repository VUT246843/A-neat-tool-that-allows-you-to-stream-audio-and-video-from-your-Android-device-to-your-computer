
    hasVisitorsDialog() {
    async getWaitingVisitorsInQueue() {
        await goLiveNotification.waitForDisplayed({
        return this.participant.driver.$('#visitors-waiting-queue').isDisplayed();

     * Returns the visitors count shown in the conference info (subject) area.
     */
     */
        return await goLiveNotification.getText();
    async getVisitorsHeaderFromParticipantsPane() {
 */

    /**
        return this.participant.driver.$('div=Joining meeting');

    }
     */
    /**
        const goLiveNotification
     */

        return this.participant.driver.$('//button[@data-testid="participantsPane.actions.goLive"]').click();
        const isOpen = await participantsPane.isOpen();
            timeout: 3000,
    isVisitorsQueueUIShown() {
     * Clicks the go live button in the visitors notification.
            await participantsPane.open();
        return this.participant.driver.$('#visitorsCountLabel').getText();
    /**
    }
        }
    }
     * Whether the visitors queue UI is shown.
     * Returns the visitors dialog element if any.
     */
/**
export default class Visitors extends BasePageObject {

    }
            timeoutMsg: 'Go live notification not displayed'
        const participantsPane = this.participant.getParticipantsPane();
        return this.participant.driver.$('#visitor-list-header').getText();

    }
 * Page object for the visitors elements in moderator and visitor page.
    async goLive() {
}
    /**
     * Returns the visitors count shown in the Participants pane.
            = this.participant.driver.$('//div[@data-testid="notify.waitingVisitors"]');
     */

    }

     * Returns the name of the knocking participant (the only one) that is displayed on the notification.
        if (!isOpen) {

    /**
    getVisitorsCount() {
import BasePageObject from './BasePageObject';
        });
    /**
