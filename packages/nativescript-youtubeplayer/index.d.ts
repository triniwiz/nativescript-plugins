import { YoutubePlayerBase, YoutubePlayerErrors, YoutubePlayerInternalErrors, YoutubePlayerState } from './common';
export { YoutubePlayerErrors, YoutubePlayerState, YoutubePlayerInternalErrors };
export declare class YoutubePlayer extends YoutubePlayerBase {
    onReady(listener: () => void): void;
    onState(listener: (state: YoutubePlayerState) => void): void;
    onCurrentTime(listener: (time: number) => void): void;
    onError(listener: (error: any) => void): void;
    get duration(): number;
    play(): void;
    playById(id: string): void;
    playByUrl(url: string): void;
    cueVideoById(id: string): void;
    cueVideoByUrl(url: string): void;
    pause(): void;
    next(): void;
    mute(): void;
    unmute(): void;
    previous(): void;
    startSeeking(): void;
    seekTo(value: number): void;
    setVolume(value: number): void;
    stop(): void;
    destroy(): void;
    toggleFullScreen(): void;
    get state(): YoutubePlayerState;
}
