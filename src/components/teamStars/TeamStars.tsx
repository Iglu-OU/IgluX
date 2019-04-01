import * as React from 'react';

import './TeamStars.scss';

export interface IStar {
    id: string;
    x: number;
    y: number;
    on: boolean;
    size: number;
    opacity: number;
    clign: boolean;
}

export class TeamStars extends React.Component {
    static debounce(fn: (...args: any[]) => any, timeout: number, delay: number): (...args: any[]) => any {
        return (...args: any[]) => {
            if (timeout) {
                window.clearTimeout(timeout);
            }

            timeout = window.setTimeout(() => {
                fn.apply(this, args);
            }, delay);
        };
    }

    canvas: HTMLCanvasElement | null = null;
    context: CanvasRenderingContext2D | null = null;
    stars: IStar[] = [];
    debounceTimeout: number = 0;
    debouncedResizeHandler: () => any;
    windowWidth: number | null = null;

    constructor(props: any) {
        super(props);

        this.debouncedResizeHandler = TeamStars.debounce(this.resizeHandler, this.debounceTimeout, 100);
    }

    componentDidMount() {
        if (this.canvas) {
            this.context = this.canvas.getContext('2d');
        }

        this.windowWidth = document.documentElement.clientWidth;

        this.init();
        this.drawSky();

        window.addEventListener('resize', this.debouncedResizeHandler);
    }

    resizeHandler = () => {
        const windowWidth: number = document.documentElement.clientWidth;

        if (windowWidth !== this.windowWidth) {
            this.windowWidth = windowWidth;

            this.init();
        }
    }

    getStar(index: number): IStar {
        const width = document.body.getBoundingClientRect().width;
        const teamSection = document.getElementById('canvas');
        const height = teamSection ? teamSection.getBoundingClientRect().height : 0;
        const on = Math.random() > 0.1;

        return {
            id: index.toString(),
            x: Math.random() * width,
            y: Math.random() * height,
            on,
            size: Math.random() * (13 - 1) + 1,
            opacity: on ? Math.random() * 0.8 : 0,
            clign: Math.random() > 0.5,
        };
    }

    drawStar(star: IStar, index: number) {
        const { x, y, size, on, opacity, clign } = star;

        const halfSize = size / 2;
        const curve = size / 2.75;
        const maxX = x + halfSize;
        const maxY = y + halfSize;
        const random = Math.random();
        const speed = random * (0.015 - 0.015) + 0.005;

        if (on) {
            if (opacity > random * (1 - 0.6) + 0.6 || opacity < random * 0.3) {
                this.stars[index] = { ...this.stars[index], clign: !clign };
            }
            this.stars[index] = {
                ...this.stars[index],
                on: random > 0.005,
                opacity: clign ? opacity + speed : opacity - speed,
            };
        } else {
            this.stars[index] = { ...this.stars[index], on: random > 0.5, opacity: opacity < 0 ? 0 : opacity - speed };
        }

        if (this.context) {
            this.context.fillStyle = '#fff';

            this.context.globalAlpha = opacity < 0 ? 0 : opacity;
            this.context.globalAlpha = opacity > 1 ? 1 : opacity;

            this.context.beginPath();
            this.context.moveTo(maxX, y);
            this.context.bezierCurveTo(x + curve, maxY, x + curve, maxY, maxX, y + size);
            this.context.bezierCurveTo(x + size - curve, maxY, x + size - curve, maxY, maxX, y);
            this.context.fill();
            this.context.closePath();
            this.context.beginPath();
            this.context.moveTo(x, maxY);
            this.context.bezierCurveTo(maxX, y + curve, maxX, y + curve, x + size, maxY);
            this.context.bezierCurveTo(maxX, y + size - curve, maxX, y + size - curve, x, maxY);
            this.context.fill();
            this.context.closePath();
        }
    }

    init = () => {
        const width = document.body.getBoundingClientRect().width;
        const numberOfStars = width / 2 < 400 ? 400 : width / 2;

        if (this.canvas && document) {
            this.canvas.width = width;
            const teamSection = document.getElementById('canvas');
            this.canvas.height = teamSection ? teamSection.getBoundingClientRect().height : window.outerHeight;
        }

        this.stars = [];
        for (let i = 0; i < numberOfStars; i++) {
            this.stars.push(this.getStar(i));
        }
    }

    drawSky = () => {
        if (this.context && this.canvas) {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

            this.stars.map((star, index: number) => {
                this.drawStar(star, index);
            });

            requestAnimationFrame(this.drawSky);
        }
    }

    render() {
        return <canvas id="canvas" className="canvas" ref={(el) => (this.canvas = el)} />;
    }
}
