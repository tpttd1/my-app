import React, { Component, Fragment } from "react";
import { Col, Row } from "reactstrap";
import { convert, getKeyFromCodePoints, toDataUrl } from "../../../helpers/Utils";
import { list } from "./list";

class Demo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            class: "",
        }
        this.imgRef = React.createRef()
    }

    componentDidMount() {
        // const a = [9775, 65039];
        // const codePoints = getKeyFromCodePoints(a)

        // for (let i = 0; i < arr.length; i++) {
        //     let url = convert(arr[i]);
        //     console.log("url: ", url);
        //     toDataUrl(url, (dataUrl) => {
        //         this.autoDownload(dataUrl, arr[i])
        //     })
        // }
    }

    autoDownload = (url, codePoints) => {
        var a = document.createElement("a")
        a.href = url;
        a.download = codePoints;
        document.body.appendChild(a);
        a.click()
    }

    imgOnError = (id) => {
        document.getElementById(id).style.display = "none";
    }

    render() {

        return (
            <Fragment>
                <Row style={{width: "40%", textAlign: "center"}}>
                    {
                        list.map((item, index) => {
                            return (
                                <a href="#" key={index}>
                                    <img
                                        id={index}
                                        ref={e => {
                                            this.imgRef = e;
                                        }}
                                        onError={() => this.imgOnError(index)}
                                        onLoad={() => {
                                            this.imgRef.style.backgroundImage = null;
                                        }}
                                        alt={item}
                                        src={`${process.env.PUBLIC_URL}/16/${item}.png`}
                                    />
                                </a>
                            )

                        })
                    }
                </Row>

                <div>Downloading...</div>
                {/* <a href="/xxx" download>Downloading</a> */}
            </Fragment>
        )
    }
}

export default Demo;