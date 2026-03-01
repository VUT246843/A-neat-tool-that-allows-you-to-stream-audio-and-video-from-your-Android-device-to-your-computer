        participantsSoftLimit?: number;
            this.ws = undefined;
     * @param eventType
            this.logInfo('connected');

    private cache = new Map();
        });

                if (!processed && msg.eventType === 'SETTINGS_PROVISIONING') {

     * @param eventType
     * Disconnects the webhook proxy.
import fs from 'node:fs';
                        response = this._defaultMeetingSettings;

        }
    /**
        return new Promise((resolve, reject) => {
        autoAudioRecording?: boolean;
     * Clear any stored event.
                if (this.consumers.has(msg.eventType)) {
    addConsumer(eventType: string, callback: (deventata: any) => void) {

        }
        outboundPhoneNo?: string;
     */
                this.logInfo(error.message);
        this.ws.on('open', () => {
        maxOccupants?: number;
        this.ws.on('message', (data: any) => {
        }



                resolve(event);
    }

    private ws: WebSocket | undefined;
                if (this.listeners.has(msg.eventType)) {
     */
    /**
 * Uses the webhook proxy service to proxy events to the testing clients.
            this.addConsumer(eventType, event => {
        this.ws.on('error', console.error);
        lobbyEnabled?: boolean;
        const error = new Error(`Timeout waiting for event:${eventType}`);
    }
        transcriberType?: 'GOOGLE' | 'ORACLE_CLOUD_AI_SPEECH' | 'EGHT_WHISPER';
    private logFile;
export default class WebhookProxy {

     * Adds event consumer. Consumers receive the event single time and we remove them from the list of consumers.
        this.listeners.delete(eventType);
            console.log('WebhookProxy disconnected');
     * Sets the settings provider.
                } else {
     * Initializes the webhook proxy.
     * @param timeout
     */
                }
    }
     * @param secret
                return reject(error);
        autoVideoRecording?: boolean;
            this.logInfo('disconnected');
        if (this.ws) {

     * @param callback
        if (this.cache.has(eventType)) {
    constructor(url: string, secret: string, logFile: string) {
        try {

    /**
    private readonly secret;
    set defaultMeetingSettings(value: {
 */
    }
    /**
     *
     */
     * Connects.

            }
     */


        this.url = url;

    private listeners = new Map();

        this.logFile = logFile;
            console.error(err);
    clearCache() {
            // @ts-ignore
            this.logInfo(`${msg.eventType} event: ${JSON.stringify(msg)}`);
    }
     */
        this._defaultMeetingSettings = value;
     */
            headers: {
                let processed = false;

                }
     * @param {string} message - The message to add.
                }

     * Adds a listener for the event type.
    private readonly url;
            }
        visitorsLive?: boolean;
    logInfo(message: string) {
                    this.cache.set(msg.eventType, msg);

    }
    /**
        });
                    this.consumers.get(msg.eventType)(msg);
        this.logInfo('cache cleared');
    }
                    this.consumers.delete(msg.eventType);
     */
                    let response: any = { someField: 'someValue' };
            }, timeout);
        lobbyType?: 'WAIT_FOR_APPROVAL' | 'WAIT_FOR_MODERATOR';
            });

            callback(this.cache.get(eventType));
    private consumers = new Map();
                    processed = true;
     * @param eventType
        this.consumers.set(eventType, callback);
                clearTimeout(waiter);
    removeListener(eventType: string) {
            this.cache.delete(eventType);
                    this.listeners.get(msg.eventType)(msg);
    /**
        this.listeners.set(eventType, callback);
    }) {
        });
    /**
    addListener(eventType: string, callback: (data: any) => void) {

            const waiter = setTimeout(() => {
        asyncTranscriptions?: boolean;
                    processed = true;
            if (msg.eventType) {
    /**
     * @param eventType
/**
                    }

        // we create the error here so we have a meaningful stack trace
import WebSocket from 'ws';
        this.ws = new WebSocket(this.url, {

            fs.appendFileSync(this.logFile, `${new Date().toISOString()} ${message}\n`);
        });
    }
                    this.ws?.send(JSON.stringify(response));
     * Logs a message in the logfile.


            this.ws.close();
    async waitForEvent(eventType: string, timeout = 120000): Promise<any> {
                Authorization: this.secret
        } catch (err) {
    }
        visitorsEnabled?: boolean;
    disconnect() {

            return;
            console.log('WebhookProxy connected');
                    // just in case to not be empty
    connect() {
     * @param value
     */
}

    /**
        this.cache.clear();
     * @returns {void}
     */
    /**
        passcode?: string;

            const msg = JSON.parse(data.toString());
        autoTranscriptions?: boolean;
     * @param logFile
     * Waits for the event to be received.
                    if (this._defaultMeetingSettings) {
     * @param callback
     * @param url
        this.secret = secret;
    }
     * Adds a listener for the event type.
    private _defaultMeetingSettings: object | undefined;
