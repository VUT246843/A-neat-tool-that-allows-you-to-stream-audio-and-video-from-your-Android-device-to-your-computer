export async function checkIframeApi(p: Participant) {
    }
}
        ctx.skipSuiteTests = 'The iFrame API is disabled';


import { expectations } from '../../helpers/expectations';
import type { Participant } from '../../helpers/Participant';
    const iframeEnabled = !await p.execute(() => config.disableIframeAPI);
    if (!iframeEnabled) {
import { expect } from '@wdio/globals';
    expect(iframeEnabled).toBe(expectations.iframe.enabled);


    return iframeEnabled;
