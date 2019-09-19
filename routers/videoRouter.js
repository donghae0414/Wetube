import express from "express";
import routes from "../routes";
import {  
    upload, 
    videoDetail, 
    editVideo, 
    deleteVideo
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
// export const videoRouter -> it means i export only this value
// export default videoTouter -> it means i export this file