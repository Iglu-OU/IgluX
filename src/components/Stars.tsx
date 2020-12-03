import * as React from 'react';
import { useEffect, useState } from 'react';

export interface IStar {
    id: string;
    x: number;
    y: number;
    on: boolean;
    size: number;
    opacity: number;
    clign: boolean;
}

export interface IStars {
    id?: string;
    maxStars?: number;
}

const CANVAS_DEFAULT_ID: string = 'canvas';

export const Stars = (props: IStars) => {
    const { id, maxStars } = props;
    function debounce(fn: (...args: any[]) => any, timeout: number, delay: number): (...args: any[]) => any {
        return (...args: any[]) => {
            if (timeout) {
                window.clearTimeout(timeout);
            }

            timeout = window.setTimeout(() => {
                fn.apply(this, args);
            }, delay);
        };
    }

    let canvas: HTMLCanvasElement | null = null;
    let context: CanvasRenderingContext2D | null = null;
    let stars: IStar[] = [];
    const debounceTimeout: number = 0;
    let debouncedResizeHandler: () => any;
    // let windowWidth: number | null = null;
    const [windowWidth, setWindowWidth] = useState<number | null>(null);

    useEffect(() => {
        debouncedResizeHandler = debounce(resizeHandler, debounceTimeout, 100);
    });

    useEffect(() => {
        if (canvas) {
            context = canvas.getContext('2d');
        }

        setWindowWidth(document.documentElement.clientWidth);

        init();
        drawSky();

        window.addEventListener('resize', debouncedResizeHandler);
    }, []);

    const resizeHandler = () => {
        const newWidth: number = document.documentElement.clientWidth;

        if (newWidth !== windowWidth) {
            setWindowWidth(newWidth);

            init();
        }
    };

    function getStar(index: number): IStar {
        const width = document.body.getBoundingClientRect().width;
        const teamSection = document.getElementById(id || CANVAS_DEFAULT_ID);
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

    function drawStar(star: IStar, index: number) {
        const { x, y, size, on, opacity, clign } = star;

        const halfSize = size / 2;
        const curve = size / 2.75;
        const maxX = x + halfSize;
        const maxY = y + halfSize;
        const random = Math.random();
        const speed = random * (0.015 - 0.015) + 0.005;

        if (on) {
            if (opacity > random * (1 - 0.6) + 0.6 || opacity < random * 0.3) {
                stars[index] = { ...stars[index], clign: !clign };
            }
            stars[index] = {
                ...stars[index],
                on: random > 0.005,
                opacity: clign ? opacity + speed : opacity - speed,
            };
        } else {
            stars[index] = { ...stars[index], on: random > 0.5, opacity: opacity < 0 ? 0 : opacity - speed };
        }

        if (context) {
            context.fillStyle = '#fff';

            context.globalAlpha = opacity < 0 ? 0 : opacity;
            context.globalAlpha = opacity > 1 ? 1 : opacity;

            context.beginPath();
            context.moveTo(maxX, y);
            context.bezierCurveTo(x + curve, maxY, x + curve, maxY, maxX, y + size);
            context.bezierCurveTo(x + size - curve, maxY, x + size - curve, maxY, maxX, y);
            context.fill();
            context.closePath();
            context.beginPath();
            context.moveTo(x, maxY);
            context.bezierCurveTo(maxX, y + curve, maxX, y + curve, x + size, maxY);
            context.bezierCurveTo(maxX, y + size - curve, maxX, y + size - curve, x, maxY);
            context.fill();
            context.closePath();
        }
    }

    const init = () => {
        const width = document.body.getBoundingClientRect().width;
        const numberOfStars = maxStars ? maxStars : width / 2 < 400 ? 400 : width / 2;

        if (canvas && document) {
            canvas.width = width;
            const teamSection = document.getElementById(id || CANVAS_DEFAULT_ID);
            canvas.height = teamSection ? teamSection.getBoundingClientRect().height : window.outerHeight;
        }

        stars = [];
        for (let i = 0; i < numberOfStars; i++) {
            stars.push(getStar(i));
        }
    };

    const drawSky = () => {
        if (context && canvas) {
            context.clearRect(0, 0, canvas.width, canvas.height);

            stars.map((star, index: number) => {
                drawStar(star, index);
            });

            requestAnimationFrame(drawSky);
        }
    };

    return <canvas id={id || CANVAS_DEFAULT_ID} className="canvas" ref={(el) => (canvas = el)} />;
};
