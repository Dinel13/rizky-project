const ytdl = require("ytdl-core");

async function getYoutubeLinkDownload(videoId) {
  const video_url = `https://www.youtube.com/watch?v=${videoId}`;
  ytdl
    .getInfo(video_url)
    .then((info) => {
      const format = ytdl.chooseFormat(info.formats, { quality: "highest" });
      console.log(`Download link: ${format.url}`);
    })
    .catch((err) => {
      console.error(err);
    });
}

getYoutubeLinkDownload("w2myjAqzACo");
