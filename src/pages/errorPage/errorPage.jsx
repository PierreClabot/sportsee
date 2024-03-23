import PropTypes from 'prop-types';

function ErrorPage(props){
    return(
        <div className="errorPage">
            <div className="error">{props.error}</div>
            <div className="text">{props.text}</div>
        </div>
    )
}

ErrorPage.propTypes = {
    error : PropTypes.string,
    text : PropTypes.string
}
export default ErrorPage