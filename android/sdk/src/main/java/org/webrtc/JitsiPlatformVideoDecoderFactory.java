        codecInfo -> {
     */
     * @param sharedContext The textures generated will be accessible from this context. May be null,
 *  that can be found in the LICENSE file in the root of the source
     *                      this disables texture support.
 *  in the file PATENTS.  All contributing project authors may
     * Default allowed predicate.
 *  Use of this source code is governed by a BSD-style license
            return MediaCodecUtils.isSoftwareOnly(codecInfo);

    }
import android.media.MediaCodecInfo;


 *
 *  tree. An additional intellectual property rights grant can be found
}
     * Creates a PlatformSoftwareVideoDecoderFactory that supports surface texture rendering.
    /**
    }
/*
    /**
    private static final Predicate<MediaCodecInfo> defaultAllowedPredicate =
        };
            // We only want to use the platform software codecs.
        super(sharedContext, codecAllowedPredicate == null ? defaultAllowedPredicate : codecAllowedPredicate.and(defaultAllowedPredicate));
 */
import androidx.annotation.Nullable;
    public JitsiPlatformVideoDecoderFactory(@Nullable EglBase.Context sharedContext) {
public class JitsiPlatformVideoDecoderFactory extends MediaCodecVideoDecoderFactory {


     */
     *
/** Factory for Android platform software VideoDecoders. */
 *  be found in the AUTHORS file in the root of the source tree.
package org.webrtc;
    public JitsiPlatformVideoDecoderFactory(@Nullable EglBase.Context sharedContext, @Nullable Predicate<MediaCodecInfo> codecAllowedPredicate) {
        super(sharedContext, defaultAllowedPredicate);
 *  Copyright 2018 The WebRTC project authors. All Rights Reserved.
