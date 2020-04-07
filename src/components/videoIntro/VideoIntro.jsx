import React, { Component } from 'react';

class VideoIntro extends Component {
    render() {
        return (
            <div style={{ color: "#dedada" }}>
                <div>
                    <div className="row">
                        <div
                            className="col-sm-1 col-md-6 text-center"
                            data-aos="fade-right"
                            style={{ color: "#dedada" }}
                        >
                            <h1 className="shake animated" style={{ color: "rgb(0,0,0)" }}>
                                What do we do ...
              </h1>
                            <p className="text-left" style={{ color: "rgb(0,0,0)" }}>
                                <br />
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classNameical Latin literature
                from 45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classNameical literature, discovered the undoubtable source.

                            </p>
                            <button
                                className="btn col-12 bg-col1 txt-col4 bounce animated infinite"
                                type="button"
                                style={{ marginBottom: "10px" }}
                            >
                                Join with us
                            </button>
                        </div>
                        <div className="col-sm-1 col-md-6 text-center" data-aos="fade-left">
                            <iframe
                                allowFullScreen
                                title="frame"
                                frameBorder="0"
                                src="https://www.youtube.com/embed/668nUCeBHyY?autoplay=1&amp;mute=1&amp;loop=1&amp;playlist=668nUCeBHyY"
                                width="560"
                                height="98%"
                                style={{
                                    position: "relative",
                                    width: "100%",
                                    top: "1%",
                                    right: "1%"
                                }}
                            ></iframe>
                        </div>
                    </div>
                </div>
                <br />
                <br />
            </div>
        );
    }
}

export default VideoIntro;