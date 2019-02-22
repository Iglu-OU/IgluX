import * as React from 'react';

export class WorkFlow extends React.Component {
    waveTopAnimation: Animation | null = null;

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.addEventListener('resize', this.getContentPlacement);
        window.addEventListener('resize', this.checkWavesTopAnimation);
        document.addEventListener('DOMContentLoaded', this.animate(), false);
        this.getContentPlacement();
    }

    getContentPlacement(): any {
        // Calculate px's between water-ice-top and work-flow-section
        const waterIce = document.getElementById('water-ice');
        const workFlowSection = document.getElementById('process');

        const waterIceTop = waterIce ? waterIce.getBoundingClientRect().top : 0;
        const workFlowSectionTop = workFlowSection ? workFlowSection.getBoundingClientRect().top : 0;

        // Add content new top.
        const contentNewTop = waterIceTop - workFlowSectionTop - 20;

        const content = document.getElementById('work-flow__content');
        if (content) {
            content.style.top = `${contentNewTop}px`;
        }
    }

    checkWavesTopAnimation = () => {
        const width = screen.width;

        // Stop animation when screen is smaller than 769px
        if (width <= 768 && this.waveTopAnimation) {
            this.waveTopAnimation!.cancel();
        }

        // Start animation when screen is bigger than 768px and animation is not running.
        if (width > 768 && this.waveTopAnimation && this.waveTopAnimation.playState !== 'running') {
            this.waveTopAnimation.play();
        }
    };

    animate(): any {
        this.animateWavesTop();
        this.animateWaves();
        this.animateIceberg();
    }

    animateIceberg() {
        const iceberg = document.querySelector('.work-flow__iceberg');
        const icebergAnimation: any = {
            transform: ['translateY(-1.5%)', 'translateY(-0%)', 'translateY(-1.5%)'],
            easing: 'ease-in-out',
        };
        if (iceberg) {
            iceberg.animate(icebergAnimation, {
                duration: 8000,
                iterations: Infinity,
            });
        }
    }

    animateWaves() {
        const waves = document.querySelector('.work-flow__waves');
        const wavesAnimation: any = {
            transform: [
                'rotateY(180deg) skewY(0.5deg)',
                'rotateY(180deg) skewY(0deg)',
                'rotateY(180deg) skewY(0.5deg)',
            ],
            easing: 'ease-in-out',
        };
        waves!.animate(wavesAnimation, {
            duration: 4000,
            iterations: Infinity,
        });
    }

    animateWavesTop = () => {
        const waveTop = document.querySelector('.work-flow__wave-top');
        const waveTopAnimation: any = {
            transform: ['translate(-100%, 0)', 'translate(100%, 0)'],
            easing: 'ease-in-out',
        };
        this.waveTopAnimation = waveTop!.animate(waveTopAnimation, {
            duration: 12000,
            iterations: Infinity,
        });
    };

    renderWavesBg() {
        return (
            <svg
                className="work-flow__waves-bg"
                id="work-flow__waves-bg"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 1936 1034"
                preserveAspectRatio="xMidYMax slice"
            >
                <path fill="#1396D4" d="M0,848h1936.1v189.7H0V848z" />
                <path fill="#032230" d="M1936.1,869.8H0V325.4h1936.1V869.8z" />
                <path
                    fill="#05364D"
                    d="M0,914.5c470.9-59.5,947,48.7,1392.4,39.9c289.6-5.7,543.7-72.4,543.7-72.4V761.5c-413.4-77.8-673.8,74.7-969.1,66.5c-215.7-6-701-124-967-64.3V914.5z"
                />
            </svg>
        );
    }

    renderIceberg() {
        return (
            <svg
                className="work-flow__iceberg"
                version="1.1"
                id="svg180"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 1936 1034"
                preserveAspectRatio="xMidYMax slice"
            >
                <path fill="#67929D" d="M1466.8,451.4l-5-121.5l-46,15l-91,84.5l104.5-25.5l6.5,60.5L1466.8,451.4z" />
                <path fill="#67929D" d="M1210.8,207.9l-27,57.5l-4.5,58l40.5,21.5l46-38.5l-4.3-22L1210.8,207.9z" />
                <path fill="#67929D" d="M1284.5,261.4l4.3,49.5l-36.5,38l72.5,80.5l22-96l-27.8-33L1284.5,261.4z" />
                <path
                    fill="#67929D"
                    d="M1461.8,329.9l-46-64.5l-41.5,58l26.5-55.5l-23.8-46.5l-35-41l-4,27.5l-13.2-15l-63.3-42l4.3,15l13.2,30.6l9.8,21.6l49.2,43.2l-44.7-33l-8.8,33l34.5,39l5.8-16l34,45.5l57,15L1461.8,329.9z M1261.5,284.4l-25.7-56l-25-20.5L1261.5,284.4z"
                />
                <path fill="#67929D" d="M1111.8,334.9l22,4.5l36.8-68l-18.8,8L1111.8,334.9z" />
                <path
                    fill="#67929D"
                    d="M1398.8,644.9l68-193.5l-31,13l-31,63l11-47l13.5-76.5l-104.5,25.5l-72.5-80.5l-13,157.5l45.5,88.5l59.5-62.5l35,33.5l10.2,24L1398.8,644.9z"
                />
                <path fill="#67929D" d="M1179.3,323.4l-8,164l57,14l24-152.5l-32.5-4L1179.3,323.4z" />
                <path fill="#67929D" d="M1239.3,506.4l13-157.5l-24,152.5l24,64.5L1239.3,506.4z" />
                <path fill="#67929D" d="M1252.3,348.9l36.5-38l-27.3-26.5l4.3,22l-46,38.5L1252.3,348.9z" />
                <path
                    fill="#67929D"
                    d="M1288.8,310.9l-4.3-49.5l8.8-33l-4.5-10.2l-9.8-21.6l5.4,35.4l-23,52.5L1288.8,310.9z"
                />
                <path fill="#67929D" d="M1265.8,165.9l-5.5-4l-24.5,66.5l25.7,56l23-52.5l-5.4-35.4L1265.8,165.9z" />
                <path fill="#67929D" d="M1265.8,165.9l-4.3-15l-38.2,67.2l12.5,10.2l24.5-66.5L1265.8,165.9z" />
                <path fill="#67929D" d="M1338,207.9l4-27.5l-17.2,12.5L1338,207.9z" />
                <path fill="#67929D" d="M1338,261.4l-49.2-43.2l4.5,10.2L1338,261.4z" />
                <path fill="#67929D" d="M1358.8,329.9l-34,99.5l91-84.5L1358.8,329.9z" />
                <path fill="#67929D" d="M1346.8,333.4l-22,96l34-99.5l-34-45.5l-5.8,16L1346.8,333.4z" />
                <path fill="#67929D" d="M1374.3,323.4l41.5-58l-15,2.5L1374.3,323.4z" />
                <path fill="#67929D" d="M1435.8,464.4l-6.5-60.5l-13.5,76.5l-11,47L1435.8,464.4z" />
                <path fill="#67929D" d="M1210.8,207.9l-40.2,63.5l-36.8,68l45.5-16l4.5-58L1210.8,207.9z" />
                <path
                    fill="#67929D"
                    d="M1214.8,634.4v-85.5l-23.3-33l-20.2-28.5l8-164l-18,166.5l36.5,52.5L1214.8,634.4z"
                />
                <path fill="#67929D" d="M1141.8,480.4l10-42.5v-63l-10,63l-20.5,49.5L1141.8,480.4z" />
                <path
                    fill="#67929D"
                    d="M1133.8,339.4l-22-4.5l9.5,152.5l20.5-49.5l10-63v63l-10,42.5v35.5l19.5-26l18-166.5L1133.8,339.4z"
                />
                <path fill="#67929D" d="M1141.8,515.9l19.5,22l36.5,4.5l-36.5-52.5L1141.8,515.9z" />
                <path
                    fill="#67929D"
                    d="M1299.3,775.9l-36.5-42l-10.5-50.5l-37.5-49l-17-92l-36.5-4.5l30.2,107v-31l14.9,31l46,96L1299.3,775.9z"
                />
                <path
                    fill="#67929D"
                    d="M1324.8,704.4l49.5-29l10.5-41l-22.5-52l-27-9.5l-53.5,41l-29.5-48l-24-64.5l-57-14l20.2,28.5l23.3,33v85.5h13.5l28,31l6.5,68.5l36.5,42L1324.8,704.4z"
                />
                <path fill="#67929D" d="M1344.3,532.4l-59.5,62.5l-45.5-88.5l13,59.5l29.5,48L1344.3,532.4z" />
                <path fill="#67929D" d="M1379.3,565.9l-35-33.5l-9,40.5l27,9.5L1379.3,565.9z" />
                <path fill="#67929D" d="M1389.5,589.9l-10.2-24l-17,16.5L1389.5,589.9z" />
                <path fill="#67929D" d="M1384.8,634.4l4.8-44.5l-27.2-7.5L1384.8,634.4z" />
                <path fill="#67929D" d="M1398.8,644.9l-9.2-55l-4.8,44.5L1398.8,644.9z" />
                <path fill="#67929D" d="M1214.8,634.4l37.5,49l4-18l-28-31H1214.8z" />
                <path fill="#67929D" d="M1262.8,733.9l-6.5-68.5l-4,18L1262.8,733.9z" />
                <path fill="#67929D" d="M1191.5,613.9v31h14.9L1191.5,613.9z" />
                <path fill="#67929D" d="M1281.8,613.9l53.5-41l9-40.5L1281.8,613.9z" />
                <path fill="#99BCC5" d="M1466.8,451.4l-5-121.5l-46,15l-91,84.5l104.5-25.5l6.5,60.5L1466.8,451.4z" />
                <path fill="#99BCC5" d="M1210.8,207.9l-27,57.5l-4.5,58l40.5,21.5l46-38.5l-4.3-22L1210.8,207.9z" />
                <path fill="#99BCC5" d="M1284.5,261.4l4.3,49.5l-36.5,38l72.5,80.5l22-96l-27.8-33L1284.5,261.4z" />
                <path fill="#99BCC5" d="M1111.8,334.9l22,4.5l36.8-68l-18.8,8L1111.8,334.9z" />
                <path
                    fill="#99BCC5"
                    d="M1133.8,339.4l-22-4.5l9.5,152.5l20.5-49.5l10-63v63l-10,42.5v35.5l19.5-26l18-166.5L1133.8,339.4z"
                />
                <path fill="#99BCC5" d="M1179.3,323.4l-8,164l57,14l24-152.5l-32.5-4L1179.3,323.4z" />
                <path
                    fill="#99BCC5"
                    d="M1398.8,644.9l68-193.5l-31,13l-31,63l11-47l13.5-76.5l-104.5,25.5l-72.5-80.5l-13,157.5l45.5,88.5l59.5-62.5l35,33.5l10.2,24L1398.8,644.9z"
                />
                <path fill="#99BCC5" d="M1358.8,329.9l-34,99.5l91-84.5L1358.8,329.9z" />
                <path fill="#99BCC5" d="M1265.8,165.9l-5.5-4l-24.5,66.5l25.7,56l23-52.5l-5.4-35.4L1265.8,165.9z" />
                <path fill="#99BCC5" d="M1141.8,515.9l19.5,22l36.5,4.5l-36.5-52.5L1141.8,515.9z" />
                <path
                    fill="#99BCC5"
                    d="M1299.3,775.9l-36.5-42l-10.5-50.5l-37.5-49l-17-92l-36.5-4.5l30.2,107v-31l14.9,31l46,96L1299.3,775.9z"
                />
                <path fill="#99BCC5" d="M1265.8,165.9l-4.3-15l-38.2,67.2l12.5,10.2l24.5-66.5L1265.8,165.9z" />
                <path fill="#99BCC5" d="M1252.3,348.9l36.5-38l-27.3-26.5l4.3,22l-46,38.5L1252.3,348.9z" />
                <path
                    fill="#99BCC5"
                    d="M1288.8,310.9l-4.3-49.5l8.8-33l-4.5-10.2l-9.8-21.6l5.4,35.4l-23,52.5L1288.8,310.9z"
                />
                <path fill="#99BCC5" d="M1346.8,333.4l-22,96l34-99.5l-34-45.5l-5.8,16L1346.8,333.4z" />
                <path fill="#99BCC5" d="M1374.3,323.4l41.5-58l-15,2.5L1374.3,323.4z" />
                <path fill="#99BCC5" d="M1338,207.9l4-27.5l-17.2,12.5L1338,207.9z" />
                <path
                    fill="#99BCC5"
                    d="M1415.8,265.4l46,64.5l-46,15l-57-15l-34-45.5l49.5,39L1415.8,265.4z M1235.8,228.4l25.7,56l-50.7-76.5L1235.8,228.4z"
                />
                <path fill="#99BCC5" d="M1338,261.4l-49.2-43.2l4.5,10.2L1338,261.4z" />
                <path
                    fill="#99BCC5"
                    d="M1342,180.4l-4,27.5l-13.2-15l-63.3-42l4.3,15l13.2,30.6l9.8,21.6l49.2,43.2l-44.7-33l-8.8,33l34.5,39l5.8-16l49.5,39l26.5-55.5l-23.8-46.5L1342,180.4z"
                />
                <path fill="#99BCC5" d="M1210.8,207.9l-40.2,63.5l-36.8,68l45.5-16l4.5-58L1210.8,207.9z" />
                <path fill="#99BCC5" d="M1239.3,506.4l13-157.5l-24,152.5l24,64.5L1239.3,506.4z" />
                <path fill="#C2DDE8" d="M1210.8,207.9l-27,57.5l-4.5,58l40.5,21.5l46-38.5l-4.3-22L1210.8,207.9z" />
                <path fill="#C2DDE8" d="M1111.8,334.9l22,4.5l36.8-68l-18.8,8L1111.8,334.9z" />
                <path fill="#C2DDE8" d="M1179.3,323.4l-8,164l57,14l24-152.5l-32.5-4L1179.3,323.4z" />
                <path fill="#C2DDE8" d="M1265.8,165.9l-5.5-4l-24.5,66.5l25.7,56l23-52.5l-5.4-35.4L1265.8,165.9z" />
                <path fill="#C2DDE8" d="M1210.8,207.9l-40.2,63.5l-36.8,68l45.5-16l4.5-58L1210.8,207.9z" />
                <path
                    fill="#C2DDE8"
                    d="M1415.8,265.4l46,64.5l-46,15l-57-15l-34-45.5l-5.8,16l-34.5-39l8.8-33l44.7,33l-49.2-43.2l-9.8-21.6l-13.2-30.6l-4.3-15l63.3,42l13.2,15l4-27.5l35,41l23.8,46.5l-26.5,55.5L1415.8,265.4z"
                />
                <path fill="#C2DDE8" d="M1210.8,207.9l50.7,76.5l-25.7-56l-12.5-10.2L1210.8,207.9z" />
                <path
                    fill="#C2DDE8"
                    d="M1324.8,704.4l49.5-29l10.5-41l-22.5-52l-27-9.5l-53.5,41l-29.5-48l-24-64.5l-57-14l20.2,28.5l23.3,33v85.5h13.5l28,31l6.5,68.5l36.5,42L1324.8,704.4z"
                />
                <path fill="#C2DDE8" d="M1288.8,310.9l-4.3-49.5l34.5,39l27.8,33l-94.5,15.5L1288.8,310.9z" />
                <path fill="#C2DDE8" d="M1324.8,429.4l22-96l-94.5,15.5L1324.8,429.4z" />
                <path fill="#C2DDE8" d="M1358.8,329.9l-34,99.5l91-84.5L1358.8,329.9z" />
                <path fill="#C2DDE8" d="M1466.8,451.4l-5-121.5l-46,15l-91,84.5l104.5-25.5l6.5,60.5L1466.8,451.4z" />
                <path
                    fill="#C2DDE8"
                    d="M1398.8,644.9l68-193.5l-31,13l-31,63l11-47l13.5-76.5l-104.5,25.5l-72.5-80.5l-13,157.5l45.5,88.5l59.5-62.5l35,33.5l10.2,24L1398.8,644.9z"
                />
                <path fill="#EBF3F6" d="M1210.8,207.9l-27,57.5l-4.5,58l40.5,21.5l46-38.5l-4.3-22L1210.8,207.9z" />
                <path fill="#EBF3F6" d="M1265.8,165.9l-5.5-4l-24.5,66.5l25.7,56l23-52.5l-5.4-35.4L1265.8,165.9z" />
                <path fill="#EBF3F6" d="M1284.5,261.4l4.3,49.5l-36.5,38l94.5-15.5l-27.8-33L1284.5,261.4z" />
                <path
                    fill="#EBF3F6"
                    d="M1415.8,265.4l46,64.5l-46,15l-57-15l-34-45.5l-5.8,16l-34.5-39l8.8-33l44.7,33l-49.2-43.2l-9.8-21.6l-13.2-30.6l-4.3-15l63.3,42l13.2,15l4-27.5l35,41l23.8,46.5l-26.5,55.5L1415.8,265.4z M1235.8,228.4l25.7,56l-50.7-76.5L1235.8,228.4z"
                />
                <path
                    fill="#FFFFFF"
                    d="M1324.8,284.4l49.5,39l26.5-55.5l-23.8-46.5l-35-41l-4,27.5l-13.2-15l-63.3-42l4.3,15l13.2,30.6l9.8,21.6l49.2,43.2l-44.7-33l-8.8,33l34.5,39L1324.8,284.4z M1235.8,228.4l25.7,56l-50.7-76.5L1235.8,228.4z"
                />
                <path fill="#FFFFFF" d="M1261.5,284.4l-50.7-76.5l-27,57.5l-4.5,58l40.5,21.5l46-38.5L1261.5,284.4z" />
                <path fill="#FFFFFF" d="M1111.8,334.9l22,4.5l36.8-68l-18.8,8L1111.8,334.9z" />
                <path fill="#99BCC5" d="M1250.8,359.4l-30.5-14l-0.5-0.5l32.5,4L1250.8,359.4z" />
            </svg>
        );
    }

    renderWaves() {
        return (
            <svg
                className="work-flow__waves"
                id="front_layer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1936 1034"
                preserveAspectRatio="xMidYMax slice"
            >
                <linearGradient
                    id="wave_2"
                    x1="968.15"
                    y1="692.3397"
                    x2="968.15"
                    y2="1152.9"
                    gradientTransform="matrix(1 0 0 1 0 -298)"
                >
                    <stop offset="0" stopColor="#054868" />
                    <stop offset="1" stopColor="#00283B" stopOpacity="0.5" />
                </linearGradient>
                <linearGradient
                    id="wave_3"
                    x1="968.05"
                    y1="811.0748"
                    x2="968.05"
                    y2="1149.3"
                    gradientTransform="matrix(1 0 0 1 0 -298)"
                >
                    <stop offset="0" stopColor="#054868" />
                    <stop offset="1" stopColor="#00283B" stopOpacity="0.5" />
                </linearGradient>
                <linearGradient
                    id="wave_4"
                    x1="968.1501"
                    y1="947.4127"
                    x2="968.1501"
                    y2="1145.074"
                    gradientTransform="matrix(1 0 0 1 0 -298)"
                >
                    <stop offset="0" stopColor="#054868" />
                    <stop offset="1" stopColor="#00283B" stopOpacity="0.5" />
                </linearGradient>
                <path
                    fill="url(#wave_2)"
                    opacity="0.2"
                    d="M0,854.9V462.8c223.3-71.4,554.8-67.5,848.3-42.4c492,42,775-81.3,1088,6v428.5H0z"
                />
                <path
                    fill="url(#wave_3)"
                    opacity="0.2"
                    d="M1936,843.4V541.6c-234.5-59.7-717.4-8.5-827.4,0c-129.4,10.1-257,27.7-387.3,32.7c-113.5,4.3-227.6-1.1-339.8-11.5c-74.9-7-149.9-16.2-225.9-15.5c-54.1,0.5-155.5-6-155.5-6v310L1936,843.4z"
                />
                <path
                    fill="url(#wave_4)"
                    opacity="0.2"
                    d="M0,847.1V694.4c163.8-23.9,278-34.4,446-43.6c110.5-6,269.5,9.5,379.4,18.2c129.4,10.3,257,20.3,387.4,25.4c113.5,4.4,227.6-1.1,339.8-11.8c75-7.1,149.9-15.3,225.9-15c53.8,0.2,141.8,5.1,157.8,9.9v169.5L0,847.1L0,847.1z"
                />
            </svg>
        );
    }

    renderWavesBottom() {
        return (
            <svg
                className="work-flow__waves-bottom"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 1936 1034"
                preserveAspectRatio="xMidYMax slice"
            >
                <linearGradient
                    id="bottom-wave-1"
                    gradientUnits="userSpaceOnUse"
                    x1="968"
                    y1="-51.4999"
                    x2="968"
                    y2="-286.5024"
                    gradientTransform="matrix(1 0 0 -1 0 738)"
                >
                    <stop offset="0" stopColor="#054868" />
                    <stop offset="1" stopColor="#00283B" stopOpacity="0.5" />
                </linearGradient>
                <linearGradient
                    id="water-ice-gradient"
                    x1="1185.8875"
                    y1="-93.9308"
                    x2="1185.8875"
                    y2="-89.9267"
                    gradientTransform="matrix(1936 0 0 9.14 -2294910 2450.2607)"
                >
                    <stop offset="0" stopColor="#004A55" />
                    <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.7" />
                    <stop offset="1" stopColor="#00434F" stopOpacity="0.4" />
                </linearGradient>
                <linearGradient
                    id="wave_1"
                    x1="968"
                    y1="624.4"
                    x2="968"
                    y2="1139.4"
                    gradientTransform="matrix(1 0 0 1 0 -298)"
                >
                    <stop offset="0" stopColor="#054868" />
                    <stop offset="1" stopColor="#00283B" stopOpacity="0.5" />
                </linearGradient>
                <path
                    fill="url(#bottom-wave-1)"
                    opacity="0.7"
                    className="st0"
                    d="M0,816.7v177.5c0,0.2,167,30.3,326.2,28.2c135.9-1.8,505.8-43.5,710.7-33.5c174.4,8.5,600.7,35.9,690,35.6c100.1-0.4,190.9-10.4,209.1-13.6V816.4c-46-16.4-110.1-26.9-306.1-26.9c-220.2,0-542.5,111.5-759.4,67.7c-209.2-42.2-452-71.5-625.5-67.3C88,793.8,0,816.7,0,816.7z"
                />
                <path
                    fill="#05364D"
                    d="M0.5,920.7c470.8-59.5,947,48.7,1392.3,39.9c289.6-5.7,543.5-72.4,543.5-72.4V767.6c-413.3-77.8-673.6,74.7-968.9,66.5c-215.7-6-563-129.5-966.9-64.3C0.5,769.9,0.5,920.7,0.5,920.7z"
                />
                <path id="water-ice" fill="url(#water-ice-gradient)" opacity="0.3" d="M0,322.4h1936.2v4H0V322.4z" />
                <path fill="url(#wave_1)" opacity="0.2" d="M0,841.4h1936v-515H0V841.4z" />
            </svg>
        );
    }

    renderContent() {
        return (
            <div id="work-flow__content" className="work-flow__content">
                <h1 className="text--white">How we work</h1>
                <dl>
                    <dt className="text--white">Front-end Development</dt>
                    <dd className="text--white">Coding, collaboration with back-end developers</dd>
                    <dt className="text--white">Design</dt>
                    <dd className="text--white stars-bottom">Typography, colors, documentation</dd>
                    <dt className="text--white">Validate</dt>
                    <dd className="text--white">User tests, iterations, analytics</dd>
                    <dt className="text--white">Ideate</dt>
                    <dd className="text--white">Low-fidelity, high-fidelity, clickable, HTML</dd>
                    <dt className="text--white">Discover</dt>
                    <dd className="text--white">Interviews, data analysis, requirements</dd>
                </dl>
            </div>
        );
    }

    render() {
        return (
            <section className="transform-header__workflow" id="process">
                <div className="work-flow">
                    {this.renderWavesBg()}

                    {this.renderIceberg()}

                    {this.renderWaves()}

                    {this.renderWavesBottom()}

                    <div className="work-flow__wave-top" />

                    {this.renderContent()}
                </div>
            </section>
        );
    }
}
