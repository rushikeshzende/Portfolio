"use client";

import { useCallback, useRef } from 'react';

export const useSound = () => {
  const audioContextRef = useRef<AudioContext | null>(null);

  const getAudioContext = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return audioContextRef.current;
  }, []);

  const playTone = useCallback((frequency: number, duration: number, type: OscillatorType = 'sine', volume: number = 0.1) => {
    try {
      const audioContext = getAudioContext();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
      oscillator.type = type;

      gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + duration);
    } catch (error) {
      console.warn('Audio playback failed:', error);
    }
  }, [getAudioContext]);

  const playSequence = useCallback((notes: Array<{freq: number, duration: number, type?: OscillatorType}>, volume: number = 0.08) => {
    notes.forEach((note, index) => {
      setTimeout(() => {
        playTone(note.freq, note.duration, note.type || 'sine', volume);
      }, index * 80); // Slight delay between notes
    });
  }, [playTone]);

  // Project cards - playful ascending notes
  const playProjectHoverSound = useCallback(() => {
    playSequence([
      { freq: 523, duration: 0.08, type: 'triangle' }, // C5
      { freq: 659, duration: 0.08, type: 'triangle' }, // E5
    ], 0.12);
  }, [playSequence]);

  const playProjectClickSound = useCallback(() => {
    playSequence([
      { freq: 440, duration: 0.1, type: 'square' }, // A4
      { freq: 554, duration: 0.1, type: 'square' }, // C#5
      { freq: 659, duration: 0.15, type: 'sawtooth' }, // E5
    ], 0.15);
  }, [playSequence]);

  // Skills - bubbly pop sound
  const playSkillHoverSound = useCallback(() => {
    playSequence([
      { freq: 800, duration: 0.05, type: 'sine' },
      { freq: 1000, duration: 0.03, type: 'sine' },
    ], 0.08);
  }, [playSequence]);

  const playSkillClickSound = useCallback(() => {
    playSequence([
      { freq: 600, duration: 0.08, type: 'triangle' },
      { freq: 750, duration: 0.06, type: 'triangle' },
      { freq: 900, duration: 0.04, type: 'triangle' },
    ], 0.1);
  }, [playSequence]);

  // CTA buttons - confident chime
  const playButtonHoverSound = useCallback(() => {
    playSequence([
      { freq: 784, duration: 0.06, type: 'sine' }, // G5
      { freq: 988, duration: 0.04, type: 'sine' }, // B5
    ], 0.1);
  }, [playSequence]);

  const playButtonClickSound = useCallback(() => {
    playSequence([
      { freq: 523, duration: 0.1, type: 'triangle' }, // C5
      { freq: 659, duration: 0.1, type: 'triangle' }, // E5
      { freq: 784, duration: 0.15, type: 'triangle' }, // G5
    ], 0.12);
  }, [playSequence]);

  // Generic sounds (for backward compatibility)
  const playHoverSound = useCallback(() => playProjectHoverSound(), [playProjectHoverSound]);
  const playClickSound = useCallback(() => playProjectClickSound(), [playProjectClickSound]);
  const playCardEntranceSound = useCallback(() => {
    playTone(400, 0.2, 'triangle', 0.08);
  }, [playTone]);

  return {
    // Specific sounds for different elements
    playProjectHoverSound,
    playProjectClickSound,
    playSkillHoverSound,
    playSkillClickSound,
    playButtonHoverSound,
    playButtonClickSound,

    // Generic sounds (backward compatibility)
    playHoverSound,
    playClickSound,
    playCardEntranceSound,
  };
};