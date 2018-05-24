'use strict';
 
function ContentMarker(Component) {
    
    return class extends React.Component {
        
        render() {
            if (this.props.views < 100) {
                return (
                    <New>
                        <Component {...this.props} />
                    </New>
                );
            }    
            else if (this.props.views > 1000) {
                return (
                    <Popular>
                        <Component {...this.props} />
                    </Popular>
                );
            } else {
                return <Component {...this.props} />
            }
        }
    }
}

const MarkedVideo = ContentMarker(Video);
const MarkedArticle = ContentMarker(Article); 
