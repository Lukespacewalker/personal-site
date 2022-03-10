import * as React from "react";
import { icon } from "./footer.module.scss";
import yt_icon from "@images/ui/youtube_icon.png";
import fb_icon from "@images/ui/fb_icon.png";
import email_icon from "@images/ui/outlook.png";
import instagram_icon from "@images/ui/instagram.png";

export const Footer: React.FunctionComponent = (props) => {
  return (
    <footer id="footer" className="text-sm container flex flex-wrap gap-6 py-6">
      <div className="flex-1 ">
        <div>ติดตามได้ที่</div>
        <div className="flex flex-wrap gap-3">
          <a href="https://www.facebook.com/lukespacewalker">
            <img src={fb_icon} className={icon} />
          </a>
          <a href="https://www.youtube.com/channel/UCdGwXjUz3JZhIk7b9vQRmCQ">
            <img src={yt_icon} className={icon} />
          </a>
          <a href="https://www.instagram.com/lukesp763/">
            <img src={instagram_icon} className={icon} />
          </a>
          <a href="https://500px.com/lukespacewalker">
            <svg
              fill="rgb(50, 50, 50)"
              className={icon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 80 20"
            >
              <title>500px</title>
              <path
                d="M24.83,0a10,10,0,1,0,10,10h0A10.09,10.09,0,0,0,24.83,0Zm0,17.9a7.85,7.85,0,1,1,7.8-7.9h0A7.9,7.9,0,0,1,24.83,17.9ZM46.32,0a10,10,0,1,0,10,10h0A10,10,0,0,0,46.32,0Zm0,17.9a7.85,7.85,0,1,1,7.8-7.9h0A7.77,7.77,0,0,1,46.32,17.9ZM7.63,6a6.74,6.74,0,0,0-5.3,1.4V2.1h9c0.3,0,.5-0.1.5-1s-0.4-.9-0.6-0.9H1.33a0.9,0.9,0,0,0-.9.9V9.9c0,0.5.3,0.6,0.8,0.7a0.76,0.76,0,0,0,.9-0.2h0a5.69,5.69,0,0,1,5-2.4,5.2,5.2,0,0,1,4.5,4.4A5.06,5.06,0,0,1,7.23,18H6.63a5.1,5.1,0,0,1-4.7-3.3c-0.1-.3-0.3-0.5-1.1-0.2s-0.9.5-.8,0.8a7.09,7.09,0,0,0,9,4.2,7.09,7.09,0,0,0,4.2-9A7,7,0,0,0,7.63,6ZM63.12,0.1a5.42,5.42,0,0,0-4.8,5.4v8.9c0,0.5.4,0.6,1,.6s1-.1,1-0.6V5.5a3.36,3.36,0,0,1,2.9-3.4,3.29,3.29,0,0,1,2.5.8,3.19,3.19,0,0,1,1.1,2.4,4,4,0,0,1-.7,1.9,3.15,3.15,0,0,1-2.8,1.3h0c-0.4,0-.7,0-0.8.9,0,0.6,0,.9.5,1a4.92,4.92,0,0,0,2.9-.6,5.37,5.37,0,0,0,2.9-4.2A5.18,5.18,0,0,0,64,0,2.77,2.77,0,0,1,63.12.1Zm13.1,5.2,3.6-3.6c0.1-.1.4-0.4-0.2-1.1a1,1,0,0,0-.7-0.4h0a0.52,0.52,0,0,0-.4.2L74.92,4l-3.6-3.7c-0.3-.3-0.6-0.2-1.1.2s-0.5.8-.2,1.1l3.6,3.6L70,8.9h0a0.76,0.76,0,0,0-.2.4,0.84,0.84,0,0,0,.4.7,1.61,1.61,0,0,0,.7.4h0a1.06,1.06,0,0,0,.5-0.2L75,6.6l3.6,3.6a0.52,0.52,0,0,0,.4.2h0a1,1,0,0,0,.7-0.4c0.3-.4.4-0.8,0.1-1Z"
                transform="translate(0)"
              ></path>
            </svg>
          </a>
          <a href="https://github.com/Lukespacewalker/">
            <svg  aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" className={icon}>
              <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </a>
          <a href="https://mailhide.io/e/qJTML">
            <img src={email_icon} className={icon} />
          </a>
        </div>
      </div>
      <div className="flex-1 text-right">
        {" "}
        © 2016 - {new Date().getFullYear()} สงวนลิขสิทธิ์ สุทธิศักดิ์ เด่นดวงใจ
        <br /> Made with <a href="https://www.gatsbyjs.org/">Gatsby</a>{" "}
        Developed with{" "}
        <a href="https://visualstudio.microsoft.com/">Visual Studio Code</a>
      </div>
    </footer>
  );
};
