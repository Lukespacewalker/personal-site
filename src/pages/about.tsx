import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { intro, introText, introImage, introSvg } from "./about.module.scss";
import { MainLayout } from "@layouts/main-layout";

export default (props) => {
    return (
        <MainLayout>
            <section className={`${intro}`}>
                <div className={introText}>
                    <h1 className="text-gradient">สุทธิศักดิ์</h1>
                    <h4>การศึกษา</h4>
                    <div>มหิดลวิทยานุสรณ์ 17</div>
                    <div>แพทย์ศาสตร์บัณฑิต จุฬาลงกรณ์มหาวิทยาลัย 66</div>
                    <div>ปริญญาโท สาขาการวิจัยและการจัดการด้านสุขภาพ ภาควิชาเวชศาสตร์ป้องกันและสังคม คณะแพทย์ศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย</div>
                    <div>แพทย์เฉพาะทางสาขาเวชศาสตร์ป้องกันแขนง อาชีวเวชศาสตร์</div>
                    <h4>ความสนใจ</h4>
                    <div>อยากเข้าร่วมทำงานด้าน Health Tech</div>
                </div>
                <div className={introImage}>
                    <svg className={`absolute ${introSvg}`} id="visual" viewBox="0 0 900 900" xmlns="http://www.w3.org/2000/svg" version="1.1">
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stop-color="#8360c3" />
                                <stop offset="50%" stop-color="#f7797d" />
                                <stop offset="100%" stop-color="#f7b733" />
                            </linearGradient>
                            <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stop-color="#f7b733" />
                                <stop offset="50%" stop-color="#8360c3" />
                                <stop offset="100%" stop-color="#f7797d" />
                            </linearGradient>
                        </defs>
                        <g transform="translate(430.78530386483163 447.55227954259226), scale(1.1,1)">
                            <path d="M204.1 -310.4C272.3 -273.7 340.8 -230.3 344 -172.1C347.1 -114 284.9 -41 261.9 29.4C238.9 99.7 255.1 167.4 234.4 218C213.7 268.7 156.2 302.2 91.2 330.4C26.2 358.5 -46.2 381.2 -116.7 372.1C-187.1 362.9 -255.7 321.9 -278.3 260.7C-300.9 199.5 -277.7 118 -281.5 44.8C-285.4 -28.5 -316.4 -93.6 -301.8 -142.9C-287.2 -192.2 -226.8 -225.6 -168.9 -267C-111 -308.4 -55.5 -357.7 6.2 -367.4C67.9 -377.1 135.9 -347.1 204.1 -310.4"
                                fill="none"
                                stroke="url(#gradient)"
                                stroke-width="8"></path>
                        </g>
                        <g transform="translate(510.0414714584376 470.70231052748807), scale(1.1,1)" >
                            <path d="M183.2 -339.1C216.4 -298.1 207.8 -206.6 219.3 -141.6C230.8 -76.7 262.4 -38.3 269.5 4.1C276.5 46.5 259.1 93 235.5 137C211.9 181 182.2 222.6 141.9 261.3C101.7 300.1 50.8 336 6.7 324.5C-37.5 313 -75 253.9 -125.8 221.2C-176.6 188.6 -240.7 182.3 -295.3 149.8C-349.9 117.3 -394.9 58.7 -390.9 2.3C-386.9 -54 -333.7 -108 -287.9 -155.6C-242.1 -203.3 -203.5 -244.5 -156.8 -277.7C-110 -310.9 -55 -335.9 10 -353.2C75 -370.6 150 -380.1 183.2 -339.1"
                                fill="url(#gradient2)"
                                stroke="url(#gradient2)" stroke-width="8"></path></g>
                    </svg>
                    <StaticImage
                        src="../images/author.jpg"
                        className="m-6 rounded-md sm:rounded-xl shadow-xl w-96 h-96 sm:w-[36rem] sm:h-[36rem]"
                        alt="author"
                        imgStyle={{ objectPosition: `center center` }}
                    />
                </div>
            </section>
        </MainLayout>
    );
};
