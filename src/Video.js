import React, {useRef, useState} from 'react'
import "./Video.css"
import VideoFooter from "./VideoFooter"

function Video() {
    const[playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    }

    return (
        <div className="video">
            <video 
                className="video__player" 
                loop 
                onClick={onVideoPress}
                ref={videoRef}
                src="https://v21-us.tiktokcdn.com/video/tos/useast2a/tos-useast2a-ve-0068c001/4191252e8ae841ad815a151480dbfac4/?VExpiration=1609241406&VSignature=d5dfd216897f2bf7df89e38074c058eb&a=1233&br=3070&bt=1535&cd=0%7C0%7C1&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202012290529510101902192232D034DDF&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=anVtdDdmOnJkeDMzNjczM0ApPDloNzRlM2VkNzo7NGk1O2czYzU1NmVjYy5fLS0yMTZzczNfLjY1MjIxYWEzNC9hYWI6Yw%3D%3D&vl=&vr=">
            </video>
            <VideoFooter/>
        </div>
    )
}

export default Video