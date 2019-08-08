import React, { Component } from 'react';

export default class Navb extends Component {

    render() {
        return (
<section id="demo" className="dark">
    <header id="demo-header">
        <div className="left">
        <h1><span>Photon</span></h1>
        <ul className="selector">
            <li className="active">Desktop</li>
            <li data-width="1040" data-height="768">Tablet</li>
            <li data-width="788" data-height="1000">Tablet (Portrait)</li>
            <li data-width="350" data-height="568">Mobile</li>
        </ul>
        <ul className="actions">
            <li><a href="/uploads/demos/photon/" className="button popout alt2 offsite icon icon-popout solo"><span
                className="label">Pop Out</span></a></li>
        </ul>
        </div>
        <div className="right">
    <ul className="share">
        <li class="facebook">
            <div class="fb-like fb_iframe_widget" data-href="http://html5up.net/photon" data-send="false" data-layout="button" data-width="100" data-show-faces="true" fb-xfbml-state="rendered" fb-iframe-plugin-query="app_id=&amp;container_width=51&amp;href=http%3A%2F%2Fhtml5up.net%2Fphoton&amp;layout=button&amp;locale=en_US&amp;sdk=joey&amp;send=false&amp;show_faces=true&amp;width=100">
                <span style={{verticalAlign: 'bottom', width: '51px', height: '20px'}}><iframe name="fcc3fde625ba74" width="100px" height="1000px" title="fb:like Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.0/plugins/like.php?app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter.php%3Fversion%3D44%23cb%3Df633cf3718009%26domain%3Dhtml5up.net%26origin%3Dhttps%253A%252F%252Fhtml5up.net%252Ff214fbe145eb95%26relation%3Dparent.parent&amp;container_width=51&amp;href=http%3A%2F%2Fhtml5up.net%2Fphoton&amp;layout=button&amp;locale=en_US&amp;sdk=joey&amp;send=false&amp;show_faces=true&amp;width=100" style={{border: 'none', visibility: 'visible', width: '51px', height: '20px'}} class=""></iframe></span>
            </div>
        </li>
            <li className="twitter">
                <iframe id="twitter-widget-0" scrolling="no" frameborder="0" allowtransparency="true" class="twitter-share-button twitter-share-button-rendered twitter-tweet-button" style={{position: 'static', visibility: 'visible', width: '60px', height: '20px'}} title="Twitter Tweet Button" src="https://platform.twitter.com/widgets/tweet_button.0639d67d95b7680840758b6833f06d87.en.html#dnt=false&amp;id=twitter-widget-0&amp;lang=en&amp;original_referer=https%3A%2F%2Fhtml5up.net%2Fphoton&amp;size=m&amp;text=Photon%3A%20A%20free%20fully%20responsive%20HTML5%2FCSS3%20site%20template&amp;time=1565180761581&amp;type=share&amp;url=https%3A%2F%2Fhtml5up.net%2Fphoton" data-url="https://html5up.net/photon"></iframe>
            </li>
        <li className="google-plus">
            <div className="g-plusone" data-size="medium" data-annotation="none" data-href="https://html5up.net/photon/">
            </div>
        </li>
    </ul>
        <div className="actions"><a href="/" className="button back alt2">Back</a><a href="photon/download"
            className="button alt download on" data-name="photon" data-title="Photon">Download <em>(177,573)</em></a>
        </div>
        </div>
    </header>
</section>
        );
    }

}

