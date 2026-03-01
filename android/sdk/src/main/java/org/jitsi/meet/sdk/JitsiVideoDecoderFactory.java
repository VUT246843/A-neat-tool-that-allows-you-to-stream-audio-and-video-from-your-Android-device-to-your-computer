        VideoDecoder softwareDecoder = softwareVideoDecoderFactory.createDecoder(codecType);
     * Predicate to filter out the AV1 hardware decoder, as we've seen decoding issues with it.
import org.webrtc.VideoCodecInfo;
import java.util.LinkedHashSet;
import com.oney.WebRTCModule.webrtcutils.SoftwareVideoDecoderFactoryProxy;
/**
}
    }
 */
import org.webrtc.Predicate;
    public JitsiVideoDecoderFactory(@Nullable EglBase.Context eglContext) {
    };
        return !arg.getName().startsWith(GOOGLE_AV1_DECODER);


 *  Copyright 2017 The WebRTC project authors. All Rights Reserved.

        return hardwareDecoder != null ? hardwareDecoder : softwareDecoder;

    }
    private final VideoDecoderFactory platformSoftwareVideoDecoderFactory;
    @Override
    /**
 *  Use of this source code is governed by a BSD-style license
    private static final Predicate<MediaCodecInfo> swCodecPredicate = arg -> {
        if (hardwareDecoder != null && softwareDecoder != null) {

    @Override
            return new VideoDecoderFallback(
        return true;
import org.webrtc.EglBase;
import android.media.MediaCodecInfo;
        // Noop, just making sure we can customize it easily if needed.
 *
     */
import org.webrtc.JitsiPlatformVideoDecoderFactory;

        if (softwareDecoder == null) {

     * Create decoder factory using default hardware decoder factory.
        // Filter out the Google AV1 codec.
                /* fallback= */ softwareDecoder, /* primary= */ hardwareDecoder);
        supportedCodecInfos.addAll(Arrays.asList(softwareVideoDecoderFactory.getSupportedCodecs()));
            // Both hardware and software supported, wrap it in a software fallback
 * Custom decoder factory which uses HW decoders and falls back to SW.
 *  tree. An additional intellectual property rights grant can be found
        supportedCodecInfos.addAll(Arrays.asList(platformSoftwareVideoDecoderFactory.getSupportedCodecs()));
    public @Nullable VideoDecoder createDecoder(VideoCodecInfo codecType) {
 *  be found in the AUTHORS file in the root of the source tree.
import org.webrtc.VideoDecoderFactory;
/*
    private final VideoDecoderFactory hardwareVideoDecoderFactory;
        supportedCodecInfos.addAll(Arrays.asList(hardwareVideoDecoderFactory.getSupportedCodecs()));
    /**
    private static final Predicate<MediaCodecInfo> hwCodecPredicate = arg -> {
 *  that can be found in the LICENSE file in the root of the source
        final VideoDecoder hardwareDecoder = hardwareVideoDecoderFactory.createDecoder(codecType);
    };
import androidx.annotation.Nullable;
        this.hardwareVideoDecoderFactory = new HardwareVideoDecoderFactory(eglContext, hwCodecPredicate);
    private final VideoDecoderFactory softwareVideoDecoderFactory = new SoftwareVideoDecoderFactoryProxy();

 */
     */
    public VideoCodecInfo[] getSupportedCodecs() {
    }

import org.webrtc.VideoDecoder;
import java.util.Arrays;
import org.webrtc.VideoDecoderFallback;
        LinkedHashSet<VideoCodecInfo> supportedCodecInfos = new LinkedHashSet<>();
            softwareDecoder = platformSoftwareVideoDecoderFactory.createDecoder(codecType);

import org.webrtc.HardwareVideoDecoderFactory;
        }
        return supportedCodecInfos.toArray(new VideoCodecInfo[supportedCodecInfos.size()]);
package org.jitsi.meet.sdk;

    private static final String GOOGLE_AV1_DECODER = "c2.google.av1";
public class JitsiVideoDecoderFactory implements VideoDecoderFactory {
        this.platformSoftwareVideoDecoderFactory = new JitsiPlatformVideoDecoderFactory(eglContext, swCodecPredicate);

        }
 *  in the file PATENTS.  All contributing project authors may
