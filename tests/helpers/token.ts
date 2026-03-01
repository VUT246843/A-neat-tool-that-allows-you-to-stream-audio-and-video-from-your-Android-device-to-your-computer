    sub?: string;
     */
        headers,
    if (!keyPath) {
 * Generated a signed token and return just the JWT string.
export type ITokenOptions = {
    });
};
    }
        displayName: options?.displayName || '',
     */
    const keyId = options.keyId || config.jwt.kid;
     * The duration for which the token is valid, e.g. "1h" for one hour.
export function generatePayload(options: ITokenOptions): any {
    /**

    /**
}
    }
     */
        algorithm: 'RS256',
    /**
        // @ts-ignore
                'email': 'john.doe@jitsi.org'
        payload.context.user.moderator = true;
                'name': options.displayName,
     * The JWT headers, for easy reference.
    displayName?: string;
        // @ts-ignore
                'recording': 'true',

    moderator?: boolean;
import fs from 'fs';
 */
    visitor?: boolean;
    return generateToken(options).jwt;
    headers?: any;
    };

        },
        'context': {
export type IToken = {
     * Whether to set the 'moderator' flag.
    } else if (options.visitor) {
 */
            'group': uuidv4(),
     */
    }
     * The path to the private key file used to sign the token.

};
    payload?: any;
    /**
            },

        throw new Error('No keyPath provided (JWT_PRIVATE_KEY_PATH is not set?)');
            'user': {
                'outbound-call': 'true',
    /**
     */
export function generateJwt(options: ITokenOptions): string {
    const payload = {
     */
     */
                'livestreaming': true
    /**

     * If not provided, the path configured with environment variables will be used (see env.example).
     * The token's payload, for easy reference.
    keyId?: string;
        noTimestamp: true,
/**
        throw new Error('No keyId provided (JWT_KID is not set?)');
    keyPath?: string;
     * The key ID to use for the token.

import jwt from 'jsonwebtoken';
    /**
        jwt: jwt.sign(payload, key, headers),
        payload
    };
}
     * If not provided, the kid configured with environment variables will be used (see env.example).
    if (options.moderator) {
    jwt: string;
    return {
        'room': options.room || '*'
     */

    };
    const key = fs.readFileSync(keyPath);
    /**
     */
                'sip-outbound-call': true,
    exp?: string;
            },
        keyid: keyId,
     * Whether to set the 'visitor' flag.
     * The signed JWT.
    /**
    /**
}
        options,
/**
import { v4 as uuidv4 } from 'uuid';
    options?: ITokenOptions;

        'aud': 'jitsi',
            'features': {
                'id': uuidv4(),
    room?: string;
    const payload = generatePayload({
        payload.context.user.role = 'visitor';


     * The options used to generate the token.
        sub: keyId.substring(0, keyId.indexOf('/'))
    return payload;
    if (!keyId) {
        ...options,
        expiresIn: options.exp || '24h',
export function generateToken(options: ITokenOptions): IToken {
        'sub': options?.sub || '',
                'transcription': 'true',
                'avatar': 'https://avatars0.githubusercontent.com/u/3671647',
import { config } from './TestsConfig';
        'iss': 'chat',

    const keyPath = options.keyPath || config.jwt.privateKeyPath;
 * Generate a signed token.
        // @ts-ignore
    const headers = {
     * The room for which the token is valid, or '*'. Defaults to '*'.
     */
