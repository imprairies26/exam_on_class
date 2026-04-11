import { useEffect, useRef, useCallback } from 'react';
import { PanResponder, AppState } from 'react-native';

/**
 * useInactivityTimeout – auto call callback when user not interact
 *
 * @param {number} timeoutMs  – timeout duration (ms), default 60000 (1 minute)
 * @param {Function} onTimeout – function called when timeout (e.g., logout)
 * @param {boolean} enabled    – only active when true (e.g., isLoggedIn)
 * @returns {{ panHandlers: object, resetTimer: Function }}
 */
export default function useInactivityTimeout(timeoutMs = 60000, onTimeout, enabled = true) {
    const timerRef = useRef(null);
    const onTimeoutRef = useRef(onTimeout);

    // update ref when callback changes
    useEffect(() => {
        onTimeoutRef.current = onTimeout;
    }, [onTimeout]);

    // reset timer
    const resetTimer = useCallback(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        if (enabled) {
            timerRef.current = setTimeout(() => {
                console.log('[Inactivity] Timeout reached – logging out');
                onTimeoutRef.current?.();
            }, timeoutMs);
        }
    }, [timeoutMs, enabled]);

    // PanResponder to detect touch
    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponderCapture: () => {
                resetTimer();
                return false; // don't block touch event
            },
            onMoveShouldSetPanResponderCapture: () => {
                resetTimer();
                return false;
            },
        })
    );

    // update panResponder when resetTimer changes
    useEffect(() => {
        panResponder.current = PanResponder.create({
            onStartShouldSetPanResponderCapture: () => {
                resetTimer();
                return false;
            },
            onMoveShouldSetPanResponderCapture: () => {
                resetTimer();
                return false;
            },
        });
    }, [resetTimer]);

    // start / stop timer
    useEffect(() => {
        if (enabled) {
            resetTimer();
        } else {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
                timerRef.current = null;
            }
        }
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, [enabled, resetTimer]);

    // handle when app from background -> foreground
    useEffect(() => {
        const subscription = AppState.addEventListener('change', (nextAppState) => {
            if (nextAppState === 'active' && enabled) {
                resetTimer();
            }
        });
        return () => subscription?.remove();
    }, [enabled, resetTimer]);

    return {
        panHandlers: panResponder.current.panHandlers,
        resetTimer,
    };
}
