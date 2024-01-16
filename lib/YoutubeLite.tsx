"use client"
import React from "react";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

interface Props {
    id: string,
    thumbnail: string,
    title: string
}
const YoutubeLite = ({ id }: Props) => (
    <div className="rounded-lg">
        <LiteYouTubeEmbed
            id={id}
            aspectHeight={20}
            aspectWidth={50} 
            title={""}
        />
    </div>
);

export default YoutubeLite