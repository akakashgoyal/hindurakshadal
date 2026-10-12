/**
 * Web Audio API synthesizer for sacred temple bell and shankhnaad (conch) sounds
 */

class SacredSoundPlayer {
  private ctx: AudioContext | null = null;

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  // Synthesize authentic Sacred Shankhnaad (Conch shell deep harmonic resonant horn)
  public playShankhnaad(): void {
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const duration = 4.2;

    // Master gain
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.001, now);
    masterGain.gain.exponentialRampToValueAtTime(0.4, now + 0.6);
    masterGain.gain.setValueAtTime(0.35, now + 2.8);
    masterGain.gain.exponentialRampToValueAtTime(0.001, now + duration);
    masterGain.connect(ctx.destination);

    // Fundamental + resonant harmonics of a real shankh (approx 220Hz - A3 with subtle pitch rise)
    const baseFreq = 215;
    const harmonics = [
      { ratio: 1, gain: 0.6 },
      { ratio: 2, gain: 0.4 },
      { ratio: 3, gain: 0.3 },
      { ratio: 4, gain: 0.15 },
      { ratio: 5, gain: 0.08 },
    ];

    harmonics.forEach(({ ratio, gain }) => {
      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();

      osc.type = ratio % 2 === 0 ? 'sine' : 'triangle';

      // Shankh pitch envelope: breath swell and subtle rise
      osc.frequency.setValueAtTime(baseFreq * ratio * 0.95, now);
      osc.frequency.exponentialRampToValueAtTime(baseFreq * ratio * 1.05, now + 0.8);
      osc.frequency.setValueAtTime(baseFreq * ratio * 1.05, now + 2.5);
      osc.frequency.exponentialRampToValueAtTime(baseFreq * ratio * 0.92, now + duration);

      oscGain.gain.setValueAtTime(gain, now);

      osc.connect(oscGain);
      oscGain.connect(masterGain);

      osc.start(now);
      osc.stop(now + duration);
    });
  }

  // Synthesize authentic Sacred Mandir Ghanti (Temple Bell with high rich shimmer)
  public playTempleBell(): void {
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const duration = 3.0;

    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.3, now);
    masterGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    masterGain.connect(ctx.destination);

    // Bell frequencies (metallic overtone series)
    const bellFreqs = [587.33, 880, 1174.66, 1760, 2349.32];

    bellFreqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      const decayTime = duration / (idx + 1);
      oscGain.gain.setValueAtTime(0.4 / (idx + 1), now);
      oscGain.gain.exponentialRampToValueAtTime(0.0001, now + decayTime);

      osc.connect(oscGain);
      oscGain.connect(masterGain);

      osc.start(now);
      osc.stop(now + duration);
    });
  }
}

export const sacredAudio = new SacredSoundPlayer();
