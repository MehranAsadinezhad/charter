/* SYSTEM IMPORT */
import AuthHeader from "./AuthHeader";
import axios from "axios";
import PropTypes from 'prop-types';
import {useHistory} from "react-router-dom";

const Server = ({
    handle: async (url, _pC, formData = null, authFlag = false, callbackLoader = "") => {
        let header = {};
        let onUpload = {};
        let sendURL = window._goharConf.plusApi + url;

        //region set header
        if (authFlag) {
            header = AuthHeader();
        }
        //endregion

        //region set percent upload loader
        if (callbackLoader) {
            if (callbackLoader === "simple") {
                _pC.loader.on();
            } else if (callbackLoader === "file") {
                _pC.loader.on();
                header["Content-Type"] = "multipart/form-data";
            } else {
                header["Content-Type"] = "multipart/form-data";
                onUpload = (progressEvent) => {
                    callbackLoader(progressEvent);
                };
            }
        }
        //endregion

        //region set locale lang
        if (!formData)
            formData = new FormData();
        formData.append("lang", window.localStorage.getItem("_lang"));
        //endregion

        return await axios.post(sendURL, formData, {
            headers: header,
            onUploadProgress: onUpload,
        })
            .then(res => {
                if (res.data.status !== 'success') {
                    _pC.afterServer(res.data);
                    return false;
                } else return res.data;
            })
            .catch(() => {
                _pC.alert.handle("error", "networkError", null, 3000);
            })
            .finally(() => {
                if (callbackLoader)
                    _pC.loader.off();
            });
    },
});

Server.PropTypes = {
    url: PropTypes.string.isRequired,
    extraContext: PropTypes.func.isRequired,
    formData: PropTypes.any,
    authFlag: PropTypes.bool,
    callbackLoader: PropTypes.oneOfType([
        PropTypes.string, //simple
        PropTypes.func, //progress callback func
    ]),
}

export default Server;
