    });

 * from the context is used.
export async function joinJaasMuc(
}
        ...options,

import { joinMuc } from './joinMuc';
 * Creates a new Participant and joins the MUC with the given options. The jaas-specific properties must be set as
 * @returns {Promise<Participant>} The Participant that has joined the MUC.
import { IParticipantJoinOptions, IParticipantOptions } from './types';
    });
}
        throw new Error('JaaS is not configured.');

    return await joinMuc(participantOptions, {
/**
        joinOptions?: Partial<IParticipantJoinOptions>): Promise<Participant> {

 */
        participantOptions?: Partial<IParticipantOptions>,
    return generateToken({
 * environment variables (see env.example and TestsConfig.ts). If no room name is specified, the default room name
    if (!config.jaas.enabled) {
 * @param participantOptions
        keyId: options.keyId || config.jaas.kid,
    if (!config.jaas.enabled) {
        keyPath: options.keyPath || config.jaas.privateKeyPath
export function generateJaasToken(options: ITokenOptions): IToken {
 *

import { Participant } from './Participant';
    }
import { IToken, ITokenOptions, generateToken } from './token';
    }
        ...joinOptions,
 * @param joinOptions options to use when joining the MUC.
        throw new Error('JaaS is not configured.');
        tenant: joinOptions?.tenant || config.jaas.tenant
    // Don't override the keyId and keyPath if they are already set in options, allow tests to set them.
import { config } from './TestsConfig';
