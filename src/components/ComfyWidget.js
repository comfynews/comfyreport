import React, {Component} from 'react';


class ComfyWidget extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidMount() {
        const script = document.createElement('script');
        script.src = "https://static.coinstats.app/widgets/coin-price-widget.js";
        script.async = true;

        this.myRef.current.appendChild(script);
    }

    render() {
        return (
            <div ref={this.myRef}>
                <coin-stats-ticker-widget coin-id="comfytoken"
                                          locale="en"
                                          currency="USD"
                                          rank-background="#F9C01C"
                                          background=""
                                          status-up-color="#7DFDFF"
                                          status-down-color="#F0537E"
                                          rank-text-color="#1C1B1B"
                                          text-color="#FFF8E9"
                                          border-color="rgba(255,255,255,0)"
                                          type="medium"
                                          height="125"
                                          fontWeight="lighter"
                                          width="350"/>
            </div>
        );
    }
}

export default ComfyWidget;